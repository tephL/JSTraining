function post(){
    const post_title = document.getElementById("post_title");
    const post_content = document.getElementById("post_content");
    const posts = document.getElementById("posts");

    const posts_arr = [];
    const ctr = 1;
    
    if(post_title.value != '' && post_content.value != ''){
        posts.innerHTML += `<div class="post" id="post#${ctr}">
                <p class="post_title">${post_title.value}</p>
                <p class="post_content">${post_content.value}</p>
            </div>`;
        post_title.value = null;
        post_content.value = null;
    } else{
        alert('MUST HAVE TITLE AND CONTENT');
        
    }
}

function deletePost(){
    const post_num = document.get
}


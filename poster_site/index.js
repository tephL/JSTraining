class Post{
    static idCtr = 1;

    constructor(post_title, post_content){
        this.post_title = post_title;
        this.post_content = post_content;
        this.post_id = Post.idCtr;
        Post.idCtr += 1;
    }
}

let p1 = new Post('Stephen', 'the most goated individual');
let p2 = new Post('tephL', 'the most goated individual');
const posts_arr = [];



const post_title = document.getElementById("post_title");
const post_content = document.getElementById("post_content");
const posts = document.getElementById("posts");


function load_posts(){
    posts.innerHTML = '';
    [...posts_arr].reverse().forEach(element => { // load posts in ascending order
        console.log(element.post_title);
        console.log(element.post_content);
        console.log(element.post_id);
        posts.innerHTML += `<div class="post">
                <div class="top">
                    <p class="post_title">${element.post_title}</p>
                    <button id="delete_post" onclick="deletePost()" value="${element.post_id}">Delete</button>
                </div>
                <p class="post_content">${element.post_content}</p>
            </div>`;
    });
}


function submit(){
    if(post_title.value != '' && post_content.value != ''){
        let p2 = new Post(post_title.value, post_content.value);
        posts_arr.push(p2);
        load_posts();
        post_title.value = null;
        post_content.value = null;
    } else{
        alert('MUST HAVE TITLE AND CONTENT');
    }
}


function deletePost(){
    // 1. get the value of the button
    // value of button must match the id of the
    // 2. remove the post from array by id
    const delete_post = document.getElementById("delete_post").value;
    console.log(delete_post);


    // delete from arr
    let matched_index = posts_arr.findIndex(item => item.post_id == delete_post);
    console.log(matched_index);
    posts_arr.splice(matched_index, 1);
    load_posts();
}


/* 
var Data = [
  { id_list: 1, name: 'Nick', token: '312312' },
  { id_list: 2, name: 'John', token: '123123' },
]

const index = Data.findIndex(item => item.name === 'John');


*/

let userPasword = 1234;

try{
    if(isNaN(userPasword)){
        console.warn('password can only be numbers');
    }else{
        let randomizedPassword = userPasword * 2;
        console.log(`your new pass word is ${randomizedPassword}`);
    }
    // console.lag(); --> leaving this out executes the catch block
} catch(error){
    console.log('error:404')
} finally{
    console.log('this error handling is made by tephL');
}

console.log('AMOGUSSSSSSSYYYYY');
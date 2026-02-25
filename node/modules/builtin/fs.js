/* fs - filesystem
 *    - a module for CRUD and other operations on the absolute and relative file
 *
 *
 *    + mkdir(Path, Callback)
 *    + writeFile(Path, Data, Callback)
 *
 *
 *    - callbacks:
 *          - oftenly used for error handling
 */    

const fs = require("fs");

function makeFolder(FolderName){
    fs.mkdir("./testfromFS/", err => {
        if(err){
            console.log(err);
            return;
        } else{
            console.log("done making dir");
        }
    });
}


function makeFile(FileName, Data){
    fs.writeFile(`./testfromFS/${FileName}.txt`, Data, err => {
        if(err){
            console.log(err);
            return;
        } else{
            console.log("done making a file");
        }
    });
}


makeFile("test", "i must conquer");

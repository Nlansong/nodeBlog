const fs = require('fs');
//fs stands for 'file system

// How to read files
fs.readFile('./docs/blog1.txt', (err, data) =>{
    if(err){
        //console.log(err);
    } 
        //console.log(data.toString());
    
})


//How to write file
//The original text in the blog1 is fellow Ghanaians, I am going to write a new test "Engineer Bright"

fs.writeFile('./docs/blog1.txt', 'Engineer Bright', () =>{
    //console.log('done writing');
})

//How to create and remove directories
//to create a directory
if (!fs.existsSync('./assest')){
    fs.mkdir('./assest', (err) =>{
        if(err){
            //console.log(err)
        }
        //console.log('folder created')
    })
};

// to remove a folder

if(fs.existsSync('./assest')){
    fs.rmdir('./assest', (err) =>{
        if(err){
           // console.log(err)
        }
        //console.log('folder deleted')
    })
}



//delete file
// the is a file in docs folder called 'blog2'. I will delet it.

if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt', (err) =>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
};
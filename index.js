const express = require('express')
const fs = require('fs')
const app = express()

app.post('/create-file',(req,res)=>{
    const folderPath = './my-folder';
    const now = new Date();
    const fileName = `${now.getDate()}_${now.getMonth()+1}_${now.getFullYear()}-${now.getHours()}_${now.getMinutes()}`                                                                                          
    const filePath = `${folderPath}/${fileName}`;

    fs.writeFile(filePath,`Current Timestamp = ${new Date()}`,(err)=>{
        if(err){
            console.log(err);
            res.json({message:"Error creating file"})
        }
        else{
            res.send('FIle created successfully')
        }
    })

})

app.get('/get-files',(req,res)=>{
    const folderPath='./my-folder';

    fs.readdir(folderPath,(err,files)=>{
        if(err){
            console.log(err);
            res.json({message:"Error finding files"})
        }
        else{
            res.send(files)
        }
    })
})

app.listen('3000',()=>{
    console.log('Server is running on port 3000')
})
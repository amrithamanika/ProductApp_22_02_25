// 1. import
const express = require('express')
require("./connection")
 var pModel =require("./model/product")
// 2. intialize
const app = express()
//    midd
app.use(express.json());

// 3. api creation
app.get('/helo',(req, res)=> {
    res.send('Hello World')
  })
//  add api
app.post('/add',async(req,res)=>{
    try {
        await pModel(req.body).save()
        res.send({message:"Data added!"})
    } catch (error) {
        console.log(error);
    }

})
// view
app.get('/view',async(req, res)=> {
   try {
        const data=await pModel.find()
        res.send(data);
   } catch (error) {
        console.log(error);
   }
  })
// update
app.put('/up/:id',async(req, res)=> {
    try {
         const update=await pModel.findByIdAndUpdate(req.params.id,req.body)
         res.send("Data Updated!");
    } catch (error) {
         console.log(error);
    }
   })
// delete
app.delete('/del/:id',async(req, res)=> {
    try {
         await pModel.findByIdAndDelete(req.params.id)
         res.send("Data Deleted!");
    } catch (error) {
         console.log(error);
    }
   })
// 4. port setting
app.listen(3000,()=>{
    console.log("server is running")
})
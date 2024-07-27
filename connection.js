//import mongoose
var mongoose=require('mongoose')
mongoose.connect("mongodb+srv://DevikaG:Devika@cluster0.emuhexx.mongodb.net/Finance?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to Mondo DB")
})
.catch(()=>{
    console.log(err)
})


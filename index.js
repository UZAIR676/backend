//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import  connectDB from "./src/db/index.js"


dotenv.config({
    path: "./env"
})
connectDB()



















// import  Express  from "express"
// const app = Express();
// (async()=>{
//     try{
//    mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME }`)
//    app.on("error",(error)=>{
//     console.log("ERRR:",error)
//     throw error
//    });
//        app.listen(process.env.PORT,()=>{
//         console.log(`the app is listening on the port ${process.env.PORT}`)
//     })
    
// }
//     catch(error){
//         console.log(error,"error")
//         throw error

//     }
// })()

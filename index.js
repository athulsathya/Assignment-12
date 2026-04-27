const express=require('express')
const app=express()
const port=3000
const foodRoute=require('./routes/itemroute')
app.use(express.json())


// Middleware used for Log Request method and URL
app.use((req,res,next)=>{
 console.log(`${req.method} ${req.url}`)
 next()
})


// Route
app.get('/',(req,res)=>{
res.send('Inventory API is running')
})

// Health route
app.get('/health',(req,res)=>{
 res.send("Message for health route on server response")
})

// Middleware for foodRoute where food items listing
app.use('/items',foodRoute)


// Middleware for error handling with 404 error
app.use((req,res)=>{
    res.status(404).json({message:'Invalid route'})
})






app.listen(port,()=>{
    console.log(`Server is running on :http://localhost:${port}` )
})
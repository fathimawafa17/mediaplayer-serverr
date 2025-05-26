//import json-server 

const jsonserver = require('json-server')

//server
const mediaplayerserver = jsonserver.create()  //returns express server 

//middleware-default
const middleware=jsonserver.defaults() //returns a middleware to parse the json data

//set up path to store data
const router=jsonserver.router('DB.json')

//server - use middleware
mediaplayerserver.use(middleware)

//server - use router
mediaplayerserver.use(router)

//set up port for the server 
const PORT = 4000 || process.env.PORT 

//run the server and make it listen to the request coming to the server 
mediaplayerserver.listen(PORT ,()=>{
    console.log(`server running successfully at port number : ${PORT}`);
    
})
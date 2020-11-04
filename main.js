const {EventEmitter} = require("events")

const em = new EventEmitter
em.addListener("FirstEvent",data=>{
    console.log("First Event", data)
})
em.on("secound Event",data=>{
    console.log("Secound Event :",data)
})

em.emit("FirstEvent","ahmad")

em.emit("secound Event",{name:"younes",age:28})
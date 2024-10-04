//This is usde to fill-up the database through post requests
const fs = require('fs')

const data = fs.readFileSync("./dev-data/data/reviews.json")
const jsonObj = JSON.parse(data)

const promise_func = jsonObj.map(async (val)=>{
      await fetch('/api/v1/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(val)  //Note body expects data in the form of string and not JSON
      })
})

try{
    Promise.all(promise_func)
    console.log("All Done Successfully")
}catch(err){
    console.log(err)
}
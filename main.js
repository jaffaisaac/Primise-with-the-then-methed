/**
 * the then() method in javascript is used to  handle a successfull conpletion of an asynchronous operation
 * 
 * the then() method is called on Object , this takes one or Two function arguments
 * 
 * The first argument is called when the promise is fulfilled and the second function argument is called when the promise is rejected
 */

const pizza = new Promise( (resolve)=>{
    console.log(`Getting your Pizza in 5seconds....`)
    // Simulate as asynchronous operation
    setTimeout(()=>{
        resolve(`Chappati Pizza delivered`);
    },5000)
})

pizza.then(
    (item)=>{console.log(`Order Received: ${item}`)},
    (error)=>{console.log(`Samething went wrong with your Pizza ${error}`)}
)
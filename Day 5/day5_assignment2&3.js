// Assignment-2
// ~~~~~~~~~~~~~

// a.  Create a node program to implement the following requirement using queue:
// 			--  program need to handle customer requests
// 			--  each request should contain customer name, customer id , contact number, request description, requet date and time
// 			--  use queue concept to add, remove, display the requests
const { Queue } = require('@datastructures-js/queue');
const custQueue=new Queue();
    
    custQueue.enqueue({name:"ram",id:101,ph:"9876543210",des:"product enquiry",date:"10-02-2024",time:"12:04:30"});
    custQueue.enqueue({name:"vinayram",id:102,ph:"9871113210",des:"product return",date:"12-02-2024",time:"12:04:30"});
    


exports.queueInsert =function(insertvalue){
    console.log("-----------displaying insert-----------")
    custQueue.enqueue(insertvalue);
    // console.log(custQueue.toArray());
    

};	

exports.queueRemove =function(){
    console.log("-----------displaying remove-----------")
    let item=custQueue.dequeue();
    console.log(item);
    

};	
exports.queueDisplay =function(){
    console.log("-----------displaying queue-----------")
    let custArr=custQueue.toArray();
    for (item of custArr){
        console.log(item);
    }
    
    

};	
// b.    Create a node program to implement the following requirement using stack:

// 			---  program need to handle browser history details 
// 			--  each entry should contain url, date and time, 
// 			--  perform add, remove, display the request details 


const {Stack} = require('@datastructures-js/stack');
exports.Stacks_assignment3 = function(){
    let stackObj = new Stack();
    stackObj.push({url:"www.google.com",date:"12-02-2024",time:"12:04:30"});
    stackObj.push({url:"www.drive.google.com",date:"10-02-2024",time:"12:04:30"});
    let deleteditem=stackObj.pop();
    console.log(`top item is ${deleteditem.url} visited on ${deleteditem.date} at ${deleteditem.time}`);
    stackObj.push({url:"www.drive.google.com",date:"10-02-2024",time:"12:04:30"});
    let peekitem=stackObj.peek();
    console.log(`top item is ${peekitem.url} visited on ${peekitem.date} at ${peekitem.time}`);
};




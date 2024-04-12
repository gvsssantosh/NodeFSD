// Assignments -- Day7	(Async Programming)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1.   Create a node program  to implement the following requirement:
// 		 a. Create a promise that will generate a random number between 1 to 50
// 		 b. If the number is 5 multiple,  resolve the send that number
// 		 c. Else, reject with error message.
// 		 d.Consume the promise object 
// 		 e. run the application multiple times to observer the success/error message. 
// console.log("------------------1 question ---------------");
// const promiseObj= new Promise((resolve,reject)=>
// {
//     let randNum=Math.ceil(Math.random()*50);
//     if(randNum%5==0){
//         resolve(randNum);
//     }
//     else{
//         reject("number generated is not 5 multiple");
//     }
// });

// promiseObj.then((response)=>
// {
//     console.log(response+ " is divisible by 5");
// })
// .catch((error)=>{
//     console.log(error);
// });
		 	 		 
const axios=require('axios');
// 2.  Create a node program  to display users data.  
// 		url :  https://reqres.in/api/users/		
// console.log("-------------------2 question---------------");
// let url="https://reqres.in/api/users/";
// axios.get(url).then( (resData) =>
// {
//     // console.log(resData.data);
//     let serverData=resData.data.data;
//     for (let item of serverData){
//         console.log(`id: ${item.id}, email: ${item.email}, first name: ${item.first_name}`);
//     }
// }
// )
// .catch((errorData)=>
// {
//     console.log(errorData.cause);
// });


// 3.   Update the previous example using Async and Await.


// console.log("-------------------3 question---------------");
// async function getData()
// {
//     let url="https://reqres.in/api/users/";
//     let result= await axios.get(url);
//     return(result);
// }

// let promiseObj=getData()
// promiseObj.then((response)=>{

//     console.log(response.data.data);
// })
// .catch((error)=>{
//     console.log("message"+error.cause);
// });




// 4.   Create a function  called getCustomerByCountry() that takes the country name as parameter and should return customers data based on the given country. 

// 		a.  Url :   https://www.w3schools.com/angular/customers.php
// 		b.  use async and await if required. 

console.log("-------------------4 question---------------");
async function getCustomerByCountry(country_name){
    let url="https://www.w3schools.com/angular/customers.php";
    let result=await axios.get(url);
	let custArr=result.data.records;
    return custArr.filter((item)=>item.Country==country_name);
    // result for getting germany items
    // response.filter((item)=>item.Country=="Germany")
}
let promiseObj=getCustomerByCountry("Germany");
promiseObj.then((response)=>{
    if(response.length>0){
        console.log(response);
    }
    else{
        console.log("no customers found");
    }
    

})
.catch((error)=>{
    console.log("msg:"+error.cause);
});

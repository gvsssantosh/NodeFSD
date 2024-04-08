// Assignments-2
// ~~~~~~~~~~~~
// 		Create an array of product objects and each product object should include the following properties.
// let ProdObj={"id":1001,"pname":"Oil", "price":100, "qty":5,  "category":"Fashion"};
// console.log(ProdObj);
// console.log(typeof ProdObj.id);
let arrProdObj=[
    {"id":1001,"pname":"Oil", "price":100, "qty":25,  "category":"Groceries"},
    {"id":1002,"pname":"Flour", "price":50, "qty":14,  "category":"Groceries"},
    {"id":1003,"pname":"Lays", "price":10, "qty":15,  "category":"Groceries"},
    {"id":1004,"pname":"T-Shirts", "price":200, "qty":7,  "category":"Fashion"},
    {"id":1005,"pname":"Shorts", "price":300, "qty":8,  "category":"Fashion"}
];
// 		properties:		id, pname, price, qty,  category 
// for(let item of arrProdObj)		
// {
//     console.log(item);
// }
// 	  a.  display the product details based on the given product id
let prodObj1=arrProdObj.find(item=> item.id==1002);		
console.log(prodObj1);
// 	  b.  display the product names and unit price based on the given category
let prodObj2=arrProdObj.filter(item=>item.category=='Fashion');	
for ( let item of prodObj2){
    console.log(item.pname+" "+item.price);
}
// 	  c.   add new product to array 

arrProdObj.push({"id":1006,"pname":"Red Gram", "price":75, "qty":8,  "category":"Groceries"});

console.log(arrProdObj);

// 	  d.   delete the product based on the product id 
let index=arrProdObj.findIndex(item=>item.id==1006);
arrProdObj.splice(index,1);
console.log(arrProdObj);

// 	  e.   display the product details based on the range of price (min, max) 
console.log("-----------e----------");
let prodObj3=arrProdObj.filter(item=>item.price>=750 && item.price<=850);
if(prodObj3.length==0){
    console.log("Product not found");
}
else{
    for ( let item of prodObj3){
        console.log(item.pname+" "+item.price);
    }
}

// 	  f.    display out of stock products  (i.e qty is zero)
console.log("-----------f----------");
let prodObj4=arrProdObj.filter(item=>item.qty==0);
if(prodObj4.length==0){
    console.log("Product not found");
}
else{
    for ( let item of prodObj4){
        console.log(item.pname+" "+item.price);
    }
}

// 	  g.   perform sorting the array based on the price 
console.log("-----------------g-------------");
console.log(arrProdObj.sort((a,b)=>a.price-b.price));
		
// 		Note:  display proper message if the given requirements are not satisfy the conditions(for example "product not found").
		
		
// Assignments-3
// ~~~~~~~~~~~~~
// 		a.  How to extract only values from the object?
console.log("------------3a-----------");
for(let item of arrProdObj){
    console.log(Object.values(item));
}
// 		b.  How to clone the object?
console.log("------------3b-----------");
console.log("------------using spread method-----------");
let a={"id":1001,"pname":"Oil", "price":100};
let b={...a};
b.pname="flour";
console.log(b);
console.log(a);
console.log("------------using Object.assign()-----------");
let c=Object.assign({},a);		
console.log(c);

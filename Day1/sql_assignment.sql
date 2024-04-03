-- Note:   Create a database :    ShoppingCartDb
create database ShoppingCartDb;
use ShoppingCartDb;
-- 1.   Create the following tables: 

--  		a. Create a table :   Products
-- 				Columns and Constraints: 
-- 						ProductId ---  Primary Key,
-- 						Name   --   Not Null, 
-- 						QuantityInStock ----   Not Null
-- 						UnitPrice,   ----  Not null, Greater than Zero
-- 						Category    ---  Not null
create table Products(
						ProductId int  Primary Key,
						Name    varchar(100)   Not Null, 
						QuantityInStock int   Not Null,
						UnitPrice int  Not null,
						Category    varchar(100)  Not null,
                        constraint check_UnitPrice CHECK (UnitPrice >0)
);
insert into Products values (1001,'Groundnut',4,100,'Groceries'),
(1002,'T-shirt',5,250,'Fashion'),
(1003,'Shorts',4,350,'Fashion'),
(1004,'Oil',6,100,'Groceries'),
(1005,'Lays',4,10,'Groceries');
-- 	b.  Create a table :   Users
-- 				Columns :  UserId , UserName, Password, ContactNumber, Address
-- 				
-- 				Hint :   No need to change Users table 		
create table Users(
						UserId int  Primary Key,
						UserName    varchar(100)   Not Null, 
						Password varchar(100)   Not Null,
						ContactNumber varchar(100)  Not null,
						Address    varchar(100)  Not null
);
alter table Users
modify column ContactNumber char(10);
insert into Users values (1,'ram','ram@123','9998887771','Hyderabad'),
(2,'amar','amar@123','9998887771','Hyderabad'),
(3,'ravi','ravi@123','9998887767','Bangalore'),
(4,'dany','dany@123','9998887123','Chennai'),
(5,'tony','tony@123','9998885421','Hyderabad');
-- 	c.  Create a table :  Cart
-- 				Columns and  Constraints:  
-- 						CartId	---		Primary Key,  											
-- 						ProductId  ---   Foreign Key with Products(ProductId), 
-- 						Quantity   ---    Not Null,  Greater than Zero
-- 						UserId   ---  Not Null 
create table Cart(
						CartId int  Primary Key,
						ProductId    int   Not Null, 
						Quantity int   Not Null,
						UserId int  Not null,
                        constraint check_Quantity CHECK (Quantity >0),
                        foreign key (ProductId) references Products(ProductId) on update cascade on delete cascade,
                        foreign key (UserId) references Users(UserId) on update cascade on delete cascade
);
insert into Cart values (11,1001,1,1),
(12,1001,3,1),
(13,1002,4,3),
(14,1002,2,3),
(15,1001,1,4);
-- 				
-- 		d.   Create a table :  Orders
-- 			Columns and  Constraints:  
-- 				
-- 					OrderId  ---  Primary Key,  
-- 					CartId ---    Not Null
-- 					OrderDate  ---  Date   
-- 					UserId   ---  Foreign Key with Users(UserId)
create table Orders(
						OrderId int  Primary Key,
						CartId    int   Not Null, 
						OrderDate date   Not Null,
						UserId int  Not null,
                        foreign key (UserId) references Users(UserId) on update cascade on delete cascade,
                        foreign key (CartId ) references Cart(CartId) on update cascade on delete cascade
);
alter table Orders
drop foreign key orders_ibfk_2;

insert into Orders values (10001,11,'2023-02-20',1),(10002,12,'2023-02-01',1),
(10003,13,'2023-04-17',3),(10004,14,'2023-10-01',3),(10005,15,'2023-02-01',4);
-- 2.  Insert 5  records in each table. 
-- 	 
-- 	a.  Try to insert valid and invalid records in the above tables. 
insert into Products values (1006,'Groundnut',4,0,'Groceries');

-- 	b.  Try to verify with delete cascade and without delete cascade. 
insert into Products values (1006,'Bingo',4,10,'Groceries');
insert into Cart values (18,1006,1,1);
delete from Products where ProductId=1006;

-- 	c.  Verify that all constrains are working properly. 
insert into Cart values (18,1005,0,1);

-- 3.  Write the select queries on the above tables for the following requirements:

-- 	 i.  On Product Table  
-- 			a.   Display all Products
select * from products;
-- 			b.   Display Products belongs to particular Category
select * from products where category like "fashion";
-- 			c.   Display out of stock products (means quantity is zero)
select * from products where QuantityInStock=0;
-- 			d.  Display the products which price between 1000 to 10000 
select * from products where UnitPrice between 1000 and 10000;
-- 			e.  Display the product details based on the ProductId
select ProductId,Name from products order by productid desc;
-- 	
-- 	ii.   On Cart Table:
-- 			a.  Display data based on the given CartId
select * from cart;
-- 			b.  Check is there any products added in Cart based on the ProductId
select * from cart where ProductId=1002;
-- 		

-- 	iii.  On Orders table
-- 			
-- 		a.  Display OrderDetails based on OrderId
select * from orders order by orderid;
-- 		b.  Display OrderDetails based on UserId
select * from orders order by userid;
-- 		b.  Display OrderDetails based on OrderDate
select * from orders order by orderdate;

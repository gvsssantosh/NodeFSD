-- Create Products table
CREATE TABLE Products (
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(50),
    price DECIMAL(10, 2),
    category VARCHAR(50),
    stockqty INT
);
insert into products (pname,price,category,stockqty) values("lays",10,"snacks",20),
("diarymilk",10,"snacks",20),
("t-shirt",300,"fashion",10),("shorts",250,"fashion",5),
("oil",100,"Groceries",15),
("oil",100,"Groceries",15),("flour",50,"Groceries",25);
-- Create Orders table
CREATE TABLE Orders (
    orderId INT PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(50),
    price DECIMAL(10, 2),
    userqty INT,
    totalAmount DECIMAL(10, 2)
);


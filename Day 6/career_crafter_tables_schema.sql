create database careercrafterDb;
use careercrafterDb;

create table users_table(

	user_id int primary key not null auto_increment,
	password varchar(50) not null,
	first_name varchar(50) not null,
	last_name varchar(50) not null,
	email varchar(100) not null,
	phone_number char(10) not null
-- role enum("user","admin") not null
-- created_on timestamp default current_timestamp,
-- last_updated timestamp default current_timestamp,

)auto_increment=100;

create table admins_table(
	admin_id int primary key not null auto_increment,
	password varchar(50) not null,
	first_name varchar(50) not null,
	last_name varchar(50) not null,
	email varchar(100) not null,
	phone_number char(10) not null
-- created_on timestamp default current_timestamp,
-- last_updated timestamp default current_timestamp,
)auto_increment=100;

create table job_listing_table(
job_id int primary key not null auto_increment,
job_title varchar(100) not null,
description text not null,
qualifications text not null,
application_instructions text not null,
-- about hiring process
created_by  int not null,
Created_on  timestamp not null default current_timestamp,
location varchar(100) not null, 
min_Salary decimal(15,2) not null,
max_salary decimal(15,2) not null,
Company_name varchar(100) not null,
-- constraint check_salary CHECK (min_salary < max_salary),
foreign key (created_by) references admins_table(admin_id) on update cascade on delete cascade
)auto_increment=1000;


create table resume_db(
resume_id int primary key not null auto_increment,
user_id int not null,
description text not null,
-- description about yourself
projects text,
Skills text,
Certifications text,
internships text,
work_experience text,
created_on timestamp default current_timestamp,
last_updated timestamp default current_timestamp,
-- resume file link blob
foreign key (user_id) references users_table(user_id) on update cascade on delete cascade

)auto_increment=200;

create table applications_table(
Application_id int primary key not null auto_increment,
job_id int not null,
-- resume_id int not null,

Applied_on timestamp not null default current_timestamp,
Updated_on timestamp not null default current_timestamp,
user_id int not null,
Status enum('Pending', 'Reviewed', 'Rejected') not null default 'Pending',
employer_id int not null,
-- useful for displaying any info about employer
-- resume-path blob
foreign key (job_id) references resume_db(job_id) on update cascade on delete cascade,
-- foreign key (resume_id) references job_listing_table(resume_id) on update cascade on delete cascade,
foreign key (user_id) references users_table(user_id) on update cascade on delete cascade,
foreign key (employer_id) references admins_table(admin_id) on update cascade on delete cascade
)auto_increment=500;


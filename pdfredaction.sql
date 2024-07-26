create database pdfredaction

use pdfredaction

create table users(
id int identity(1,1) primary key,
name varchar(40),
emailid varchar(50),
password varchar(50)
)

select * from users
#### Module 3 | Databases   Intro to Databases   Intro to Databases

# Intro to Databases

Applications revolve around data. From the names of contacts in your phone book to the amount of money 
in your bank accounts, to the grades of students in a class- applications revolve around the storage, 
modification and retrieval of data.

In order for these operations on data to take place, the data needs to be stored in a place where it 
can be directly accessed and modified. A database stores a collection of information on a computer in 
an organized, structured way. You can think of a database as a container for data. You'll often see 
databases represented graphically as cylinders.

Within those containers, there are organized and structured collections of data. This organization 
makes it possible for other users and systems to access and work with the data.

For example, consider a contact book application. The primary resources or entitities being stored 
are contacts. A database would generally store the information for each contact as a record in the 
database.

Each record would have attributes that describe the item being stored. What attributes might you 
want to include with each contact record? Perhaps the name, email address and phone number of the 
contact would be attributes of each contact record. Notice that these attributes can be strings, 
numbers, dates, and more. Each attribute has a specific data type.

The database would store this collection of contact records in an organized way and make it possible 
for other systems to view, add, update or delete records using database queries.

This functionality should sound familiar. Databases essentially store data in a way that allows CRUD 
operations to be performed on the data records, which aligns with the way we set up Web APIs in the 
previous module. The database queries we write to access and modify data in a database correlate to 
the CRUD operations we can perform on data, just like our API endpoints are aligned with these same 
operations on data.

For example, considering the contact book application again, we might write queries to perform the 
following CRUD operations on contact data:

* **Create:**

    * Create a new collection of contacts
    * Insert a record for "John Doe"

* **Read:**

    * What is John Doe's phone number?
    * Which contacts live in the zipcode 90210?

* **Update:**

    * Change John Doe's phone number to 777-777-7777

* **Delete:**

    * Delete the record for John Doe.


### Summary

A database is an organized and structured collection of data.

A database record is a single, structured item stored in a database. In the case of a Contacts 
database, a single contact (including the contact's name, number, address, etc.) is considered 
a single record.

A record is made up of a group of attributes that is stored in a database. Name, phone number, 
and address are each attributes that you might store relating to a contact.

Database languages allow users of databases to construct queries to perform CRUD operations on 
data, such as inserting new records or modifying existing ones.

There are many different ways that records and attributes can be organized in a database. We'll 
talk about the structure of databases in the next lesson.


---

#### Module 3 | Databases   Intro to Databases   Database Structures

# Database Formats

We know that databases store data, which is made up of collections of attributes called records. 
How do you imagine these data records being stored in a database?

There are many different formats for storing data, and thus several types of databases that store 
data in different ways.

Perhaps the data is stored in text files where each line contains a single record, and the 
attributes, or fields, of a record are defined with a separator between each field.

![record](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/a5973c4292dcafaadc8126b9fb00af73/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/db_text_file.png.png)


```javascript
{
name: Thomas Axen;
email: taxen@email.com; 
phone_number: 555-555-5555 
}
```

Perhaps each data record is stored as a row in a table, where each column stores the value of an attribute.

![row-table](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/6f189447be2eb745924feba4bd3cccbe/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/db_table.png)

Relational Databases

The type of databases we'll be focusing on in this course are relational databases, which utilize the 
table format of organizing data. Relational databases are common and widely used.

A relational database can consist of multiple tables, where each table represents a single entity or 
resource type. For example, a Contacts table and a Conversations table might be stored in a single 
database to organize the data related to contacts, and the conversations between them. Each table 
would include a data record on each row, and the attribute values for that record in the corresponding 
columns.

Relational databases make it possible to specify relationships between data elements, such as linking 
a specific set of contacts to a specific conversation wihtout repeating data. There is a lot you can 
learn about relational databases, but this course will focus on the fundamental concepts you'll need 
in order to understand concepts and build something using a basic database.


### Example

The following table is an example of how data would be represented in a relational database. Keep in 
mind that a relational database would likely contain other tables in the same database that are 
related to one another.

The following table, the Contacts table, stores a collection of contacts. The database containing 
this table might also contain a Conversations table to keep track of the date, time and duration of 
conversations between contacts. For simplicity in this introductory course, however, we'll focus on a 
single table. Your project prototype should be functional with only a single table.

Here's a sample Contacts table:

![contact](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/74a738205f12ff8a58bc79fc47f8c20c/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/Contacts.png)

This is a relational database table. In this table, data is stored in the following way:

* The collection of contacts is stored in the Contacts table.
* Each contact is stored as a record in the table, which corresponds to a table row. There are 6 records currently stored in the table above.
* Each record includes the following fields, or attributes: ID, FirstName, LastName, EmailAddress, PhoneNumber, ZipCode. The values for each field of a record are stored as a column in the table on the corresponding row.
* Each row contains all attributes associated with a single record
* Each column contains all of the data for a specific attribute/field. For example, the PhoneNumber column contains all of the phone numbers for the contacts stored in the table.
* The attributes in each column match the data type of the attribute. For example, the ZipCode column only contains numeric data.

In the upcoming lessons, we'll explore SQL and SQLite, the relational language and database management system we'll be using in this course.


---

#### Module 3 | Databases   Getting Started with SQL and SQLite   How to use Databases

# How Are Databases Used?

At this point, you know that a database is a collection of organized data. Now let's talk about how we 
can access and take advantage of this organized data.

When it comes to connecting your web app to a database, there are a few pieces to think about:

1. The database- where your data is stored

Your data is stored and organized in a database.

2. The query language- what you want to do with your data

A query language is used to define instructions for creating, accessing and modifying data in a database. 
In this course, you'll learn Structured Query Language (SQL), an extremely popular and widely used query 
language for relational databases. SQL statements and queries define the instructions for what to do with 
your data, such as creating a new record, updating an attribute for a record, or deleting a record. SQL 
makes it straightforward to define these instructions in a human-readable language.

Note: SQL is often pronounced in 1 of 2 ways. Some people pronounce it as an acronym- saying each letter 
of the word "S-Q-L". Others pronounce it as "Sequel". Both pronunciations are common.

3. The database management system (DBMS)- how you access your database

A DBMS is an application that allows you to interact with databases. Relational DBMS’s will understand 
the SQL commands you write, and perform the appropriate operations on the data. Database management 
systems ensure the data in a database remains be accurate, secure and consistent.

Some common database management systems are SQL Server and MySQL. We'll be using a lightweight DBMS 
called SQLite in this course.

4. A server-side scripting language- how your web app connects to and interacts with your database (through your DBMS)

You could use SQLite (or any DBMS) to create and modify databases in isolation. However, When it 
comes to creating a database for a web app to store data, the process can't be manual. You'll need 
to write code on your server to connect to and interact with the database.

In this case, we're writing JavaScript on our servers (using Node.js). SQL is the language that directly 
specifies the operations we want to perform on data, but we'll need to write some JavaScript code that 
constructs these SQL queries on our server. Our server-side code will build SQL queries, format and return 
the resulting data or status to clients.

In the next lessons, we'll learn how to get up and running with SQLite in order to run SQL queries. 

---

#### Module 3 | Databases   Getting Started with SQL and SQLite   SQLite Intro

# Intro to SQLite

The database management system we'll be using to set up and interact with databases is called SQLite.

SQLite is a SQL-based relational database engine that allows you to easily create and manage databases. 
Because SQLite runs within your web application, it is much simpler than most relational database 
management systems that run on a separate server.

Remember, SQLite will serve as your DBMS, allowing you to create databases and run SQL statements on them.

### Install SQLite

The first thing you'll need to do before proceeding is ensure you have installed SQLite on your computer. 
Note that the current version of SQLite is SQLite3. You may do so following the instructions on the SQLite 
website.

For Windows machines, the installation process involves the following steps:

* Step 1. Download the appropriate sqlite-dll-*.zip and sqlite-tools-*.zip for your machine (where * 
represents latest version number).

* Step 2. Create a folder (recommended on your C drive: C:\sqlite) and unzip the 2 zipped files you just 
downloaded into this folder. This will result in 3 files in your folder: sqlite3.def, sqlite3.dll and 
sqlite3.exe.

* Step 3. Add C:\sqlite3 to your PATH environment variable so that you can run sqlite3 in your command prompt:

Navigate to Control Panel > System and Security > Advanced System Settings then click Environment Variables.

Under the System Variables section, click on the PATH Variable row.

With the PATH variable selected, click the Edit... button.

Click the New button to add a new path to this variable

Type C:\sqlite3 (or the directory where your sqlite3.exe is saved)

Save your changes in this window and exit

* Step 4. Open your command prompt and enter the command sqlite3.

This should run sqlite3 in your command prompt window and display the sqlite verison number you have installed.

You have now installed sqlite3.

### Setting Up A Database

You can use SQLite3's command line interface (the SQLite3 shell) to execute commands and work with a 
database directly in your command prompt/terminal window.

To create a database using the SQLite shell, simply run the SQLite3 shell from your command prompt and 
provide a database filename (ending with the .db extension):

sqlite3 NewDatabase.db will create a database named NewDatabase (if not already existing) and open it 
in your command prompt. Remember, we'll use PascalCase to name database names, table names and attribute names.

* If the database name you provide does not already exist, SQLite3 will create it and open it.

* If the database name you provide already exists, that database will be opened.

Once a database has been opened in your command prompt, you can enter SQL commands that will be executed 
on that database. Any operations you perform using SQL statements in this window, such as inserting or 
deleting data records to a table, will permanently affect your database and the changes will be saved to 
your database file.

If you simply wish to test or practice, you can instead open a non-persistent database in your SQLite shell. 
In this case, you can enter SQL statements and work with a temporary database that will not be saved once 
you exit the window.

To work with a non-persistent database, simply run the SQLite3 shell without providing a database filename:

    sqlite3

Note: Remember, you can write single statements across multiple lines (pressing ENTER in the middle of 
a statement). Use a semicolon to end a statement.

### Accessing an Existing Database

If you already have a database open, you can use the .open command to open a different database:

    .open NewDatabase.db

### Summary

* Install SQLite3 in order to use it for this course
* Run SQLite3 in your command prompt by entering the sqlite3 command with a database filename.
* This command will run the SQLite3 shell and allow you to enter SQL statements and queries for the database
* Run SQLite3 without entering a database filename to work with a temporary database
* Exit the SQLite3 shell using the CTRL+C command

In the following lessons, we'll take a look at SQL, the language used to interact with databases. We'll then 
explore some common SQL statements that you can use, and practice using them with SQLite. Afterwards, you'll 
learn how to build these same statements from your app using JavaScript.

---

#### Module 3 | Databases   Getting Started with SQL and SQLite   SQL Overview

# SQL Overview

Although a database stores information in a structured way, we don't just access and manipulate that data 
manually. That would be prone to error, lack of security and other issues, in addition to not scaling as 
you need to interact with a database from other systems. Instead, we use a standard language that can be 
used to clearly describe the data operations we wish to perform.

SQL, which stands for Structured Query Language is a language used to interact with relational databases. 
This language provides a set of commands that are used to create, read and modify data and databases.

SQL is a widely used, standardized language. It's straightforward to learn since it aligns with the 
human-readable terms we use to identify CRUD operations.

### Building SQL Statements

SQL defines a set of commands that can be used to interact with a database and its data. This set of 
commands is pretty small, although there are some more complex commands as well as some commands that 
vary depending on the database management system being used.

In order to create and modify databases, we compile SQL commands into executable SQL statements. These 
statements instruct a database system to perform a specific operation (or set of operations) on specific 
data.

Some examples of instructions we might want to perform using the Contacts table include:

* Create a new collection of contacts
* Insert a record for "John Doe"
* What is John Doe's phone number?
* Which contacts live in the zip code 90210?
* Change John Doe's phone number to 777-777-7777
* Delete the record for John Doe.

We can write SQL statements using the SQL commands to perform these operations. You can do a lot with 
databases using SQL and we won't be able to cover all of the possibilities in this course. We'll 
introduce the most common ways to use SQL commands, but we encourage you to consult the [SQLite 
documentation for SQL](https://sqlite.org/lang.html) and/or take a full databases course if 
you're interested in learning more about databases. 
This [MVA Course on SQL Database Fundamentals](https://mva.microsoft.com/en-US/training-courses/sql-database-fundamentals-16944?l=IVQmqGBID_6505121157) is a great next step that uses a 
DBMS called SQL Server.

### SQL Commands

SQL commands can be grouped based on the nature of the operation being performed. There are 3 major 
categories that commands fall into:

**Data Definition**: These commands are all about creating data and structures. These commands 
allow you to define what's called the schema of your database, which refers to the structure of 
the data- the tables, attributes and types of data you plan to store.

* CREATE: Create a new database or tables
* ALTER: Change the structure of a tables
* DROP: Delete a table, database or column
* RENAME: Rename a table
* TRUNCATE: Delete all of the data from a table

**Data Manipulation**: These commands allow you to modify the data stored in a database.

* INSERT: Save a new record into a database
* UPDATE: Update a record in a database with new fields
* DELETE: Delete a record from a database

**Query**: This refers to accessing data in a database

* SELECT: Retrieve records from the database

### SQL Syntax

Before we explore each command in more detail, let's take a look at some syntax rules of writing SQL.

Here is an example of a SQL statement: SELECT PhoneNumber FROM Contacts;

* Keywords are not case sensitive, however it's best practice to use ALL CAPS for SQL command keywords.
* SQL statements should end with a semicolon (just like in JavaScript)
* Whitespace doesn't matter: you can write a single statement across multiple lines
* In this course, we'll use PascalCasing for table and attribute names

In the following lessons, we'll take a look at how to build some SQL statements that will be most helpful to you. 

---

#### Module 3 | Databases   Building SQL Statements   Working With Relational Databases

# Working with Relational Databases

Before jumping into building SQL statements and queries, let's review the basic structure and concepts related to relational databases.

SQL Tables and Data Types

Remember from our introduction to databases that relational database tables store data in rows and columns. Each row is a data record, which consists of columns that store various attributes for the record.

Each attribute column has a name and a data type associated with it.

![table](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/74a738205f12ff8a58bc79fc47f8c20c/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/Contacts.png)

### String Data Types

In the Contacts table above, the 2nd column's name is FirstName and the type of data being stored is a string of 
characters. There are a few SQL data types we could use to store this data.

CHARACTER(n): character data can be stored as a CHARACTER(n) type when all strings need to have the same number 
of characters. The CHARACTER(4) type would mean all values in the column need to be strings of 4 characters.

VARCHAR(n): character data can be stored as a VARCHAR(n) type when the strings can vary in length. The VARCHAR(4) 
type would mean that all values in the column need to be strings with a maximum length of 4 characters.

In this case, we'd use the VARCHAR type since we don't know that the length of every contact's first name would 
be exactly the same. VARCHAR(255) will store a character string up to 255 characters long.

### Numeric Data Types

The most common ways to store numeric data are using the INTEGER or DECIMAL type

DECIMAL(p, s): stores a numeric value. DECIMAL(3,2) would store a number with 3 digits before the decimal point 
and 2 digits after, such as 123.45 or 934.30.

INTEGER: stores a numeric value with no decimal, such as 320 or 3.

### Primary Keys

In relational database tables, it's important that each record can be uniquely identified in some way. One or more 
columns in the table is used as the unique identifier, known as the primary key. If a column is denoted as the 
primary key for a table, that means that no 2 records in the table can have the same value in that column.

Choosing a primary key that makes sense for your data is important. For example, there may be 2 or more records 
in the Contacts table that have the same first and last name. For that reason, you wouldn't want to use first or 
last name as the primary key for this data. Instead, we'd use the id column as the primary key, since no 2 records 
should share the same id.

### Additional Data Types and Considerations

You can find other data types in the SQLite documentation. Keep in mind that each DBMS uses a slightly different 
version of the SQL language.

---

#### Module 3 | Databases   Building SQL Statements   Creating Data

# Creating Data Using SQL

Now that you understand the common types of data that can be stored in a database, let's look at how to create 
tables to store the data, as well as how to insert data into those tables using SQL.

We'll use the following sample Contacts table as a guide for what we'll try to recreate in the following examples.

![table](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/74a738205f12ff8a58bc79fc47f8c20c/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/Contacts.png)

### Create a Table

To create a new table in your database, use the `SQL CREATE TABLE` command. You'll need to provide the name for 
your table along with the information about what columns and type of data the table will store.

The syntax for this command is:

```sql
CREATE TABLE TableName(
    Column1 DataType1,
    Column2 DataType2,
    ColumnN DataTypeN
);
```

Note: This statement could be written on a single line. It's much easier to read if separated across lines when 
there are several column definitions.

Example: The following SQL statement would create a database table that could hold the data in our Contacts table above:

```sql
CREATE TABLE Contacts(
    id INTEGER PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    EmailAddress VARCHAR(255),
    PhoneNumber VARCHAR(255),
    ZipCode VARCHAR(255)
);
```

In this example, we use the **VARCHAR(255)** type for each attribute other than the id for simplicity. There is room for 
improvement to be more precise with the data types and only use the maximum necessary size depending on the data being 
stored.

This results in the following empty database table named Contacts:

![Empty Contacts Table](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/866a3251d3924db9cbd6d993af126390/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/contacts_empty.png)

### Inserting Data into a Table

To insert new records (or rows) into a table, use the SQL INSERT INTO statement. You'll need to provide the data you'd 
like to insert in a way that makes sense for how the data should be organized. There are 2 ways to do this.

Provide the values to be inserted into the table for the new record. You must provide a value for each column in the appropriate order.

```sql
INSERT INTO TableName VALUES (value1, value2, value3, ...)
```

For example, to insert a new record into the Contacts table above, we would provide a value for each of the six columns in the table.

```sql
INSERT INTO Contacts 
    VALUES (12, 'John', 'Doe',
        'JohnDoe@email.com', '999-999-9999', '29384'
    );
```

Provide the column names and the values to be inserted into those columns. This allows you to provide data for only certain columns 
(missing columns will be NULL).

```sql
INSERT INTO TableName (column1, column2, column3, ...) VALUES (value1, value2, value3, ...)
```

If you omit a column that is defined as an auto-incrementing primary key integer, that column will be automatically populated.

For example, to insert a new record into the Contacts table, we can omit the ID value and specify the other 5 values. The ID 
will be automatically generated since SQLite knows it must be a unique integer, based on it's primary key definition.

```sql
INSERT INTO Contacts (FirstName, LastName, EmailAddress, PhoneNumber, ZipCode) VALUES ('Thomas', 'Axen', 'taxen@email.com', '111-111-1111', '90110');
```

![Insert Record Contacts Table](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/b939deba45f48cf988c38deab68b330a/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/contacts_insert1.png)

### Summary

* Use the CREATE TABLE statement to create a new table in your database.

* You must provide a name for the table and define the schema for the table. This includes the column names and data types for each column.

* The syntax for the CREATE TABLE statement is CREATE TABLE <TableName>(Column1 DataType1, Column2 DataType2, ...);

* Insert data into a table using the INSERT INTO statement: INSERT INTO <TableName> <(Column1, Column2, ...)> VALUES <(Value1, Value2, ...)>; The Columns list is optional.


---

#### Module 3 | Databases   Building SQL Statements   Reading Data

# Reading Data Using SQL

The reason for using a database is to store data so that you can retrieve and use that data. Let's 
talk about how to use SQL to retrieve data that is stored in a database.

We'll use the Contacts table we've been working with for examples.

![Contacts](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/74a738205f12ff8a58bc79fc47f8c20c/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/Contacts.png)


### The SELECT Statement

Retrieving data from a database is also known as querying the database. We construct queries in SQL 
using the `SELECT` statement.

There are many different ways you can identify, filter and organize data that you retrieve from a 
database. You might simply want to view all of the data you have stored in a table, such as viewing 
all of the info for each contact stored in the Contacts table. On the other hand, you may be searching 
for a specific piece of information for a set of records that meets certain criteria, such as the 
number of contacts that live in the zip code 90210.

We'll introduce the basics and most common tasks you can perform using the `SELECT` statement so that 
you have a foundation of understanding to build from if you need to use more complex statements.

### Filtering by Column: The SELECT FROM Statement

The `SELECT FROM` statement allows you to select specific columns from a specific table in your database.

    SELECT Column1, Column2, ... FROM TableName;

### Select All Columns

The most basic SQL query is to select all of the data from a table- meaning all rows and all columns.

The syntax for this statement is:

    SELECT * FROM TableName;

To select all of the data from our Contacts table, we'd use the following statement:

    SELECT * FROM Contacts;

The result of this statement (assuming this data has already been stored in the database) would be the 
full Contacts table:

### Select Specific Columns

Sometimes, you may only want to select certain columns of data for a query. Instead of using the 
asterick (*), you can provide 1 or more column names to query data from:

    SELECT Column1, Column2, ... FROM TableName;

For example, you might want to display only the first names of all contacts stored in the database:

    SELECT FirstName FROM Contacts;

This would return the following data set:

![firstname](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/f1e078677854f9e082164671b1ef46b7/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/contacts_firstnames.png)

The following statement would select the first and last names from the Contacts table:

    SELECT FirstName, LastName FROM Contacts; 

![first-lastname](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/a2704ae8fcf9f8daaa625c3e7ef4f26e/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/contacts_firstlast.png)

### Filtering by Row: The SELECT FROM WHERE Statement

The SELECT FROM statement allows you to select all rows from a table and narrow by column.

Sometimes you'll only want to retrieve certain records (rows) based on criteria. For example, you might 
want to retrieve the records for contacts who live in the zip code 90210. This is a way of filtering by row.

The syntax for the SELECT FROM WHERE statement is:

![where](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/d1af33dbc35b099ca9f909b19675892e/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/sql_where.png)

### SQL Where Statement

The WHERE clause consists of a condition based on the value of a column.

For example, the following statement selects all columns for all rows for which the contact's first name is Roya.

    SELECT * FROM Contacts WHERE FirstName = 'Roya';

![firstName-Roya](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/110c94aa4dab714379e3f1fcef87a9cb/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/contacts_roya.png)

The following statement selects only the first name (column) for any rows for which the contact's ID is 4 or less:

    SELECT FirstName FROM Contacts WHERE ID <= 4

![where-id](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/7d5b8a3f54c2aa1c19fcf436e4aff1cc/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/where_Id.png)

There is a lot of flexibility with the `WHERE` clause. The condition you provide can be as simple as evaluating the 
value in a column (such as `ID <= 4`)), or as complex as multiple conditions using several columns. You can use the 
`AND` and `OR` keywords to combine conditions within a `WHERE` clause.

For example, the following statement selects records for which the ID is less than 4 and the zip code is 90210:

    SELECT * FROM Contacts WHERE ID <= 4 AND ZipCode = '90210';

### Organizing Results - The ORDER BY clause

So far, we've been able to pull data records and filter by column or row, but we haven't been able to control how 
the results are organized. One way to do that is to modify the order that records are sorted in.

The `ORDER BY` clause allows you to specify which column the results should be ordered based on, and whether the 
order should sorted in ascending or descending order.

The syntax for using this clause is:

    SELECT Column FROM Table WHERE Condition ORDER BY Column1, Column2, ... [DESC];

By default, ORDER BY uses ascending order. If you provide the DESC keyword, the results will be sorted in descending 
order.

For example, the following statement selects all rows and columns from our Contacts table and orders them in 
descending order by ID:

    SELECT * FROM Contacts ORDER BY ID DESC;

Contacts Table Descending

NOTE: Even if you are not including a column in your results, you may still order your results by that column.

For example, the following statement returns only the first names of contacts ordered in descending order using 
the ID column, even though the ID column is not included in the results:

    SELECT FirstName FROM Contacts ORDER BY ID DESC;

![firstName-id](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/a534b77ca22d26652447fdab2e9bd069/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/firstname_desc.png)

### Summary

* The SELECT statement is used to query for data from a database
* The syntax of the basic SELECT statement is SELECT <columns> FROM <table>;. This returns a table including the specified columns for all records.
* The WHERE clause is used to filter specific rows. Only the records that meet the specified condition will be included in the results table.
* The ORDER BY clause sorts the results table by the specified column(s)

---

#### Module 3 | Databases   Building SQL Statements   Updating Data

# Updating Data Using SQL

Once you've created and populated a database, you'll likely need to modify the data it stores. Perhaps 
your database stores items for sale and the status of an item changes from 'listed' to 'sold'. Or perhaps, 
using our Contacts table example, one of our contacts changes their phone number.

Updating data in a relational database is straightforward, using the UPDATE statement.

### The UPDATE Statement

The UPDATE statement allows you to modify existing records in a database table. You can do a few things 
with this statement, from changing one value in a specific column for a specific record, to updating the 
value of a specific column for all records in the table.

The syntax for the UPDATE statement is:

    UPDATE <table> SET column1 = value1, column2 = value2, ... WHERE <condition>;

The WHERE clause in this statement filters which records will be updated. If you omit the WHERE clause, 
your update will affect all records in the table.

The column + value pairs allow you to provide new values for specific columns in the table.

### Example - Update a Single Record

For example, the following statement updates the zip code for the record with an ID of 3 to 33333:

    UPDATE Contacts SET ZipCode = '33333' WHERE ID = 3;

In other words, this statement says: "Find the record(s) with an ID equal to 3 and set the zip code to '33333'.

After executing this statement on our original Contacts table, it would contain the following:

### Example - Update Multiple Columns for a Single Record

We could modify more than 1 field for a record at once. The following statement updates the last name and 
zip code for the contact with an ID of 4:

    UPDATE Contacts SET LastName = 'Smith', ZipCode = '44444' WHERE ID = 4;

### Example - Update Multiple Records

If your WHERE clause returns multiple records, each of those records will be affected by your update.

For example, the following statement updates the zip code for each record that currently has a zip 
code of '90210'.

    UPDATE Contacts SET ZipCode = '22222' WHERE ZipCode = '90210';

### Example - Update All Records

If you omit a WHERE clause in your UPDATE statement, your update will affect ALL records.

For example, the following statement updates the zip code for all records to '00000':

    UPDATE Contacts SET ZipCode = '00000';

### Summary

* You can update the values of records in a database using the UPDATE statement
* The SET clause in this statement allows you to provide new values for certain columns
* The WHERE clause in this statement allows you to specify which records (rows) should be updated
* If you omit a WHERE clause, your change will affect all rows of the table


---

#### Module 3 | Databases   Building SQL Statements   Deleting Data

# Deleting Data Using SQL

The final CRUD operation you are able to perform on your data in a relational database is deleting 
data. This can be in the form of deleting a table or deleting data from within a table.

### Deleting Data

Data can be deleted from a database table using the DELETE statement.

    DELETE FROM <TableName> WHERE <condition>

The WHERE clause filters which rows will be deleted from the table.
For example, the following statement will delete the record with an ID of 5 from the Contacts table:

    DELETE FROM Contacts WHERE ID = 5;

The following statement will delete the records with a zip code of '90210' from the Contacts table:

    DELETE FROM Contacts WHERE ZipCode = '90210';

NOTE: If you do not include a WHERE clause, you will delete all of the rows from your table.

### Deleting a Table

You can use the DROP TABLE statement to delete a table from your database. Use this statement 
wisely- you will be deleting all of the data associated with the table!

    DROP TABLE <TableName>;

For example, the following statement deletes the Contacts table:

    DELETE TABLE Contacts;


### Summary

* The SQL DELETE statement is used to delete records from an existing database table. The WHERE clause specifies which records should be deleted
* Omitting a WHERE clause in a DELETE statement will delete all records in the table
* Use the SQL TRUNCATE statement to clear all records from a table
* Use the SQL DROP TABLE statement to delete a table entirely from a database.

---

#### Module 3 | Databases   Building SQL Statements   SQL Practice

# Practicing with SQL and SQLite

Now that we've covered the basic SQL statements that will allow you to perform CRUD operations on 
your database, take some time to practice building these statements and queries in your SQLite shell.

Exercise

Use the SQLite3 shell in your command prompt to execute SQL statements.

Remember, to run the SQLite shell enter the command sqlite3 **<DatabaseName.db>**, with the name of a 
database file.

### Guide

* Open a New Database in SQLite3

* Run the SQLite3 shell with a new database file named Exercise.db by entering the following command in your command prompt:

    sqlite3 Exercise.db

This should open the SQLite3 shell in your command prompt.

* Create a Table

Create a table called Contacts with the following shcema:
```
* ID: integer, primary key
* FirstName: varchar(255)
* Age: integer
* PhoneNumber: varchar(255)
```
```sql
CREATE TABLE Contacts(
    ID INTEGER PRIMARY KEY,
    FirstName VARCHAR(255),
    Age INTEGER,
    PhoneNumber VARCHAR(255)
);
```

Remember, each part of this statement can be entered on a separate line in your command prompt. Just be sure to end the final 
statement with a semicolon.

You can use the .tables SQLite3 command to list the tables in your database. This should display the name of the Contacts 
table if you performed step 1 correctly.
Note: you can find documentation for all SQLite3 options and commands by entering `.help` in your SQLite3 shell.

### Populate the Table

Populate the table with 6 entries to achieve the following data set:

Use the SELECT * statement to verify that your database contains the correct data.

* Insert First Record

Here's the code for the first entry:

```sql
INSERT INTO Contacts
(ID, FirstName, Age, PhoneNumber) 
VALUES (1, 'Thomas', 32, '111-111-1111');
```

Verify that you have properly entered all 6 entries by executing a SELECT * statement to pull all rows.

TIP: For readability, you can increase the width of columns for your results tables. The following SQLite3 command will set 
the width of each display table column to 10 characters:

    .mode column .width 10.

### Query for Data

* Execute a query to view all records in descending order by age.

    SELECT * FROM Contacts ORDER BY Age DESC;
	
* Execute a query to view only the ages of each contact, in descending order by ID.

    SELECT Age FROM Contacts ORDER BY ID DESC;
	
Try it yourself: Execute a query to display all records for contacts with an age of at least 30.

* Execute a query to display all records for which age is less than 35 and ID is less than 5.
   
   SELECT * FROM Contacts WHERE Age < 35 AND ID < 5;
   
### Modify and Delete Data

Update the phone number for the record with ID = 4 to '400-400-4000'.

    UPDATE Contacts SET PhoneNumber = '400-400-4000' WHERE ID = 4;

Verify the change using a SELECT statement.

Try it yourself: Delete the record with FirstName = 'Kim' from the table

    DELETE FROM Contacts WHERE FirstName = 'Kim'

Verify that the record has been deleted using a SELECT statement.

Continue to practice building statements with this database based on the operations you're thinking about 
performing on your own project database.



----------------------------------------------------------------------------------------------

### Module 3 | Databases   Querying Databases From a Node App   Connecting Node App to DB

# Connecting Your Node.js App to a SQLite Database

At this point, you should be comfortable using SQL to construct queries against a database to create, read, 
update and delete data. You should also be comfortable using SQLite3's shell to run these SQL statements.

However, you won't manually run these SQL statements each time your app needs to work with data. Instead, you 
will hard-code SQL statements into your Node.js so that these statements are run when needed.

For example, recall that you set up a GET route in your Node.js in the previous module. Right now, your app is 
simply returning a sample statement when this route is triggered. Instead, your app should return a set of data 
from the database.

You can achieve this outcome by adding a SQL statement to your route that will pull from or insert into the 
database when the route is called.

Completing the prototype for your app is as simple as adding SQL statements to each of your route to perform 
the appropriate CRUD operation, and returning the corresponding data to the client, where that data will be 
interpreted and displayed appropriately using client-side JavaScript code.

In the following lessons we'll walk through exactly how to add SQL statements to your Node.js app using a 
sample application.

---

#### Module 3 | Databases   Querying Databases From a Node App   Exercise

# Exercise - Add SQL Statements to a Node.js Project

We'll continue working with the hello-express app from the previous module for this exercise. Open the 
hello-express folder from the previous module in Visual Studio Code.

### Install the SQLite Module

The first step to connecting your Node.js app to a SQLite3 database is to install the SQLite3 module. 
Run the following command in your command prompt from within your hello-express folder:

    npm install sqlite3 --save

This will install the sqlite3 Node module and add it as a dependency in your hello-express package.json file. 
Now you'll be able to use the sqlite3 module from your app.

### Import the SQLite Module

In order to add the SQLite Module to your Node.js project, add the following line of code in your 
server.js file:

    var sqlite3 = require('sqlite3');

Add the following line of code to create a database named 'HelloExpress' to be saved in a file 'HelloExpress.db':

    var db = new sqlite3.Database('HelloExpress.db');

### Create a Table and Populate with Sample Data

The easiest way to setup and populate a table in your database is to do so manually using the SQLite shell.

Open the HelloExpress.db database in the SQLite shell from your command prompt (within your hello-express folder):

    sqlite3 HelloExpress.db

Create a table named Quotes

    CREATE TABLE Quotes(Quote VARCHAR(255), Author VARCHAR(255));

Insert sample data so that it's easier to test as you work:

    INSERT INTO Quotes VALUES ('Life is Short', 'Unknown');

Run a SELECT statement to ensure your table contains data:

    SELECT * FROM Quotes;
    
### Define SQL Queries for Routes

All that remains now is to add SQL statements to your routes as needed.

For example, let's start by creating a GET '/quotes' route and adding a SELECT statement that returns 
all of the quotes from the database.

Add the following code to your server.js file:

```javascript
app.get('/quotes', function(request, response){
    db.all("SELECT * FROM Quotes", function(err, rows){
        console.log("GET Quotes, The database currently contains the following rows: " + rows);
        response.send(rows);
    });
});
```
* This defines a route for the API endpoint GET /quotes.
* When this endpoint is reached, it will trigger the SQL `SELECT *` statement to retrieve all stored quotes
* `db.all` is used to run a SQL SELECT statement and retrieve all resulting rows
* The function we pass to `db.all` is a callback function. This function runs after the SQL `SELECT` statement completes. In this case, we are sending the resulting rows to the client in this function using `response.send(rows)`

Test this route:

1. Run your server in the command prompt using the node server.js command.
2. Open your browser and navigate to localhost:3000/quotes.

You should see the data from the database displayed in JSON form on the webpage. This data can now 
be interpretated and rendered properly using client-side JavaScript code.

Add the following code to your server.js file to create a route that queries for all quotes by a specific author.

```javascript
app.get('/quotes/:author', function(request, response){
    db.all("SELECT * FROM Quotes WHERE Author = ? ",
            [request.params.author], 
            function(err, rows){
                console.log("GET request for author: " + request.params.author);
                response.send(rows);
            });
});
```

This defines a route for the `GET /quotes/:author` route, which accepts a parameter for the Author name and 
uses a `SELECT FROM WHERE` statement to look for quotes by that author.

Add the following code to your server.js file to create a route that handles the `POST /quotes` endpoint:

```javascript
app.post('/quotes', function(request, response){
    db.run("INSERT INTO Quotes VALUES ?", req.body);
});
```
This route uses the `db.run` method to run a SQL `INSERT` statement. You can use the db.run method to run any 
SQL statement other than the SELECT statement. (Use the `db.all` method for SQL `SELECT` statements like we 
did in the example above)

The `?` in the INSERT statement is a placeholder for the POST data we wish to insert. We fill this in with 
the `request.body` object, which contains the data that was sent with the request.

Conclusion

Your server.js file should contain the following:

```javascript
var express = require('express');
var app = express();
var port = 3000;
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('HelloExpress.db');

app.get(`/` function(request, response){
    response.send("Hello, World");
});

app.get(`/quotes`, function(request, response){

   db.all("SELECT * FROM Quotes", function(err, rows){
        console.log("GET Quotes: The database currently contains the following: " + rows);

        response.send(rows);
    });
});

app.get(`/quotes/:author`, function(request, response){

   db.all("SELECT * FROM Quotes WHERE Author = ?", [request.params.author], function(err, rows){
        console.log("GET Request for author: " + request.params.author);

        response.send(rows);
    });
});

app.post('/quotes', function(request, response) {
    db.run("INSERT INTO Quotes VALUES ?", req.body)
});

app.listen(port, function(){
    console.log("Express app listening on port " + port);
});
```

---

#### Module 3 | Databases   Querying Databases From a Node App   Project Guide




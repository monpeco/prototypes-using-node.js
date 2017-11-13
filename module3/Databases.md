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
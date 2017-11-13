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



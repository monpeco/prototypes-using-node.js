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

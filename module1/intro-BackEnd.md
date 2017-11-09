#### Module 1 | Intro to Back-End Web Development   Overview   Overview

# Module 1 Overview

At this point you've worked on the front end, or a client side,
of your web application.
As we know, the front end consists of all the HTML,
CSS and JavaScript that runs in the browser.
This code is written to control how web pages will be displayed,
and to manipulate pages based on user interaction.
This would be sufficient when developing a static web page or
website.
But if you want to develop a full-stack web application that
uses dynamic data, you'll need a back end that can store data
after the user exits the app, and
that can later retrieve that data.
Your back end will consist of a database that stores and
provides access to the data for your app.
As well as a web application server that handle requests from
clients, communicates with the database and
then sends that information back to the client.
Throughout this module, we'll take a deeper look at each of
this components, as we prepare to dive deeper into each one.
By the end of this module, you should have a better
understanding of how web servers work.
And what you'll need in order to write your own back
end for your web app.
Let's get started.


In this module, you will:

* Identify the components of a web application
* Identify the work that is involved in back-end web development
* Explore the fundamental concepts of RESTful APIs
* Explore HTTP and how it allows Web communication
* Practice identifying the proper HTTP request or response types for common scenarios

These are fundamental concepts that will really set you up for success if you're interested in 
continuing with back-end web development or simply understanding the concepts that are relevant 
to the Web. Many of these concepts can be complex and could be covered on their own in separate 
courses. Additionally, there are an abundance of modern frameworks and tools that use various 
architecture In this module, we'll give a brief overview of the concepts as they relate to 
building a simple web app. This will give you exposure to the most important and fundamental 
concepts of back-end web development, and give you practice applying these concepts, so that 
you'll be set up for success if you choose to further your learning on these topics.

Let's get started!

---

#### Module 1 | Intro to Back-End Web Development   Intro to Back-End Web Development   Overview of Back-End Web Development

# Overview of Back-End Web Development

So far, you've been writing code that a web browser
uses to display your webpage.
This code has been doing things such as defining the contents
for your page, styling the page and making it more interactive.
So far, what you've created is called a static webpage.
And that would be okay if all you wanted
to do was display information to your users that doesn't change.
But in this course, your goal is to create a web application,
which means users should be able to interact with your app and
have data that is modified and saved somewhere.
To do this, you need to create what's called a back end, and
writing back end code is code that runs on a server
that handles requests for information.
For example,
if you were creating a gradebook application,
a user may want to view the grades for a specific student.
They may click a button and enter the student's ID.
And at this point the browser would
make a request to the server, which is the back end, and
the server would look at the appropriate data for
that student and pass it back to the browser.
The browser code would then be responsible for
displaying the grade information to your user.
This may sound complicated, but essentially, your back end code
is responsible for creating a database, writing queries to
add or retrieve information to and from the database and
understanding requests that come from the browser or the client.
You'll have your back end up and running in no time.



# Intro to Back-End Web Development

This course is all about the basics of back-end web development. Let's take a look at what exactly a backend 
is and what that consists of.

You should already be familiar with what's involved in front-end web development. The frontend of a web app 
displays the user interfaces in a web browser and facilitates user interaction.

Back-end web development involves building the brains that will allow a web app to be functional. That 
functionality depends on handling the logic and data that a web app needs to track and use. Think of the 
backend of a web app as the brain that powers it, whereas the frontend would be the personality that 
users interact with.

When your user interface needs to display data to the user, it sends a request for that data to the backend. 
The backend is constantly listening for such requests. When it receives a request for data, it communicates 
with a database to retrieve the data, possibly manipulates the data, and then returns it back to the client.

The frontend is commonly referred to as the client and the backend as the server.

Let's take a deeper look at the components that make up the server-side of our app and how they work together 
to make a web app functional.

### BackEnd Functions

The backend of a web app must be able to:

* Listen for requests from clients and interpret them
* Perform the appropriate action to provide the client with the desired outcome
* Interact with a database to access and manipulate stored data
* Respond to the client with a status and/or requested data

---

#### Module 1 | Intro to Back-End Web Development   Intro to Back-End Web Development   Structure of the Backend

# Structure of the BackEnd

The backend, or server-side, of a web application consists of several components, commonly referred 
to as **tiers** or **layers**. We refer to the backend as the server-side of a web app because the 
backend of a web application is hosted on a web server.

The most common layers of a web application are:

* **the presentation layer**: This layer is part of the client-side of an application and refers to 
the user interface of an application. The user interface of a web app includes any HTML, CSS and 
JavaScript code that runs in the browser to display the webpages that make up the app's interface.

* **the application layer**: This layer handles the logic that makes the web application function. 
This refers to any of the operations and algorithms that must be carried out in the background in 
order to handle the business operations of the app.

* **the data layer**: This layer stores, organizes and manages access to an application's data 
using a database.

Web applications can be built in several different ways. Sometimes the application layer will be part 
of the client-side, sometimes it will be shared across the client-side and server-side, and sometimes 
it will be part of the server-side.

In this course, we'll handle a majority of application logic in the backend. This means that if your 
app needs to process data before it can be displayed, you'll write the code for most of that processing 
on your server, the server will return that processed data, and all the client will need to do is 
display it appropriately.


![web-app](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/c06a145f3512a466e36321cdb9416a10/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/clients_server.png)


The web server handles requests for web content and serves the content to clients. This involves 
identifying the resources that a client is asking for, such as the homepage html file, or a css 
stylesheet, and returning those resources. Both static websites and dynamic web apps utilize web 
servers to handle requests for web resources.

In addition to a web server, web applications also contain an application server. This is the 
component you will program to handle the logic and algorithms that your app needs to perform. 
This includes handling requests from the client for data, communicating with the database, 
performing any necessary changes or modifications, and then returning that data to the client.

The database is where the data for an application is stored. The database stores, organizes and 
provides access to an application's data.

In summary, a web server will contain an application server that correlates to the application 
layer of your app, and a database which correlates to the data layer of your app. These are the 
2 components that you will program as the back-end developer.

We'll take a deeper look at each of these components throughout this course.

---

#### Module 1 | Intro to Back-End Web Development   HTTP   Intro to HTTP

# Intro to HTTP

https://youtu.be/o51UEv5x6UA

At this point, we know that web applications consists
of client-side code that runs in the browser,
and server-side code that runs the brains of the application.
And we know that the client and
server communicate with each other to transfer data.
Communication requires understanding of the same
language.
It's pretty difficult for someone who speaks English to
communicate to someone speaking Chinese, for example.
The same is true on the web.
In order for clients and servers to be able to communicate,
there needs to be a common language and guidelines so
that all parties know how to communicate in a standard way.
The protocol used for web communication is called HTTP.
HTTP stands for Hyper Text Transfer Protocol.
This protocol defines the rules and standards for
communicating and transferring data using the Internet.
With HTTP, these communications between clients and
servers take place using a request and response model.
Clients make requests for data,
such as requesting an HTML file for a web page or
requesting a list of items to populate a page with.
HTTP defines request methods that allow all clients to make
these requests in a standardized way.
This is how clients specify whether they are asking for
data, providing data or deleting data.
Servers listen for these requests,
interpret them to perform the appropriate actions, and
respond appropriately to the client.
HTTP provides several response methods that standardize how
servers can respond to clients.
These response methods include a way for
the server to let the client know whether or
not the requested operation was successful.
To summarize this process, a client,
which in this case is a web browser, is running HTML, CSS,
and JavaScript to display a web page.
The code needs to display dynamic data such as the latest
status on an item.
The client sends an HTTP request to the web server requesting
this data.
The web server receives the request and
interprets it to determine what action to take.
It communicates with the database to obtain
the appropriate data, and then sends an HTTP response that
includes an OK status along with that data.
The client receives this response and
displays the data on the page as desired.
In the upcoming lessons,
we'll take a deeper look at the methods that HTTP defines for
requests and responses and we'll look at how clients and
servers use these methods to transfer data on the web.


# What is HTTP?

As we discussed in the last lesson, web applications consist of a client-side and a server-side component, and there 
is data exchanged between those components. 

In order for clients to be able to communicate with web servers, there needs to be a common language, or protocol, 
that provides rules for how the communication should occur.  The protocol used for Web communication is called **HTTP**, 
which stands for **HyperText Transfer Protocol**. 

HTTP defines a set of rules for how clients and servers communicate.  In short, HTTP is the language that all Web 
clients and servers speak to one another.

All interactions that use HTTP are based on requests and responses- that's the only way clients and servers can 
communicate.

Clients send **HTTP requests** to servers to request resources, data or actions on data.

Servers send **HTTP responses** to clients after handling the requests appropriately.

HTTP defines **request methods** and **response methods** that clients and servers use to communicate.

The actions that can be performed with HTTP correlate to the CRUD operations:

* creating data
* reading data
* updating data
* deleting data

We'll take a deeper look at these request and response methods in upcoming lessons.

---

#### Module 1 | Intro to Back-End Web Development   HTTP   HTTP Requests


# HTTP Requests

Web clients use HTTP to send requests to servers to obtain or modify stored data.

## HTTP Request Methods

HTTP defines a set of methods that clients can use to request information from web servers. Remember that these 
methods correspond to the CRUD operations that can be performed on data:

### Creating data:

Clients use the HTTP POST method to insert or update data on the server. This is the method used when HTML forms 
need to send form data to the server.

Clients use the HTTP PUT method to create or update data on the server. This method is similar to the POST method.

### Reading data:

Clients can use the HTTP GET method to retrieve information from a server. This is useful in scenarios where the 
client needs to ask for the details of a stored object, a list of objects that are being stored, or search for 
something that the user is requesting.

For example, when a user browses a shopping site and navigates to the "pants" page, the browser will send a GET 
request to the app's server requesting a list of all pants for sale and then display those results on the page.

The client may optionally pass parameters that give the server more information about the request, such as the 
id or name of the specific object the client wants to locate.

### Updating data: 

The HTTP PUT or POST methods

### Deleting data:

Clients use the HTTP DELETE method to delete resources from the server.


## Format of an HTTP Request

HTTP request messages consist of a request line, an optional header and an optional message body.

![format](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/d304e594309d9e7b493cd7cb8a98ed5b/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/HTTP_Request_Message.png)

### The Request Line

When a client sends an HTTP request to a server, it needs to include some key information about the request:

* **Request method**: What type of request is being made? (GET, PUT, POST or DELETE)
* **a URI to identify the resource involved in the request**:   Where is the request being made to?
* **HTTP Version #**: To make it clear which protocol is being used in the communication

This information is included in the request line of an HTTP Request message.

For example, in a Q&A forum, the HTTP request lines would be used as follows to access and modify questions. Let's assume the server URL in this scenario is www.askquestions.com and that the URI for the question resource is /questions.

**NOTE**: The request method type should always be written in uppercase letters.

* **Create- add a new question**:
```
POST /questions HTTP/1.1
```
* **Read- view a question**:
```
GET /questions:3 HTTP/1.1
```
* **Read- view all questions**:
```
GET /questions HTTP/1.1
```
* **Update- Modify a question**:
```
PUT /questions:2 HTTP/1.1
```
* **Delete- Delete a question**:
```
DELETE /questions:4 HTTP/1.1
```
### The header and body

The header contains optional metadata about the request. The details of header fields are out of scope for this course.

The body contains the optional parameters for the request, and/or any data being sent to the server. If a client sends 
a POST request after a user fills out a form, the form data would be sent within the body of the message. 

---

#### Module 1 | Intro to Back-End Web Development   HTTP   HTTP Responses

# HTTP Responses

Web servers use HTTP to send responses to clients who have made requests.

HTTP response message consists of a status line, an optional header and an optional message body.

![format](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/bd16affabcc96ee9e93e729b97b15c38/asset-v1:Microsoft+DEV280x+4T2017+type@asset+block/HTTP_Response_Message.png)

The **status line** tells the client the result of the requested operation. Status codes are written using 3 digit codes. You may have seen a few of these codes if you've ever run into a missing webpage or an error online. The most common are:

* **200**: This code means "OK". This status is sent when the server completed operation successfully.

* **400**: This code means "Bad Request". This status is sent when the server couldn't understand the client request.

* **404**: This code means "Not Found". This status is sent when the server could not locate the requested resource.

Similarly to HTTP request messages, response messages also contain headers and a body.

The **header** contains optional metadata about the response. The details of header fields are out of scope for this 
course.

The **body** contains any data or resource the server is providing in response to the request. This can be an HTML 
file the client requested, or data from the database.


---

#### Module 1 | Intro to Back-End Web Development   Web APIs   What is an API?


# What is an API?

There are several models that developers use to structure
web applications.
The way that we'll set up our application server in this
course is by creating what's called an API.
An API, or an Application Programmable Interface,
is a set of tools that a client can interact with to perform
specific tasks or handle specific requests.
You can think of an API similar to a restaurant menu that
contains a set of meals that you can order.
The menu allows you to order something that is already
packaged into a meal,
instead of having to worry about the details of all of
the ingredients and how they are prepared.
As a guest, you order from the menu,
someone else does the work of preparing the entree and
it's returned to you as a complete meal.
The menu also serves as a contract that the restaurant
provides to let you know what you'll receive.
Similarly, by defining an API on your server,
you'll create a set of high level options that clients can
use to interact with your back end and access its data.
Instead of each client having to directly query the database for
each piece of data it needs, it can simply call an API method on
your server and get the result that is desired.
The API serves as a contract that lets the client
know what information it needs to get the API and
what data it will get as a result.
The client does not have to worry about what happens on
the server in order to produce this results.
For example, the Facebook API allows developers of apps
to connect to it and
request information about a user's profile,
such as their friends list.
These developers don't have to write the code to look through
the person's friends list manually and
they can simply call the API and receive the result.
We'll define a server-side web API on our server
that allows clients to request and
update information relevant to our web app.
This is where clients will send HTTP requests to and
receive data from.
In upcoming lessons we'll take a deeper look at how we can define
APIs and
write the codes to perform the task we want to expose.



# Application Programming Interfaces

Now that we understand the functions and components of a web back-end and how clients and web servers communicate, 
let's take a look at exactly how we'll program our server to handle the requests that come from clients.

Recall from the HTTP lessons that HTTP requests include a request method (**GET*, *PUT*, *POST* or *DELETE*) and a URI to 
identify a resource to operate on.  

In order to handle these requests, you can write code on your web server that will tell the server what to do 
based on the type of request that comes in.  Creating a Web API is a way of doing just that.

### WHAT IS AN API?

The way that we'll set up our application server in this course is by creating what's called a web API.  

An API, or application programming interface, is a set of components that define how a set of functionalities 
can be accessed by others.  APIs allow developers to take advantage of code written by others.  If a developer 
writes a large library of code to perform specific tasks, another developer can easily access that library 
using the API endpoints that are defined for it.  

Think of a restaurant menu that contains a set of meals that you can order.  The menu allows you to order 
something that is already packaged into a meal, instead of having to worry about the details of all of the 
ingredients and how they are prepared.  As a guest, you order from the menu, someone does the work of 
preparing the entree, and it's returned to you as a complete meal.  

In the same way, an API allows developers to access functionality through a menu of commands that prevent 
the developer from having to understand exactly how the functions are being performed.  The developer simply 
calls the command and receives the result of the operation.

### Web APIs

Similarly, by defining a web API on your server, you'll create a set of high-level options that clients 
can use to interact with your back-end and access it's data. Instead of each client having to directly 
query the database for each piece of data it needs, they can simply call an API method on the server and 
get the desired result. All the client will need to know is what information the API needs, and what 
data will be returned as a result. The client does not have to worry about what happens on the server 
in order to prodcue this result.

For example, the Facebook API allows developers of apps to connect to it and request information about 
a user's profile, such as their friends list. These developers don't have to write the code to look 
through the person's friend list manually, and can simply call the API and receive the result.

We'll define a server-side web API on our server that allows clients to request and update information 
relevant to our web app.

---

#### Module 1 | Intro to Back-End Web Development   Web APIs   Defining APIs
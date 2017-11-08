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
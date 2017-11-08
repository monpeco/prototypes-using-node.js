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

#### Module 2 | Node Basics   Overview   Module Overview

# Module Overview

Now that we've explored what's involved in developing a web
backend, let's get started writing the application
server for your app.
We've identified what an application server does.
It listens for
a request from clients, interprets those requests,
communicates with the database and responds appropriately.
We could write all of the code for
this server from scratch, but reinventing the wheel is
not something most developers want to spend time doing.
Instead, we can take advantages of platforms that make our
work easier.
NodeJS is a JavaScript platform that
allows us to write JavaScript code for web servers.
We'll take advantage of the capabilities of NodeJS as
well as some additional add-ons in order to simplify the code
we write for our server.
This will allow us to focus on the specific features that make
our app unique, as opposed to rewriting the basic code that
nearly every server has to set up.
In this module we'll learn more about NodeJS and
use it to set up an application server that can listen for and
respond to client requests.
We'll walk through this process using a sample application,
and then you'll be able to do the same with your own web app.
Let's get started.



Module 2 Overview

This module will introduce you to the basics of using **Node.js** and **Express** to create web apps. 
We'll walk through the components of Node.js and Express apps and setup a sample Hello, World! app, 
before you use what you've learned to set up the Node.js project for your own web app.

In this module you will:

* Become familiar with using Node.js to set up and run basic web servers
* Become familiar with using Express with Node.js to create basic Node.js apps
* Create a web API to handle http requests by defining routes in an Express app

---

#### Module 2 | Node Basics   Node Basics   Node.js Overview



# What is Node ?

Writing code for
your back end involves handling requests from your client to
retrieve and update information in your database.
Often times no matter what type of app you're creating,
the code for these tasks is usually pretty similar.
For that reason, many people and companies have created framework
that simplify the code you need to write for this task.
And allow you to focus on the code that is
different for your app.
The framework will be using in this course is called Node.js
and this framework allows you to use JavaScript
to write your server code.
This is different from the JavaScript we've been using so
far that is running the browser to display web pages.
Although the programming language is exactly the same and
you can use it in the same way.
The difference is that it'll be run in the server
on a computer instead of in the browser.
And you'll be using it handle requests from your client and
connect with your database.
You'll also be using a frame called Express,
which works hand in hand with Node.
Continue on to learn about how Node and
Express will make it easy for you to create your back end.

# What is Node.js?

JavaScript was created to be used in the development of interactive webpages. JavaScript traditionally runs 
in web browsers, meaning it's used for front-end/client-side web development.

Recently JavaScript has also become popular for server-side development. With developments like Node.js, 
JavaScript can be used to run web servers. With Node.js, we can write JavaScript code on the server-side 
that performs the data access and manipulation for an application before returning that data to the client.

Node.js is a server-side runtime environment that can be used to program web application servers.

Node apps can run on Window, Linux and MacOS machines. The event-driven asynchronous design of Node.js 
makes web apps developed using Node.js very fast and efficient.

Node.js can be used to:

* generate page content dynamically
* handle HTML form data
* work with databases
* work with files on server

In the upcoming lessons, we'll learn more about Node.js and get started setting up basic web servers.

---

#### Module 2 | Node Basics   Node Basics   Node Setup

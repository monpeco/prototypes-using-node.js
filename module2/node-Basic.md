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

# Getting Started with Node.js

Now that you have a basic understanding of what we can use Node.js for, lets take a look at the basics 
of working with Node.js.

This lesson will give you an overview of some concepts and tools that you'll be working with in the next 
exercise.


### Steps to create a web server using Node.js

1. Import the proper modules that will help you develop your app.
2. Set up a server to listen for http requests.
3. Configure server to receive and respond to http requests
    a. Work with database to obtain data for response
    b. Perform logic and algorithms, if needed, to prepare response

Once Node.js starts a server and initializes variables and functions, it is simply waiting for requests to come in.


### Ports

In computer networking, a **port** is a destination or communication endpoint. When we use Node.js to set up 
a web server on our computers, we'll have to specify which port the Node.js app should be listening on. 
You can think of a port similar to an airport or shipping terminal. Each port has an address that is used 
to send information to. We'll use port 3000 for the exercises this course.


### Node Package Manager (npm)

The **Node Package Manager (npm)**, comes packaged with your Node.js installation. It allows you to quickly and 
easily install other add-ons (frameworks and libraries) to use with your Node.js projects.

Many of these packages will be the dependencies that your project needs in order to work. A dependency is a 
package that your project depends on for any reason. For example, if you're using a function that you didn't 
write yourself that is defined as part of another framework or library, your project depends on that framework 
or else it won't be able to access that function.

Npm also provides an online database of public packages that allows you to access packages that other developers 
have created. Using external libraries, packages and frameworks makes it easier to develop code for your projects 
without spending time rewriting code that others have already spent time on. Instead, you can simply install a 
package and integrate it in your project.

We'll use npm to install several frameworks and modules that we'll need for this course.


### Modules

**Modules** are collections of functions that you can utilize in your Node.js application. This allows you to 
easily incorporate existing code that is written for a specific scenario, which helps you focus on your app's behavior.

For example, we'll be using the **http** module and the **express** module in our apps.

You will add a module to your project using the `require()` function, passing in the name of the module.

For example, `require('express');` includes the express module in your project.

**Note**: Use single quotes `(' ')` instead of double quotes `(" ")` in your Node.js files, except for when you are 
writing in json


### The http module

The **http** module is a module that is built into Node.js. It allows HTTP communication with your Node.js server.

You'll use the `createServer` method that is part of the http module to create a server that listens to http 
requests and provides http responses.


### The package.json file

Every Node.js project contains a **package.json** file. This file contains metadata about your project, such as the 
project title, version #, author(s), etc. More importantly, it lists the dependencies that your project has- listing 
each dependency and the version of each dependency that your project needs.

Node.js will use the information in this file to install the correct dependencies when you set up your project.

You'll run the `npm init` command to setup your project, which uses the information from your **package.json** file to do so.

In the next lesson, we'll walk through the process of setting up a simple Hello, World! server using Node.js.

---

#### Module 2 | Node Basics   Node Basics   Lab: Hello, World with Node.js

# Hello, World! in Node.js

In this exercise, you will familiarize yourself with Node.js by setting up a simple server. The server will 
respond to requests with a "Hello, World!" message and will also print "Hello, World!" to the console when 
it starts running.

You will need...

In this exercise, we'll use:

* A command prompt
* A code or text editor. These instructions will be based on using Visual Studio Code.
* Node.js installation
* A web browser

Before you start...

Make sure that you have installed Node.js on your computer before starting this exercise.

You can find instructions for installing Node.js on the [Node.js website](https://nodejs.org/en/download/package-manager/#windows). 

Once you have installed Node.js, verify that your installation was successful. Type the following command into your command prompt:

```
node -v
```

This should display the Node.js version that you have installed. If it does not, you have a problem with your Node.js installation.

### Exercise

1. Create a directory to store this Node.js project

Create a folder on your computer named hello-node:

You can do this in the command line by typing: `mkdir hello-node` in the location where you wish to create the folder.

In the command prompt, navigate into the folder you just created.

cd hello-node



2. Setup Node.js Project

Complete steps 1-2 in your command prompt.

Run the `npm init command`, which will initialize a Node.js project in your folder and set up a default package.json file.

```
npm init
```


You will be prompted to enter information about your project. Use the following:

For the description field, enter "My first Node.js project".

For the entry-point field, enter "server.js".

Accept the default values for all other fields, by pressing enter.



Press enter at the end to accept all values when prompted.

You have now setup a folder that you can use for a Node.js project.



### Setup Server File

Node.js relies on the package.json file to understand the basic information and dependencies for every Node.js project.

Open your hello-node folder using Visual Studio Code.

In Visual Studio Code: select File>Open Folder then navigate to your hello-node folder and select select folder.

You should see the package.json that has been created in your folder.

In the same folder, create a file called **server.js**.

Open the server.js file in your Visual Studio Code editor window.

Create a variable to access the http module:

```
var http = require('http');
```

This will give you access to the `http` module in your project. The http module helps your server handle http requests and responses.

Create a variable to store the port # your server will run on.

```
var port = 3000;
```

This is the port your server will use to listen for requests. Clients will send requests to this port to access the server.

Create a function that will handle requests from clients, called requestHandler.

```
 var requestHandler = function(request, response){
     console.log('New request to: ' + request.url);
     response.end('Hello, World!');
 }
```

This sets up a function that will handle requests from clients. This function has parameters to accept a request and reponse object. 
The function uses the request object to identify the url the request was sent to. It uses the response object to create and send 
a response message.

Use the `http.createServer` method to create a `server` object. The `http.createServer` method expects a function to handle requests. 
We'll use the function we created in step 6.

```
var server = http.createServer(requestHandler);
```

Instruct the server to listen for requests on the port you defined. Also provide a callback function that will be run after the server 
begins listening on the port.

```
server.listen(port, function()
{
 console.log('listening on port ' + port);
});
```


This tells the server to start listening for requests on the port specified and then run the code in the function provided. In this 
case, that function is printing a message to the console.

Save your changes to server.js. Your file should contain the following:

```
 var http = require('http');
 var port = 3000;

 var requestHandler = function(request, response){
     console.log('Request came from: ' + request.url);
     response.end('Hello, World!');
 }

 var server = http.createServer(requestHandler);

 server.listen(port, function(){
     console.log('Listening on port ' + port);
 });
```
 
### Run Your Server

Right now, the server will not run the code you've written, until it's told to. We need our server to begin listening for requests, 
and we do so by using Node.js to run the server.

In your command prompt, navigate into the folder that contains your Node.js project- hello-node.

Run the server using the node command.

```
node server.js
```

You should see a message in your console window telling you the server is listening.

### Send a Request to Your Server

The primary purpose of a server is to handle http requests from clients. Try accessing your server using your browser, which 
will send an http request to the server. Let's see what happens.

Open your web browser.

Enter your server URL into the address bar:

```
localhost:3000.
```

localhost translates to 127.0.0.1, which is the address of the computer the browser is currently running on. This is followed 
with a colon and the port number.

I've typed `localhost:3000` since my server is listening on port 3000 on my computer.

You should see the text "Hello, World!" displayed on the page, since that's the message you printed from the `requestHandler` 
function, which handled this request from the browser.

In the command line, you should now see a message letting you know what path on your server was requested, based on the URL the 
client accessed.

For example, typing `localhost:3000` sends the request URL `/`, since you are accessing the root of the server.

Typing `localhost:3000/hello/world` uses the request URL `/hello/world` based on the path you typed beyond the server root.


Notice that the path you enter doesn't currently change what happens on your server. We'll soon change this so that different 
URL paths correspond to different API endpoints.

### Summary

In this exercise you:

* Initialized a Node.js project
* Created an http server using Node.js
* Started running a Node.js server in the command line
* Tested your Node.js http server using your browser to send requests


---

#### Module 2 | Node Basics   Building APIs with Express   Express Overview

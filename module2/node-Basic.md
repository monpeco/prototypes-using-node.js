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

# Using Express with Node.js

**Express** is a web application framework for Node.js. Although you could use Node.js on its own, using a framework allows you to avoid spending time on the common features of web apps. Instead, you can focus on the unique features of your app, and use a framework to efficiently handle the aspects that your app has in common with most others.

Express is a framework that makes it easy to build web APIs and apps with Node.js.

The primary way that we'll use Express in this course is to route HTTP requests that are made to your server.

With Express, you can easily define routes that control how your server handles different types of requests, which translates to your API.

In the next lesson, we'll learn more about the core concepts that you'll need to understand to use Express. 

---

#### Module 2 | Node Basics   Building APIs with Express   Express Setup

# Getting Started with Express

Now that you have a basic understanding of what we can use Express for, lets take a look at the basics of using Express to build a web API.

This lesson will give you an overview of some concepts and tools that you'll be working with in the next exercise.

### Steps to create a web API using Express with Node.js

1. Import the proper modules that will help you develop your app. You'll need to import an `Express` module in order to use Express.
2. Set up a server to listen for http requests. Express makes this step simpler than using Node.js alone.
3. Configure server to receive and respond to http requests
    a. Set up routes that specify how to handle different http requests.
    b. Work with database to obtain data for response
    c. Perform logic and algorithms, if needed, to obtain response

### Routing

**Routing** is a fundamental aspect of developing a web API with Express. Routing refers to the process of defining how 
the app will respond to client requests to particular API endpoints.

An **endpoint** refers to a unique combination of http request type and request URI/path.

For example, a client may send a**GET** request to a **/questions** API in order to retrieve a list of questions. We might 
refer to this endpoint as `GET '/questions'`.

A different endpoint on the same server might be `POST '/questions'`.

Express allows us to set up a route to handle each API endpoint. For each route, we'll provide a callback function that 
Express will run once a client sends a request to that endpoint.

### What About Our Client-Side Files?

You may be wondering how your client-side HTML, CSS and JavaScript files integrate with your server-side app.

There are several web app development models, such as the commonly used MVC pattern, where the backend of your app directly 
modifies your client-side files on the server. In such scenarios, the server-side code directly inserts data into HTML templates 
before returning those files to the client.

In this case, since we are developing a web API for our backend, our server will simply be responding to the client with data 
when requested. Therefore, our client-side files will be sending requests for that data, and then filling the data into the 
HTML file appropriately within the browser.

This process of simply returning files without modifying them is called **serving static files**. We'll keep our static HTML, 
CSS and JavaScript files for our front-end in a public folder on our server, and Express will simply return those files as-is 
when the browser requests them.

The following line of code in your project file will accomplish this:

    app.use(express.static('public'));
    
In the next lesson, we'll walk through how to set up an Express app using Node.js.

---

#### Module 2 | Node Basics   Building APIs with Express   Lab: Hello, World with Express

# Hello, World! with Express

In this exercise, you will familiarize yourself with Express by setting up a simple server-side API. The server will 
respond to requests with a "Hello, World!" message and will also print "Hello, World!" to the console when it starts running.

### You will need...

In this exercise, we'll use:

* A command prompt
* A code or text editor. These instructions will be based on using Visual Studio Code.
* Node.js installation
* A web browser

### Before you start...

Make sure that you have installed Node.js on your computer and that you're familiar with the basics of Node from the previous section.

Exercise

1. Create a directory to store this Node.js project

Create a folder on your computer named **hello-express**:

You can do this in the command line by typing: mkdir hello-express in the location where you wish to create the folder.

In the command prompt, navigate into the folder you just created.

cd hello-express

2. Setup Node.js Project with Express Dependency

Complete steps 1-2 in your command prompt.

  a. Run the npm init command, which will initialize a Node.js project in your folder and set up a default package.json file.

    npm init

  b. You will be prompted to enter information about your project. Use the following:

For the description field, enter "My first Express project".

For the entry-point field, enter "server.js".

Accept the default values for all other fields, by pressing enter.

You have now setup a folder that you can use for a Node.js project.

  c. Use your command prompt to install Express and save it as a dependency for your project:

    npm install express --save
    
This command will install express in your project's directory and add it as a dependency in your project's `package.json` file.

Your project can now access the express module and the functions it provides.

  4. Open your hello-express folder using Visual Studio Code.

In Visual Studio Code: select File>Open Folder then navigate to your hello-express folder and select select folder.

You should see the package.json that has been created in your folder.

Also note that you have a new sub-folder node_modules. This folder contains the modules you've installed as dependencies. This folder now contains the express module since we've installed it and saved it into the package.json file.

### Setup Basic Server

1. In the same folder, create a file called server.js.

2. Open the server.js file in your Visual Studio Code editor window.

3. Create a reference to the express module:

    var express = require('express');

This will give you access to the express module in your project.

4. Use the express function to create an express app object. This will always be the first step we'll take to use express in our project:

    var app = express();

5. Create a variable to store the port # your server will run on.

    var port = 3000;

This is the port your server will use to listen for requests. Clients will send requests to this port to access the server.

6. Use the express `listen` function to instruct the server to start listening, passing in the port variable for 
the port number.

    app.listen(port, function(){
         console.log('Express app listening on port ' + port);
     });
     
This tells the server to start listening for requests on the port specified and then to run the code in the function provided. In this case, that function is printing a message to the console when the server starts listening.

7. Save your file. You should have the following code in your file:

    var express = require('express');
    var app = express();
    var port = 3000;
    
    app.listen(port, function(){
        console.log('Express app listening on port ' + port);
    });
 
### Run your server

Right now, the server will not run the code you've written, until it's told to. We need our server to begin listening 
for requests, and we do so by using Node.js to run the server.

8. In your command prompt, navigate into the folder that contains your Node.js project- hello-express.

9. Run the server using the node command.

    node server.js

10. You should see a message in your console window telling you the server is listening.

### Setup Routes to Handle Requests

1. Try sending a request to your server. Open your browser and type localhost:3000 in the address bar. Make sure your server is 
still running in your command prompt.

You should see an error message. This is because the client (your browser) is trying to send an HTTP GET request to the server, 
but the server doesn't have any instructions on how to handle that.

We need to define routes to handle incoming requests.

2. Lets first handle the most route that our browser just tried to access: **GET ' / '** . This is the request that is sent when 
you try to access the root (homepage) of your server.

Use the express app.get function to create a route for the GET  ' / ' endpoint.

app.get('/', function(request, response){
    response.send('Hello, World!');
});

This sends an HTTP response that includes the message "Hello, World!" whenever a GET request is made to the ' / ' path.

3. Save your changes to **server.js**. Your file should contain the following:

    var express = require('express');
    var app = express();
    var port = 3000;
    
    app.get(`/`, function(request, response){
        response.send('Hello, World!');
    });
    
    app.listen(port, function(){
        console.log('Express app listening on port ' + port);
    });

### Send a GET request to your server

1. Make sure your server is still running on your port. If not, rerun your server:

    node server.js.

2. Open your web browser.
3. Enter the URL localhost:3000.
4. Your browser should display the message "Hello, World!", since that's the message outputted from the app.get function, which handled this request from the browser.
5. Now try entering a different path on your server, such as "localhost:3000/hello".

Notice that this attempt returns an error message reading Cannot GET /hello or something similar.

This is because we have not defined any route to deal with the /hello path.

Keep in mind that you will need to make sure all routes that make up your API are defined in your express app.

### Summary

In this exercise you:

* Installed Express as a dependency for a Node.js project
* Created an HTTP server using Express
* Created a route using Express that responds to an HTTP request


---

#### Module 2 | Node Basics   Project   Overview

# Set Up a Web API for Your Project

Now that you've practiced using Node.js and Express to build web apps and APIs, it's time to to apply what you've learned to your own course project.

The following guide will walk you through the process of setting up the Node.js project for your application server, and using Express to define routes that align to your app's API.

### Assignment

**Create a Node.js application that:**

* Uses Express to define routes
* Provides an API with at least 4 endpoints
* Returns JSON data, when appropriate, for HTTP requests
* Returns the static files that make up your app's front-end

Your app should be stored in a GitHub (or local Git) repository.

### Planning Ahead

Looking at the problem

Before writing code to achieve a goal, you should break the problem down into a set of smaller steps. Here's how we'll 
approach this part of your project:

* Setup project directory
* Initialize Node.js project
* Define routes that return sample data

In the next module, you will complete this project by hooking your app up to a database. For now, you'll return sample 
data in place of stored data.

The following pages will walk you through these steps


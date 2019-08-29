---
layout: single-card
title: Clean architecture
image: /craft-challenges/assets/images/dev/clean-architecture.png
category: dev
description: The Clean architecture is a mix between different architecture principles that have been mixed together and quote as The Clean Architecture by Uncle Bob.
---

## What ?
The Clean architecture is a mix between different architecture principles that have been mixed together and quoted as "The Clean Architecture" by *Robert C. Martin* in his book **Clean Architecture: A Craftsman's Guide to Software Structure and Design**.

It is a mix between

### Hexagonal architecture
![Hexagonal architecture]({{ site.baseurl }}/assets/images/clean-architecture1.png)

### Onion architecture
![Onion architecture]({{ site.baseurl }}/assets/images/clean-architecture2.png)

### Use case driven approach
![Use case driven approach]({{ site.baseurl }}/assets/images/clean-architecture3.png)

### What characteristics do these architectures have in common?
* Independent of frameworks
    * Does not depend on the existence of libraries
	* Allow us to use frameworks as tools (not a constraint)
* Independent of the front-end
	* Can easily change the UI (from web to console)
* Independent of the database
	* Business rules not bound to Database logic
* Independent of any external agency
	* Business rules don’t know anything about outside world

### Concepts behind Clean Architecture
![Clean architecture]({{ site.baseurl }}/assets/images/clean-architecture4.jpg)

#### Entities (Enterprise business rules)
* Encapsulate Enterprise wide business rules
* Can be 
    * Object with methods
    * Set of data structures and functions
* Could be used by many different applications in the enterprise.

#### Use cases (Application business rules)
* Capture business rules
* Structure should indicate what the application is, not how it does it
* Application specific business rules

#### Interface adapters
* Set of adapters that convert data :
    * from the format most convenient for the use cases and entities, 
    * to the format most convenient for some external agency such as the Database or the Web

In a MVC architecture :
Presenters, Views, and Controllers

#### Frameworks & drivers
Frameworks and tools such as : 
* Database
* Web Framework

Glue code that communicates to the next circle inwards. This layer is where all the details go : keep these things on the outside where they can do little harm.

## Why ?
Architecture means the overall design of the project. It's the organization of the code into classes or files or components or modules. And it's how all these groups of code relate to each other. The architecture defines where the application performs its core functionality and how that functionality interacts with things like the database and the user interface.

> Clean architecture refers to organizing the project so that it's easy to understand and easy to change as the project grows. This doesn't happen by chance. It takes intentional planning.

## How ?
* Clone the repository at : [http://bit.ly/2HiH9gR](http://bit.ly/2HiH9gR)
* Checkout the branch “kata-initial”
* Draw the sequence diagram of the Register Use Case
    * Use a tool like [https://sequencediagram.org/](https://sequencediagram.org/)

## Resources
* [Robert C. Martin. *Clean architecture: A Craftsman's Guide to Software Structure and Design, 2017*](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164/ref=sr_1_1_sspa?s=books&ie=UTF8&qid=1535097445&sr=1-1-spons&keywords=clean+architecture&psc=1)
* [The Clean Architecture by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
* [Clean Architecture for the rest of us](https://pusher.com/tutorials/clean-architecture-introduction)

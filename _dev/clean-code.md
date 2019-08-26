---
layout: single-card
title: Clean code
image: /craft-challenges/assets/images/dev/clean-code.png
category: dev
description: Clean code is subjective and every developer has a personal take on it. There are some ideas that are considered best practices and what constitutes as clean code within the industry and community, but there is no definitive definition.
---


## What ?
Clean code is subjective and every developer has a personal take on it. There are some ideas that are considered best practices and what constitutes as clean code within the industry and community, but there is no definitive definition.

> Clean code is code that is easy to understand and easy to change.

**Easy to understand** means the code is **easy to read**, whether that a reader is the original author of the code or somebody else. Its meaning is clear so it minimizes the need for guesswork and possibility for misunderstandings.  

`It is easy to understand :`
* The execution flow of the entire application
* How the different objects collaborate with each others
* The role and responsibility of each class
* What each method does
* What is the purpose of each expression and variable

**Easy to change** means the code is **easy to extend and refactor**, and it’s **easy to fix bugs** in the codebase. This can be achieved if the person making the changes understands the code and also feels confident that the changes introduced in the code do not break any existing functionality.  

`For the code to be easy to change :`
* Classes and methods are small and only have single responsibility
* Classes have clear and concise public APIs
* Classes and methods are predictable and work as expected
* The code is easily testable and has unit tests
* Tests are easy to understand and easy to change

The words `Clean code` have been quoted by *Robert C. Martin* in his book **Clean Code: A Handbook of Agile Software Craftsmanship**.

### Popular associated acronyms
* **S.O.L.I.D** : 5 principles when applied together intends to make it more likely that a programmer will create a system that is easy to maintain and extend over time  
    * **S**ingle Responsibility principle : every class should have a single responsibility. There should never be more than one reason for a class to change.
    * **O**pen/Closed principle : software entities should be open for extension, but closed for modification.
    * **L**iskov substitution principle : objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program.
    * **I**nterface segregation principle : many client-specific interfaces are better than one general-purpose interface. In other words, you should not have to implement methods that you don’t use. Enforcing ISP gives you low coupling, and high cohesion.
    * **D**ependency inversion principle :
        * Abstractions should not depend upon details
        * Details should depend upon abstractions.
* **D.R.Y** : Don't Repeat Yourself
    * Every piece of knowledge must have a single, unambiguous, authoritative representation within a system
* **K.I.S.S** : Keep It Simple and Stupid
    * Avoid complexity
* **Y.A.G.N.I** : You Ain't Gonna Need It
    * Do not develop anything "just in case" you need it

## Why ?
Because clean code is our purpose as software craftsmen.

> “Clean code is code that has been taken care of. Someone has taken the time to keep it simple and orderly. They have paid appropriate attention to details. They have cared.” - *Robert C. Martin*

![I see dead code]({{ site.baseurl }}/assets/images/clean-code1.jpg)

## How ?
* Identify a "code smell"
    * A "dead code"
    * A complex piece of code / "crappy" code
    * A piece of code that does not respect S.O.L.I.D principles
* Refactor it or delete it if it is unnecessary
    * Before any refactoring read the associated tests
    * If none write some
    * Then refactor

![Code quality]({{ site.baseurl }}/assets/images/clean-code2.png)

## Resources
* [How to write clean code ?](https://www.butterfly.com.au/blog/website-development/clean-high-quality-code-a-guide-on-how-to-become-a-better-programmer)
* [How to write clean code? Lessons learnt from “The Clean Code”](https://medium.com/mindorks/how-to-write-clean-code-lessons-learnt-from-the-clean-code-robert-c-martin-9ffc7aef870c)
* [Clean Code: Explanation, Benefits, and Examples](https://dzone.com/articles/clean-code-explanation-benefits-amp-examples)
* "Clean Code: A Handbook of Agile Software Craftsmanship" - *Robert C. Martin* ([here](https://www.amazon.fr/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?ie=UTF8&qid=1509989642&sr=8-1&keywords=clean+code) on amazon)

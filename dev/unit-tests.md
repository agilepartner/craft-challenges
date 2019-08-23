---
layout: single-card
title: Unit tests
image: /craft-challenges/assets/images/dev/unit-tests.png
category: dev
description: UNIT TESTING is a level of software testing where individual units/ components of a software are tested.
---

## What ?
UNIT TESTING is a level of software testing where **individual units/ components of a software are tested**.  
The purpose is to validate that each unit of the software performs as designed.  
A unit is the smallest testable part of any software. It usually **has one or a few inputs and usually a single output**.  
In object-oriented programming, the smallest unit is a method, which may belong to a base/ super class, abstract class or derived/ child class.  
Unit testing frameworks, stubs, and mock/ fake objects are used to assist in unit testing.

![Write 5 unit tests]({{ site.baseurl }}/assets/images/unit-tests1.png)  

## Why ?
Because we care about what we do we need to be able to guarantee the quality of our development, unit testing is the main practice to do so.  
These are the main benefits :
* Increases confidence in changing/ maintaining code
    * Run every time any code is changed
	* Catch any defects introduced due to the change
	* Code loosely coupled to be testable
* Codes are more reusable
    * Codes need to be modular in order to be tested
* Development is faster
    * Writing tests takes time but the time is compensated by the less amount of time it takes to run the tests (far less than with human checks)
* Easy Debugging
    * When a test fails, only the latest changes need to be debugged
* Codes are more reliable

![Write 5 unit tests]({{ site.baseurl }}/assets/images/unit-tests2.png)  

## How ?
* Add 5 more unit tests in your code base
* If you have no tests on your current product code base, it is time to begin
    * Create a test project/folder
    * Add a dependency to a Unit Test framework (Xunit for example)
    * Write the first tests

> No matter the languages you are using you can write unit tests.

![Write 5 unit tests]({{ site.baseurl }}/assets/images/unit-tests3.jpg)  

## Resources
* [Unit Tests, How to Write Testable Code and Why it Matters](https://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters)
* [12 Unit Testing Best Practices](http://www.sw-engineering-candies.com/blog-1/unit-testing-best-practices)
* [8 Principles of Better Unit Testing](https://esj.com/articles/2012/09/24/better-unit-testing.aspx)
* [You Still Don’t Know How to Do Unit Testing (and Your Secret is Safe with Me)](https://stackify.com/unit-testing-basics-best-practices/)

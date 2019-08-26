---
layout: single-card
title: Mutation testing
image: /craft-challenges/assets/images/dev/mutation-testing.png
category: dev
description: Mutation testing is used to design new software tests and evaluate the quality of existing software tests. 
---

## What ?
Mutation testing is used to **design new software tests and evaluate the quality of existing software tests**.  
Mutation testing involves modifying a program in small ways.  

![Code kata]({{ site.baseurl }}/assets/images/mutation-testing1.png)  

Each mutated version is called a mutant and tests detect and reject mutants by causing the behavior of the original version to differ from the mutant.  
This is called killing the mutant. 
Test suites are measured by the percentage of mutants that they kill. New tests can be designed to kill additional mutants. Mutants are based on well-defined mutation operators that either mimic typical programming errors (such as using the wrong operator or variable name) or force the creation of valuable tests (such as dividing each expression by zero). 

![Code kata]({{ site.baseurl }}/assets/images/mutation-testing2.png)  

### Mutant ?
![Code kata]({{ site.baseurl }}/assets/images/mutation-testing3.png)  

## Why ?
How can measure the quality of our test do it ?
* Use code coverage ?
* Use your intuition ?

> Think about it : *"you could have a code base with 100% of code coverage without any assertions..."*
A good answer is **mutation testing**.

The purpose is to help the tester develop effective tests or locate weaknesses in the test data used for the program or in sections of the code that are seldom or never accessed during execution.

![Code kata]({{ site.baseurl }}/assets/images/mutation-testing4.png)  

## How ?
* Experiment [pitest](http://pitest.org/) tool on your current code base
    * Inspect the tool
    * Check if it can help you in your day to day

## Resources
* [pitest](http://pitest.org/)
* [Tests Coverage is Dead — Long Live Mutation Testing](https://medium.com/appsflyer/tests-coverage-is-dead-long-live-mutation-testing-7fd61020330e)
* [Mutation Testing, un pas de plus vers la perfection](https://blog.octo.com/mutation-testing-un-pas-de-plus-vers-la-perfection/)

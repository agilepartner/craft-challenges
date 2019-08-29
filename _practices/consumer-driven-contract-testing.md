---
layout: single-card
title: Consumer-driven contract testing
image: /craft-challenges/assets/images/practices/cdc.png
category: practices
description: In a micro-services world, testing the successful integration between services is critical for ensuring that the services won’t fail in production just because they’re not speaking the same language.
---

## What ?
If we take a look at the definition of an integration test : 
“An integration test is a test between an API provider and an API consumer that asserts that the provider returns expected responses for a set of pre-defined requests by the consumer. **The set of pre-defined requests and expected responses is called a contract.**”

This is the main focus of the approach : **CONTRACTS**.  

The whole idea behind CDC is to involve consumers of the future API in the creation of the API itself. API changes will be driven by consumers.

### Glossary :
* Producer : Service that exposes an API.
* Consumer : Service that consumes the API of the producer.
* Contract : Agreement between producer and consumer on how the API will look like.
* Consumer Driven Contracts : Approach where the consumer drives the changes of the API of the producer.

![CDC]({{ site.baseurl }}/assets/images/cdc1.png)

## Why ?
In a micro-services world, testing the successful integration between services is critical for ensuring that the services won’t fail in production just because they’re not speaking the same language.

CDC is a solution to this.

## How ?
* Define API contract on the consumer side.
> Write Unit tests that define clearly what are the interactions and behaviors expected from the provider.
* Enforce the contract on the service provider side.
> Unit tests on the provider side ensure that the provider implementation respect the expectations (contract) defined by the consumer.

To do it you can use a tool like pact :
* Start by following the tutorial defined here : [How can we implement a new service with Pact ?](https://medium.com/@yoan.thirion/consumer-driven-contract-testing-made-simple-with-pact-2-3-3cd4f8145978)

![CDC]({{ site.baseurl }}/assets/images/cdc2.png)

## Resources
* [Our serie of articles on CDC](https://medium.com/@yoan.thirion/consumer-driven-contract-tests-for-your-micro-services-1030ead57db3)
* [7 reasons for consumer driven contracts](https://reflectoring.io/7-reasons-for-consumer-driven-contracts/)
* [Spring Cloud Contract for Spring](https://ordina-jworks.github.io/spring/2018/04/28/Spring-Cloud-Contract-meet-Pact.html)
* [Consumer driven contract testing using pact](https://fr.slideshare.net/vodqanite/vodqapune-2018-consumer-driven-contract-testing-using-pact-91407773)
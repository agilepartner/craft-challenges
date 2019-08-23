---
layout: single-card
title: Tech radar
image: /craft-challenges/assets/images/challenges/tech-radar.png
category: challenges
description: The tech radar is an online publication created by Thoughtworks Technology Advisory Board, a diverse group of senior technology leaders from all over the ThoughtWorks’ world.
---

## What ?
The tech radar is an online publication created by Thoughtworks Technology Advisory Board, a diverse group of senior technology leaders from all over the ThoughtWorks’ world.  
They meet regularly to discuss the technology strategy for ThoughtWorks and the **technology trends that impact our industry**.
Technology and business move fast, so they release a new edition of the Radar every six months.

Find details [here](https://info.thoughtworks.com/technology-radar-subscription.html).  

## Why ?
> We love to learn a lot of things and we want to be up to date, but unfortunately our cognitive resources are not infinite. That's why we need to organize our technology watch.
Creating your own radar is a good way to do so.

You can use it for many purposes :
* Organize your technology watch
* Align people on the usage of certain technologies inside your company
  * Know what is used by whom at the moment
  * Manage your technical debts (usage of VB for example)
  * Prepare the technology future of the company
  * Help to decide which technology shoud be tested in the next few weeks/months

## How ?
* Organize a workshop about structuring your technology watch
* Let people list :
  * Languages & frameworks
  * Tools
  * Platforms
  * Techniques  

The ones they are `using at the moment and the ones they would like to use in the future`.

![List tech]({{ site.baseurl }}/assets/images/tech-radar1.png)  

* Sort them :
  * Adopt : We have capacity to use these solutions, they have already been deployed in production. First choices to start a new project.
  * Can Use : Pertinence of those solutions have been demonstrated. You can use it on your project but you need to provide a reason to not use the default choice.
  * Assess : These solutions may bring values. It is necessary to assess and test them in our environment to confirm or not this vision.
  * Deprecated : For various reasons, these solutions are no longer the first choices or are not recommended (anymore).

![Sort tech]({{ site.baseurl }}/assets/images/tech-radar2.png)  

* Create the online knowkedge base with the tech radar layout by using our home made open source jekyll website. by following those instructions :
  * Clone or Fork this [repository](https://github.com/agilepartner/tech-radar)
  * Install tooling for Jekyll : [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)
  * Run it locally :
  ```
    bundle exec jekyll serve
  ```
  * Follow the instructions defined here to add content : [instructions](https://github.com/agilepartner/tech-radar)

## Resources
* [Build your tech-radar with Jekyll](https://github.com/agilepartner/tech-radar)
* [Github - Build your own tech radar](https://www.thoughtworks.com/radar/how-to-byor)
* [Latest Thoughtworks technology radar](https://www.thoughtworks.com/radar)
* [Atlassian tech radar plugin](https://marketplace.atlassian.com/plugins/de.iteconomics.confluence.techradar/server/overview)

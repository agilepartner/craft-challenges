---
layout: single-card
title: Source control
image: /assets/images/practices/source-control.png
category: practices
---


## What ?
Version Control System (VCS), also known as Source Control Management (SCM), is a way to manage and document changes developers make to software code.  
The SCM methodology stores IT resources, gives access to all versions of the software as long as these states are saved and offers a comparison between all different versions, making development more efficient and more agile.

## Why ?
Version control systems allow you to :
* Compare files
* Identify differences
* Merge the changes if needed prior to committing any code
* Keep track of application builds by being able to identify which version is currently in development, QA, and production

It is a must have in order to be able to work on the same code base with several people.

![Source control]({{ site.baseurl }}/assets/images/source-control1.jpg)  

## How ?

### If you can submit pull requests in your SCM :
* Make at least 1 pull request / day
* Do it during the next 4 days at least

> Pull requests will allow you to do peer reviews in your team.

#### What is a pull request ?
Pull requests let you tell others about changes you've pushed to a git repository.  
Once a pull request is opened, you can **discuss and review the potential changes** with collaborators and add follow-up commits before the changes are merged into the repository.  
Create a pull request to propose and collaborate on changes to a repository.  
These changes are proposed in a branch, which ensures that the master branch only contains finished and approved work.

![Source control]({{ site.baseurl }}/assets/images/source-control2.jpg)  

### If you can not :
* Read the documentation of your current SCM
    * SVN
    * Git
    * CVS
    * Whatever
* Try a functionality you do not use in your daily work

## Resources
* [The 10 commandments of good source control management](https://www.troyhunt.com/10-commandments-of-good-source-control/)
* [Version control best practices](https://www.git-tower.com/blog/version-control-best-practices/)
* [A Review of Software Version Control: Systems, Benefits, and Why it Matters](https://www.seguetech.com/a-review-of-software-version-control-systems-benefits-and-why-it-matters/)
* [How to make a pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request)
* [Deployment by pull requests](https://www.madetech.com/blog/deployment-by-pull-requests)

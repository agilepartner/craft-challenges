# Continuous build
![Continuous build](images/continuous-build.png)  

In order to understand what is built by other teams in your company, **fix the next broken continuous build** of another team.  
Continuous build could have been broken by :
* A compilation issue
* Failed test(s)

## What is Continuous integration
Software development is done in teams.  
We develop in feature branches and isolate changes while they are in development.   
Then, we merge branches into master (Git usage is assumed). After every merge, we test the entire product, executing all available unit and integration tests.  
This is what is called continuous integration, abbreviated as CI.
Sometimes, some tests fail. When this happens, we say that our “build is broken”.

One rule needs to be followed when you continuously integrate :  
> ### If anything fails, stop the line!

![Continuous build](images/continuous-build1.png)  

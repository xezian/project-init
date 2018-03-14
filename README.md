# Project: SHFTR

### What Is The Problem?

There are often questions bicyclist ask themselves that fall into a chasm without seeable solutions - how do I get a public safety issue solved? Let’s say you are bicycling home from work as you do every evening and come across that one particular intersection that is incredibly dangerous to navigate or that stretch of road that is so poorly lit that you encounter several seemingly invisible potholes, which harbor the potential to hospitalize everyone who passes. Who will listen to our cries for improved road safety? Which city agency will prioritize the potholes, broken street lamps or dangerous intersections that desperately need attention? Does one letter, email or phone call amass the momentum required to redirect the resources needed to resolve these issues and more importantly does anyone care? SHFTR offers a new way to answer these questions.

### SHFTR Is The Solution!

SHFTR is a community driven application that provides a platform for bicyclist to create projects that give weight to problems they encounter daily. After signing up with SHFTR a user can locate that pothole, poorly lit street or dangerous intersection on a map and dynamically add a category icon and description of the issue. Once published other users can view the proposed project, comment and ultimately decide the value of the project by voting it up or down. Once a project has amassed enough momentum the community driven data collected by SHFTR will be visible to all and available to the city, town, council, representative or whomever needs to see it in order to affect change.


### Link to deployed version:

[DEPLOYED VERSION](https://serene-castle-95327.herokuapp.com/)

### Steps to run locally:

1. clone repo `git clone git@github.com:xezian/project-init.git`
2. navigate to the root directory of the cloned project `/project-init`
3. type `npm install`
4. if you haven't already, install the npm mysql package globally `npm install mysql -g`
5. login to mysql command line `mysql -u root -p (your password for localhost)`
6. exit the command line `exit` Bye
7. on the mysql command line, run the schema `\. db/schema.sql`
8. run the application in dev mode (locally) `npm run dev`

# SHFTR Application Architecture

![screen shot 2018-03-14 at 11 04 16 am](https://user-images.githubusercontent.com/30601823/37422037-c60581de-2777-11e8-8056-787c9ec92a8e.png)

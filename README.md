# Plans Dashboard
A dashboard to get the sample plans (Data,Voice,Combo) and filter them based on several criterias like OfferID,Service,Type of customers,Duration,...


# Features
* Filter plans by offerID, Service, Type, Duration, and other criteria
* View detailed information about selected plans
* Export data as a CSV file for offline analysis
* Login page for authorization and access to reference tables
* Responsive design for use on desktop and mobile devices

# Getting Started
To get started with this project, follow these steps:

* Clone the repository to your local machine using git clone https://github.com/Elhamdorudian/dashboard-plans.git.

## Frontend:
> `1` Navigate to the project _frontend_ project directory using cd myFrontend.
> `2` Install the dependencies using _npm install_.
> `3` The _port_ number is 3000
> `4` Start the development server using npm start.

## Backend
> `1` Navigate to the project _backend_ directory using cd myBackend.
> `2` Install the dependencies using _npm install_.
> `3` The _port_ number to run the server on is 8000
> `4` Start the node.js backend using _nodemon app_

## MongoDB
> `1` For the sample data, in myBackend, there is a _mydb_ file which contains the plans and also sample valid users. You can import the  files in your database
> `2` Name the db "referencetable", a collection named "plans" and another one named "users" 
> `3` you need to change the *uri* variable in db.js base on your mongobd username and password


* Open your browser and visit http://localhost:3000/login to view the app.
Note: Make sure you have Node.js installed on your machine. You may also need to create a MongoDB database and user.

# Built With
* React
* MUI
* Node.js
* MongoDB

## Demo
![Filters](https://github.com/Elhamdorudian/dashboard-plans/blob/master/myFrontend/src/assets/images/filters.png)
![Filtered Plans](https://github.com/Elhamdorudian/dashboard-plans/blob/master/myFrontend/src/assets/images/filteredPlans.png)
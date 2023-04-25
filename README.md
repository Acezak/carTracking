# Car tracking app

##Description

I present the Car tracking web app using React framework for the development of an Admin environment tha allows create, modify, eliminate and visualize all the information about vehicles and users registered in the plataform.

First, in the authentication view you can introduce an email and password for log in page, the information i treated with firebase authentication utilities and only allows log in when the user have and admin type.

For the map is use Leaflet library that gives capacity of showing an interactive map with tags with the vehicle´s plate and user's Id in case of the existence; with the use of Firebase firestore, all the data is real-time updated.

In the panel section you can see the information about all vehicles and users registered having the options of create, modify or eliminate the items, except the admin@admin account to prevent the page blocking.

The information is manipulated with firestore utilities.
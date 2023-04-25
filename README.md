# Car tracking app

##Description

I present the Car tracking web application using the React framework for the development of an Admin environment that allows to create, modify, delete and view all the information about vehicles and users registered on the platform.

Firstly, in the authentication view, an email and password are entered to access the page, the information is processed with the firebase authentication utilities and only allows access when the user has the admin type.

For the map the Leaflet library is used which gives the ability to display an interactive map with labels with the vehicle number plate and the user ID if it exists; with the use of Firebase firestore all the data is updated in real time.

In the dashboard section you can see the information of all vehicles and registered users having the options to create, modify or delete items, except for the admin@admin account to avoid blocking the page.

The information is manipulated with the firestore utilities.

The hosting URL is: https://cartrack-da6ca.web.app/

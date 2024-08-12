# Install Node.js and npm.Ensure you have Node.js and npm inatalled on your mach

**Objective:
Create a web application that displays a vehicle moving on a map using either Google Maps or an alternative mapping library. The application should show the vehicle's current location and its path in real-time.**

### Frontend:

- Use Google Maps or an alternative mapping library (e.g., Leaflet).
- Display a vehicle icon on the map.
- Show the vehicle's movement in real-time, updating every few seconds.
- Draw the route the vehicle is taking on the map.

Requirements:
Frontend:
Use Google Maps or an alternative mapping library (e.g., Leaflet).
Display a vehicle icon on the map.
Show the vehicle's movement in real-time, updating every few seconds.
Draw the route the vehicle is taking on the map.
Backend:
Provide an API endpoint that supplies the vehicle's current location and route data.
Implement a simple server using Node.js/Express, Django, or another backend framework.

Dummy Data:
Create a JSON file with dummy location data (latitude and longitude) that simulates the vehicle's movement along a route.
Example of dummy data format:
json
[
  {"latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z"},
  {"latitude": 17.385045, "longitude": 78.486672, "timestamp": "2024-07-20T10:00:05Z"},
  ...
]





**Bckend**
. Provide an API endpoint that supplies the vehicle's current location and route data.
.Implement a simple server using Node.js/Express.

**Initalize a Node.js Project: Create a new directory for your project and run npm init to initialize a new Node.js project.**

**Install Required Packages:Install necessary packages:npm install express,npm install axios,npm install google-maps-react**

**Frontend Development**

. Integrate Google Maps:

CREATE A COMPONENT TO DISPLAY THE MAP AND VEHICLE.

Setup React APPLICATIION:
Use create-react-app to set up a new React project.

npx create-react-app vehicle-movement
cd vehicle-movement
npm install google-maps-react axios

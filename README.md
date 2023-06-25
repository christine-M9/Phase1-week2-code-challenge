# Phase1-week2-code-challenge

  ## Title:

Implementing a mini web app to practice on array iteration, DOM, Events, and Server Communications.





  ## Description:

   1.Making a GET request to the following endpoint to retrieve the character data.
 GET /characters

Example Response:

   {

     "id": 1,
     "name": "Mr. Cute",
     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
     "votes": 0

   },

   {
     "id": 2,
     "name": "Mx. Monkey",
     "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
     "votes": 0   }, ….

    2. Clicking on an animal’s name to see its details i.e image and number of votes. Note, you should only be displaying the details of one animal at a time using the character information from your first request to get the character's details 
GET /characters/:id

Example Response: 
{

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },
   3.When viewing an animal’s details, you can add the number of votes for each animal. This number of votes will be displayed together with the animal’s details.


  ## Project set-up:


In my project directory, i created a db.json file and used this dataLinks to an external site. for my server DB.
Later run this command to get the backend started: json-server --watch db.json
Testing of my server by visiting this route in the browser: http://localhost:3000/characters
Creation of the HTML file with the script in the body to enable the user run the JS page on chrome.
Inside the html there is section created with an id of "characters".


  ## Technology used:

  HTML
  JAVASCRIPT
  JSON


  ## Author:

This project's author is;
 Christine K Juma.
https://github.com/christine-M9


  ## License:

This project is licensed by MIT
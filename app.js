const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hey World"));

app.get("/tasks", (req, res) => res.json({
    "tasks": [
      {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      }
    ]
  }));      
  
  


  

app.listen(port, () => console.log(`Listening on ${port}`));


const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/parent", (req, res) => {
  const dataFilePath = "../Database/announcements.json";

  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the data file:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseError) {
        console.error("Error parsing JSON data:", parseError);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  });
});

router.post("/announcements", (req, res) => {
  // console.log(req.body);
  const dataFilePath = "../Database/announcements.json";

  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the data file:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      try {
        var jsonData = JSON.parse(data);
        jsonData["announcements"].push(req.body);
        newData = JSON.stringify(jsonData);
        fs.writeFile(dataFilePath, newData, (err) => {
          // Error checking
          if (err) throw err;
          console.log("New data added");
        });
      } catch (parseError) {
        console.error("Error parsing JSON data:", parseError);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  });

  // var data = fs.readFileSync(dataFilePath);
  // var myObject = JSON.parse(data);
  // console.log(myObject);
  // myObject["announcements"].push()
  // fs.readFile(dataFilePath, "utf8", function readFileCallback(err, data) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     obj = JSON.parse(data); //now it an object
  //     // console.log(obj);
  //     obj.announcements.push(req.body); //add some data
  //     // console.log(obj);
  //     json = JSON.stringify(obj); //convert it back to json
  //     fs.writeFile(dataFilePath, json, "utf8", (err) => {
  //       if (err) console.log(err);
  //       else {
  //         console.log("File written successfully\n");
  //         console.log("The written has the following contents:");
  //       }
  //     }); // write it back
  //   }
  // });
});

module.exports = router;

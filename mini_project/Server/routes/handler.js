const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/eng", (req, res) => {
  const dataFilePath = "../Database/eng.json";

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

router.post("/scores", (req, res) => {
  const dataFilePath = "../Database/scores.json";
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the data file:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      try {
        var jsonData = JSON.parse(data);
        console.log(req.body);
        const { uid, id, ...rest } = req.body;
        if (jsonData.hasOwnProperty(uid)) {
          jsonData = jsonData[uid];
          console.log(jsonData);
          jsonData = {
            ...jsonData,
            [id]: [],
          };
          jsonData[id].push(rest);
          jsonData = {
            [uid]: jsonData,
          };
        } else {
          jsonData = {
            ...jsonData,
            [uid]: { [id]: [] },
          };
          console.log(jsonData);
          jsonData[uid][id].push(rest);
        }
        newData = JSON.stringify(jsonData);
        fs.writeFile(dataFilePath, newData, (err) => {
          if (err) throw err;
          console.log("New data added");
        });
      } catch (parseError) {
        console.error("Error parsing JSON data:", parseError);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  });
});

router.get("/getscores/:id", (req, res) => {
  const dataFilePath = "../Database/scores.json";
  const id = req.params.id;
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the data file:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData[id]);
      } catch (parseError) {
        console.error("Error parsing JSON data:", parseError);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  });
});
module.exports = router;

const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/eng', (req, res) => {
    const dataFilePath = '../Database/eng.json'; 
  
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the data file:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        try {
          const jsonData = JSON.parse(data);
          res.json(jsonData);
        } catch (parseError) {
          console.error('Error parsing JSON data:', parseError);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
    });
  });

module.exports = router;
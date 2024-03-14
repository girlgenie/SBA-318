const express = require('express'); 
const app = express(); 
const port = 3000; 

const destinations = require('./data/destinations')

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to my server!');
  });
  
//GET
// GET ALL DESTINATIONS(MAKE AN API ROUTE)
app.get('/api/destinations', (req,res)=> { 
  res.json(destinations)
})

// POST

// PATCH/PUT (IF I CAN FIGURE THIS OUT)

// DELETE






  // LISTENING PORT 
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
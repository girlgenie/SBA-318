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
app.get('/destinations', (req,res)=> { 
  res.json(destinations)
})

// specify a particular destination
app.get('/destinations/:destination', (req,res)=> {
  destinations.forEach((item)=> { 
    if(item.destination === req.params.destination){ 
      console.log(item)
      res.send(item)
      return;
    }
  })
  console.log(req.params)
  res.send('Error')
  
})
// specify a particular description


// app.get('/destinations/:id', (req,res)=> {
//   res.send(req.params)
// })

// POST
app.post('/', (req,res)=> { 
  res.send('Got a POST request')
})

// PATCH/PUT (IF I CAN FIGURE THIS OUT)
app.put('/', (req,res)=> { 
  res.send('Got a PUT request at /')
})

// DELETE
app.delete('/', (req, res) => {
  res.send('Got a DELETE request at /')
})






  // LISTENING PORT 
  app.listen(3000, ()=> { 
    console.log('server running on port 3000')
  })
  
  // app.listen(port, () => {
  //   console.log(`Server is running on port ${port}`);
  // });
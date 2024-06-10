// server.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.put('/event/update/:eventId', (req, res) => {
  const eventId = req.params.eventId;
  console.log(`Updating event with ID: ${eventId}`);
  res.sendStatus(200); // Respond with success status
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

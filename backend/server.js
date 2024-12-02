import axios from 'axios';
import bodyParser from 'body-parser'; // Import bodyParser
import cors from 'cors';
import express from 'express';
const app = express();

const TEXT_RAZOR_API_KEY = 'e193c5ebe86f9b3557ba03a55b9e32807a0ac01ea973be8141dda34d';
const TEXT_RAZOR_API_URL = 'https://api.textrazor.com/';

app.use(cors());  // Enable CORS for all origins
app.use(bodyParser.urlencoded({ extended: true })); // Parse x-www-form-urlencoded data
app.use(bodyParser.json()); // Parse JSON data

app.post('/textrazor', async (req, res) => {
  try {
    const response = await axios.post(TEXT_RAZOR_API_URL, `extractors=entities,keywords&text=${encodeURIComponent(req.body.text)}`, {
      headers: {
        'x-textrazor-key': TEXT_RAZOR_API_KEY,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    res.json(response.data);  // Send back the TextRazor response
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to extract keywords' });
  }
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});

const express = require("express");
const dotenv = require('dotenv');
const { assistantBot } = require('./controllers/assistant_bot.controller');

dotenv.config({ path: './.env' });

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
    console.warn(`Server connected and running on port ${PORT}`);
    assistantBot();
});

const bodyParser = require('body-parser');
const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const channelRoutes = require("./routes/channelRoutes");
const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());

app.use(express.json());

app.use("/dth/auth/", authRoutes);
app.use("/dth/channel/", channelRoutes);
// app.use("/user", userRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));

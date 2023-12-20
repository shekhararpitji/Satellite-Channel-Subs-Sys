const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const roleRoutes = require("./routes/roleRoutes");
const channelRoutes = require("./routes/channelRoutes");
const packRoutes = require("./routes/packRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const port = process.env.PORT || 8080;
const app = express();
require("./utils/schedule");
app.use(bodyParser.json());

app.use(express.json());

app.use("/dth/role", roleRoutes);
app.use("/dth/channel", channelRoutes);
app.use("/dth/package", packRoutes);
app.use("/dth/subscribe", subscriptionRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));

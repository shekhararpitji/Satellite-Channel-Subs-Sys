const bodyParser = require("body-parser");
const express = require("express");
const cors= require('cors');
require("dotenv").config();
const roleRoutes = require("./routes/roleRoutes");
const channelRoutes = require("./routes/channelRoutes");
const packRoutes = require("./routes/packRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const port = process.env.PORT || 8080;
const app = express();
require("./utils/schedule");

const postmanToOpenApi= require('postman-to-openapi');
const path = require("path");
const YAML = require('yamljs');
const swaggerUi =require('swagger-ui-express');

app.use(bodyParser.json());

app.use(express.json());
app.use(cors());
app.use("/600/dth/role", roleRoutes);
app.use("/600/dth/channel", channelRoutes);
app.use("/600/dth/package", packRoutes);
app.use("/600/dth/subscribe", subscriptionRoutes);

postmanToOpenApi(
    "src/postman/DTH.json",
    path.join("src/postman/swagger.yml"),
    {defaultTags:"General"}
).then((response)=>{
    let result=YAML.load("src/postman/swagger.yml");
    result.servers[0].url="/";
    app.use("/swagger",swaggerUi.serve, swaggerUi.setup(result));
})

app.listen(port, () => console.log(`Server is running on port ${port}`));

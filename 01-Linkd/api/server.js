const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

//const connection = require("./src/models/db");

//const mc = mysql.createConnection(
//"Data Source=DESKTOP-BGE3SSQSQLEXPRESS;Initial Catalog=Linkd;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;//ApplicationIntent=ReadWrite;MultiSubnetFailover=False"
//);

app.listen(port, () => {
	console.log(`🚀 Server started on port ${port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./src/routes/appRoutes');
routes(app);

const mysql = require("mysql");

//var connection = mysql.createConnection(
//"Data Source=DESKTOP-BGE3SSQSQLEXPRESS;Initial Catalog=Linkd;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"
//);

var connection = mysql.createConnection({
	server: "localhost",
	driver: "msnodesqlv8",
	port: 1433,
	database: "mydb",
	options: {
		trustedConnection: true
	}
});

connection.connect(err => {
	if (err) throw err;
});

module.exports = connection;

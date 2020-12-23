const dotenv = require('dotenv');
dotenv.config();
module.exports =  {
	port : process.env.PORT, 
	viewEngiene : process.env.VIEWENGIENE,
	mongoDbConnectURL :  process.env.MongodbConnectURL
}
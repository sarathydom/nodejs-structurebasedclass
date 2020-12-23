class Db {
	constructor(config){
		this.mongoose = config.mongoose;
		this.mongoDbConnectURL = config.mongoDbConnectURL;
	}
	connectMongoose(){
		this.mongoose.connect(this.mongoDbConnectURL,{useUnifiedTopology: true,useNewUrlParser: true});
	}	
}
module.exports = Db;
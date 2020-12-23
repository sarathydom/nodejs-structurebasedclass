const dbClass = require('./db.class');
class Loader extends dbClass {
	constructor({app,port,bodyParser,...config}){
		super(config);
		this.app = app;
		this.port = port;
		this.bodyParser = bodyParser;
		this.viewEngiene = config.viewEngiene;
		this.session = config.session;
		this.staticPath = config.staticPath
		this.express = config.express;
		this.route = config.routes
	}
	loadRoutes(){
		this.app.use('/',this.route(this.express.Router()));
	}
	setViewEngiene(){
		this.app.set('view engine',this.viewEngiene);
	}
	init(){
		this.app.use(this.bodyParser.json());
		this.app.use(this.bodyParser.urlencoded({extended:true}));
		this.app.use(this.session({
			secret : "myswcret",
			resave:false,
			saveUninitialized : true,
			cookie : {}
		}))
		this.app.use(this.express.static(this.staticPath))
		this.setViewEngiene();

	}
	connectDatabase(){
		super.connectMongoose()
	}
	startServer(){
		this.app.listen(this.port)
	}
	stopServer(){
		process.exit(0)	
	}
}

module.exports = Loader;
const express = require("express");
const app = new express();
const {port,mongoDbConnectURL} = require("../config/index");
const LoaderClass = require("../class/loader.class");
const bodyParser = require('body-parser');
const session = require("express-session");
const path = require('path');
const staticPath = process.cwd() + '/public';
const routes = require("../routes/index");
const mongoose = require("mongoose")
const loaderConfig = {
	app,port,bodyParser,session,staticPath,express,routes,mongoose,mongoDbConnectURL
}
const loader = new LoaderClass(loaderConfig);
loader.init();
loader.connectDatabase();
loader.loadRoutes();
module.exports.loaderr = loader;


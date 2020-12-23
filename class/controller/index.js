class Index {
	constructor(req,res){
		this.req=req;
		this.res=res;
	}
	indexget(){
		console.log("this is a get route")
		this.res.send("supers")
	}
}

module.exports = Index
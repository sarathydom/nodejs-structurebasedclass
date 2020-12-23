const IndexClass = require("../class/controller/index")
module.exports = function(router){
	router.get("/",(req,res)=>{
		const ind = new IndexClass(req,res);
		ind.indexget();

	})
	return router
}
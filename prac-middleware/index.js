const express = require("express")

const app = express();

function is_old_enough_middleware(req, res, next){
	const age = req.query.age
	if(age>=14){
		next()
	}else {
		res.status(411).json({
			msg: "Sorry you are not of age yet"
		})
	}
}

app.get("/ride1", is_old_enough_middleware, (req, res)=>{
	res.json({
			msg: "You have successfully booked ride1"
		})
})

app.get("/ride2", is_old_enough_middleware, (req, res)=>{
	res.json({
			msg: "You have successfully booked ride2"
		})
})

app.listen(3000, ()=>{
	console.log("http://localhost:3000")
})


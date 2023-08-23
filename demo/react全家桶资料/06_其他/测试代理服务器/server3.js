const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('有人请求服务器3了');
	next()
})

app.get('/users',(request,response)=>{
	const cars = [
		{id:'001',name:'张三',age:199},
		{id:'002',name:'李四',age:109},
		{id:'003',name:'王五',age:120},
	]
	response.send(cars)
})

app.listen(5000,(err)=>{
	if(!err) console.log('服务器2启动成功了,请求用户列表信息地址为：http://localhost:5000/users');
})

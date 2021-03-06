// 1.结合fs发送文件中的数据
// 2.Content-type
// http://tool.oschina.net/commons
// 不同的资源对应的Content-Type是不一样的
// 图片不需要指定编码
// 一般只为字符数据才指定编码

var http=require("http")
var fs=require("fs")

var server=http.createServer()

server.on("request",function(req,res){
var	url=req.url

if(url==="/"){
fs.readFile("./resource/index.html",function(err,data){
	if(err){
		res.setHeader("Content-Type","text/plain;charset=utf-8")
		res.end("文件读取失败，请稍后重试！")
	}else{
	// data默认是二进制数据，可通过.toString转为字符串
	// res.end()支持两种数据，一种是二进制，一种是字符串
	res.setHeader("Content-Type","text/html;charset=utf-8")
	res.end(data)
}

})
}else if(url==="/img"){
	fs.readFile("./resource/34b.png",function(err,data){
	if(err){
		res.setHeader("Content-Type","text/plain;charset=utf-8")
		res.end("文件读取失败，请稍后重试！")
	}else{

	res.setHeader("Content-Type","imag/jpeg")
	res.end(data)
   }

})
}
})

server.listen(3000,function(){
	console.log("server is sunning.....");
})
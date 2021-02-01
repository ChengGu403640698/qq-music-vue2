const  express = require('express')
var proxy = require('express-http-proxy'); 
const app = express()
const port = 1022
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next();});
app.use(express.static('dist'));
app.get('/',(req,res)=>{
    console.log("传输网页");
    let fullpath = path.join(__dirname,'dist','index.html');
    res.sendFile(fullpath);
})
app.get('/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', proxy('https://c.y.qq.com', {
    filter: function(req, res) {
       return req.method == 'GET';
    }
  }));
app.get('/v8/fcg-bin/fcg_v8_toplist_opt.fcg',proxy('https://c.y.qq.com', {
    filter: function(req, res) {
       return req.method == 'GET';
    }
  }));
app.listen(port,()=>{
    console.log(`the server is listening port --${port}`);
})



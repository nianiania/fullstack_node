//==========configuration====



var exppress = require('express')
var app = exppress()
var path = require('path')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());



//=========routing=========


app.route('/')
    .get(function(req, res) {
    	res.sendFile(path.join(__dirname +'/view/home.html'))
      
    })
    .post(function(req, res) {
       var angka_1 = req.body.angka1
       var angka_2 = req.body.angka2
    	console.log("angka 1: "+ angka_1 + ", angka2:" + angka_2)
    	res.send("angka 1: "+ angka_1 + ", angka2:" + angka_2)


    })



//=========websrver==========

app.listen(4000, function() {
    console.log('ini contoh web server sederhana dengan node js')
})

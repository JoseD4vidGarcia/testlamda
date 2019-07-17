var express = require('express');
var app = express();
//const bodyParser = require('body-parser');
app.use(express.json()) 
//app.use(express.bodyParser());

/*
http 
get 
post
delete
put
patch
*/
/*
soap 
<xml>
    <title>hola mundo</title>
    <content>contenido</content>
</xml>

rest 
json = javascript object notation
{
    "title":"hola mundo",
    "content":"contenido",
    "data":{
        "title":"hello",
        "name":"foco",
        "items":[
            {
                "name":"jose",
                "lastName":"garcia"
            },
            {
                "name":"david",
                "lastName":"garcia"
            }
        ],
        "state":true,
        "cantidad":50
    }
}
*/
function indexi(req, res) {
    //req = request
    //res = response 
    console.log(req.query.id);
    const response ={
        "title":"hola mundo "+req.query.name,
        "content":"contenido",
        "data":{
            "title":"hello",
            "name":"foco",
            "items":[
                {
                    "name":"jose",
                    "lastName":"garcia"
                },
                {
                    "name":"david",
                    "lastName":"garcia"
                }
            ],
            "state":true,
            "cantidad":50
        }
    }
    
  res.send(response);
}
app.get('/', indexi);
app.get('/hellox', indexi);


app.post('/dato', function (req, res) {
    console.log('información: ',req.body)
    let name='';
    
    try {
        name = req.body.name;
        const array = req.body.skills;
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(element);
        }
    } catch (error) {
        name = 'No se envió la información';
        console.log(error);
    }
    res.json(req.body.skills);
    //res.send('Hello World! '+ name);
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
var express = require('express');
var app = express();

var bodyP = require('body-parser');
var Enc = bodyP.json();

var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017"
var dbname = 'Pizza';

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'Origin-X-Requested-With,Content-Type,Accept');
    next();
});

app.get('/gets', function(req, res) {
    mongoClient.connect(url, function(err, client) {
        if (err) {
            console.log('connection error');
        } else {
            console.log('connected');
            var db = client.db(dbname);
            var collection = db.collection('PizzaList');
            collection.find({}).toArray(function(err, result) {
                if (err) {
                    res.json('error while fetching');
                } else {
                    res.json(result);
                }

            })
        }
        client.close();
    })

});

app.get('/getss', function(req, res) {
    mongoClient.connect(url, function(err, client) {
        if (err) {
            console.log('connection error');
        } else {
            console.log('connected');
            var db = client.db(dbname);
            var collection = db.collection('ingredients');
            collection.find({}).toArray(function(err, result) {
                if (err) {
                    res.json('error while fetching');
                } else {
                    res.json(result);
                }

            })
        }
        client.close();
    })

});


app.post('/posts', Enc, function(req, res) {
    mongoClient.connect(url, function(err, client) {
        if (err) {
            console.log('connection problem')
        } else {
            console.log('connected');
            console.log('abchdsfj');
            console.log(req.body);
            var db = client.db(dbname);
            var collection = db.collection('cart');

            collection.insert(req.body);
            collection.find({}).toArray(function(err, result) {
                if (err) {
                    console.log('insert error');
                } else {
                    res.json(result);
                    console.log(result);
                }
            })
        }
        client.close();
    })
})

app.get('/cart', function(req, res) {
  mongoClient.connect(url, function(err, client) {
      if (err) {
          console.log('connection error');
      } else {
          console.log('connected');
          var db = client.db(dbname);
          var collection = db.collection('cart');
          collection.find({}).toArray(function(err, result) {
              if (err) {
                  res.json('error while fetching');
              } else {
                  res.json(result);
              }

          })
      }
      client.close();
  })

});




app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});

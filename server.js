var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/PracticeFusion/dist/PracticeFusion"));

//doctors
    doctors = [
        {
            firstName: 'Elizabeth',
            lastName: 'Blackwell',
            city: 'Bristol',
            state: null,
            country: 'United Kingdom',
            speciality: 'physician',
            review: 9,
        },
        {
            firstName: 'Edward',
            lastName: 'Jenner',
            city: 'Berkeley',
            state: null,
            country: 'United Kingdom',
            speciality: 'vaccination',
            review: 7,
        },
        {
            firstName: 'Louis',
            lastName: 'Appia',
            city: 'Frankfurt',
            state: null,
            country: 'Germany',
            speciality: 'military medicine',
            review: 8,
        },
    ]
//end doctors

//routes
    app.get('/allLocations', function (req, res) {
        console.log('getting locations in server')
        locations.find({},function(err, locations) {
            if(err){
                console.log("e0rr0r")
            }else{
                res.json({message:'The Locations', locations: locations})
            }
        })
    })

    app.post('/updatecoordinates', function(req, res) {
        // console.log("/updatecoordinates");
        // console.log(req.body);
        locations.findOne({_id: req.body._id}, function(err, location) {
            if (location != null) {
                location.Coordinates = req.body.coordinates;
                location.save(function(err) {
                    if (err) {
                        res.json({message:"Fail", data:err});
                    } else {
                        res.json({message:"Success", data:location});
                    }
                })
            } else {
                res.json({message:"Fail", data:{}});
            }
        });
    });

    app.post('/login', function(req, res) {
        User.findOne({username:req.body.username}, function(err, user) {
            if (user != null) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    req.session._id = user._id;
                    res.json({message:"Success", data:{username:user.username, _id:user._id}});
                } else {
                    res.json({message:"Fail", data:{"errors":{"username":{"message":"Invalid login attempt"}}}});
                }
            } else {
                res.json({message:"Fail", data:{"errors":{"username":{"message":"That username does not exist"}}}});
            }
        });
    });
// end routes

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./PracticeFusion/dist/PracticeFusion/index.html"));
    });

app.listen(8000, function () {
    console.log("listening on port 8000");
})
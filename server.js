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
            id: 0,
            firstName: 'Elizabeth',
            lastName: 'Blackwell',
            img_url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNDU1OTg3NzI2/elizabeth-blackwell-9214198-1-402.jpg',
            city: 'Bristol',
            state: null,
            country: 'United Kingdom',
            speciality: 'physician',
            review: 9,
        },
        {
            id: 1,
            firstName: 'Edward',
            lastName: 'Jenner',
            img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1FX3_C33WZXevVvZxAFFBMbjcNG6MA6SnhyrnW-HbnE0qDQ_',
            city: 'Berkeley',
            state: null,
            country: 'United Kingdom',
            speciality: 'vaccination',
            review: 7,
        },
        {
            id: 2,
            firstName: 'Louis',
            lastName: 'Appia',
            img_url: 'http://spartacus-educational.com/EUappia.jpg',
            city: 'Frankfurt',
            state: null,
            country: 'Germany',
            speciality: 'military medicine',
            review: 8,
        },
        {
            id: 3,
            firstName: 'Norman',
            lastName: 'Shumway',
            img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfefq023nfZMqXWricLWvKximPqrzgwE3tyrqpWFwth1dWxGqTLw',
            city: 'Kalamazoo',
            state: 'Missouri',
            country: 'United States of America',
            speciality: 'cardiac surgery',
            review: 6,
        },
        {
            id: 4,
            firstName: 'Charles',
            lastName: 'Drew',
            img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Portrait_of_Charles_Drew.jpg/220px-Portrait_of_Charles_Drew.jpg',
            city: 'Washington',
            state: 'District of Columbia',
            country: 'United States of America',
            speciality: 'physician',
            review: 6,
        },
        {
            id: 5,
            firstName: 'Frederick',
            lastName: 'Banting',
            img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGxMVZFcx99LXNKxx1j7am_CMAWEruXkpq3HfJZKkZtuFXTR00g',
            city: 'Alliston',
            state: 'New Tecumseth',
            country: 'Canada',
            speciality: 'physician',
            review: 7,
        },
        {
            id: 6,
            firstName: 'Virginia',
            lastName: 'Apgar',
            img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Virginia-Apgar-July-6-1959.jpg/220px-Virginia-Apgar-July-6-1959.jpg',
            city: 'Westfield',
            state: 'New Jersy',
            country: 'United States of America',
            speciality: 'anesthesiologist',
            review: 5,
        },
        {
            id: 7,
            firstName: 'Louis',
            lastName: 'Pasteur',
            img_url: 'https://www.biography.com/.image/t_share/MTE5NTU2MzE2MzM5NTM3NDE5/louis-pasteur-9434402-1-402.jpg',
            city: 'Dole',
            state: null,
            country: 'France',
            speciality: 'vaccination',
            review: 7,
        },
    ]
//end doctors

//routes
    app.get('/getAllDoctors', function (req, res) {
        console.log('getting doctors in server')
        if(doctors.length <= 0){
            res.json({message:'Error: no doctors'})
        }else{
            res.json({message:'The Doctors', doctors: doctors})
        }
    })
// end routes

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./PracticeFusion/dist/PracticeFusion/index.html"));
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})
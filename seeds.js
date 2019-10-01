var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Willong Khullen",
        image : "https://scontent.fhyd1-2.fna.fbcdn.net/v/t1.0-9/27540139_396447080820325_2870317707921492799_n.jpg?_nc_cat=106&_nc_oc=AQkx1vFcupHndx_h1m2ko6NDxRjM5MZf5BZFsrrx1lpAcADc8KDDXqlkWywYAypm88U&_nc_ht=scontent.fhyd1-2.fna&oh=1eccfdecf5f1b5db3e49e4802fa0de9b&oe=5DEB0F06",
        description : "love love love"
    },
    {
        name: "Willong",
        image : "https://scontent.fhyd1-2.fna.fbcdn.net/v/t1.0-9/40684980_528103270988038_8229102492403630080_n.jpg?_nc_cat=106&_nc_oc=AQn0R7YoDU9SHx6-yzd6e0mQ3oNpAKs6lKn0unW7cJtt9cDxCJjulIx7IXYjgYN8YYw&_nc_ht=scontent.fhyd1-2.fna&oh=def714a98f0f13c9276ead5cbaae910f&oe=5DE68150",
        description : "love love love "
    }
]

function seedDB() {

    //remove all campgrounds
    Campground.remove({}, function(err){
        if (err){
            console.log(err);
        }
            console.log("removed campgrounds");
    });

    //add campground 
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err)
            } else {
                console.log("Added campground");
                //Create comments
                Comment.create({
                    text: "Amazing Grace",
                    author :  "Hopson"
                }, function(err, comment){
                    if(err){
                        console.log(err);
                    } else {
                        campground.comments.push(comment);
                        campground.save();
                        console.log("CReated");
                    }
                });
            }
        });
    });
}

//exports the above function
module.exports = seedDB;

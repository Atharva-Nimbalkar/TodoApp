//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

var items=["Buy device","Buy mobile"];
app.set("view engine", "ejs");
app.get("/", function (req, res) {

    // instead of create to much html file we create template using ejs
    // let today = new Date();
    // let currentDay = today.getDay();
    // let day = "";
    // if(currentDay===6 || currentDay===0){
    // res.write("<h1>Yeahhh that's the weekend</h1>");
    // day="weekend";
    // res.sendFile(__dirname+"/weekend.html");
    // }
    // else{ 
    // res.write("<p>It is working day man</p>")
    // res.write("<h1>Boo!! that's not weekend</h1>");
    // res.send();
    // day="weekday"
    // res.sendFile(__dirname + "/weekday.html");
    // }
    // res.send("Hello");

    // m 04
    // ---------------------->>>
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "monday";
    //         break;
    //     case 2:
    //         day = "tuesday";
    //         break;
    //     case 3:
    //         day = "wednesday";
    //         break;
    //     case 4:
    //         day = "thursday";
    //         break;
    //     case 5:
    //         day = "friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    // }
    // res.render("list", { kindOfDay: day });

    // m 6
    var today=new Date();

    var options={
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    } ;

    var day=today.toLocaleDateString("en-IN",options);

    res.render("list",{
        kindOfDay: day,
        newListItems: items
    });
       
});

app.post("/",function(req,res){
    item=req.body.newItem//from web to server 
//    console.log(item);

    // res.send("list",{newListItem: item});

    items.push(item);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("Server Started on port 3000");
})
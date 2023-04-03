const Timeline = require("./timeline");
const $ = require("jquery");
import photo from "../Images/1.png";
let user ={
    name: "Serhii Ruban",
    messages: [
        "Webpack","Course work","Spring" 
    ]
}
let timeline = new Timeline(user);
timeline.setHeader();
timeline.setTimeline();
// timeline.setImage();
let image = document.createElement("img");
        image.src = photo;
        image.alt=user.name;
        $("body").append(image);
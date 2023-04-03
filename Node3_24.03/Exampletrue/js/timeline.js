const $ = require("jquery");
const _ = require("underscore");
import photo from "../Images/1.png";
function timeline(user){
    this.setHeader = function(){
        $("#timeline").text(`${user.name} timeline`);
    };
    this.setTimeline = function(){
        _.each(user.messages,msg=>{
            var html = `<li><div class="timeline-heading"><h4 class="timeline-title">${msg}</h4></div></li>`;
            $(".timeline-list").append(html);
        })
    };
    this.setImage = function(){
        let image = document.createElement("img");
        image.src = photo;
        image.alt=user.name;
        $("body").append(image);
    }
    
}
module.exports = timeline;   
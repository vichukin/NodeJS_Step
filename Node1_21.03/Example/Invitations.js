let hour = new Date().getHours();
module.exports.currentDate = hour;
module.exports.getMessage = function(name)
{
    if(hour<12)
        console.log(`Good morning, ${name}`);
    else if(hour<16)
        console.log(`Good day, ${name}`);
    else 
        console.log(`Good evening, ${name}`);
}
module.exports.name="Dmytro";
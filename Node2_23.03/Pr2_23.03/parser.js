let Parser = function(str)
{
    // str = str.split(" ");
    let dict={};
    str = str.split("");
    str.forEach(el => {
        if(el!=" "&&el!="\n"&&el!="\r")
        {
            if(dict[el]!=null)
                dict[el]++;
            else
                dict[el] = 1;
        }
       
    });
    return dict;
}
module.exports = Parser;
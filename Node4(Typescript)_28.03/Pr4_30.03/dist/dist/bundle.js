(()=>{"use strict";class e{constructor(e,t){this.Title=e,this.Price=t}}class t{constructor(e,t,c){this.Bigbucket=e,this.Toppings=t,this.Marshmallow=c}Calculate(){let e=0;for(var t of(this.Bigbucket?e+=25:e+=10,this.Marshmallow&&(e+=5),this.Toppings))e+=t.Price;return e}}var c=[new e("Chocolate",5),new e("Caramel",6),new e("Berries",10)];document.getElementById("smbbtn").onclick=e=>{if(e.preventDefault(),document.querySelectorAll("input.min1[type=checkbox]:checked").length){var l=document.querySelectorAll("input.min1:checked"),o=[];l.forEach((e=>{o.push(c[e.value])})),console.log(o);var r=document.querySelector("input[type=radio]:checked"),a=document.querySelector("#check4"),n=new t("true"==r.value,o,a.checked);console.log(n.Calculate()),alert(`For payment ${n.Calculate()} ₴`)}else alert("You must check at least one checkbox.")}})();
//# sourceMappingURL=bundle.js.map
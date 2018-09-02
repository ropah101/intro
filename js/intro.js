// image 2
var gal2 = document.getElementById("gal2");


gal2.addEventListener("mouseover",function(){
    this.setAttribute("src","images/gal2.2.png");
})

gal2.addEventListener("mouseout",function(){
    this.setAttribute("src","images/gal2.jpg");
})

// // image 1
var gal1 = document.getElementById("gal1");


gal1.addEventListener("mouseover",function(){
    this.setAttribute("src","images/gal1.1.jpg");
})

gal1.addEventListener("mouseout",function(){
    this.setAttribute("src","images/gal1.jpg");
})
// image 3
var gal3 = document.getElementById("gal3");


gal3.addEventListener("mouseover",function(){
    this.setAttribute("src","images/gal3.3.png");
})

gal3.addEventListener("mouseout",function(){
    this.setAttribute("src","images/gal3.png");
})

// image 4
gal4.addEventListener("mouseover",function(){
    this.setAttribute("src","images/gal4.4.jpg");
})

gal4.addEventListener("mouseout",function(){
    this.setAttribute("src","images/gal4.jpg");
})

// change back ground Color 

var colorsArray = ["grey", "rgb(10, 12, 39)"];
var item = document.getElementsByTagName("text")[0];
window.addEventListener("scroll", function() {
  var scrollSize = parseInt(document.body.scrollTop);
  if (scrollSize > 0.1) {
    var num = Math.floor(colorsArray.length * Math.random());
    item.style.background = colorsArray[num];
  }
});

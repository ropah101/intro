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
// change button color on click
var faces = document.getElementById('faces'); 
var currentColor = "white";
faces.addEventListener("dblclick",function(){

    
    if(currentColor === "white"){ 
        this.style.backgroundColor = "rgb(10, 12, 39)";
        currentColor = "rgb(10, 12, 39)";
    
        
     } else if(currentColor === "rgb(10, 12, 39)"){
        this.style.backgroundColor = "white";
        currentColor = "white";
        
     } 
})

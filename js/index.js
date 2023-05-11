// JavaScript for Carousel

// code for tooltip
// $(document).ready(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

// Placement of tooltip on bottom
//  var tipBottom = document.getElementsByClassName("carousel-item");
//  var tooltipBottom = new bootstrap.Tooltip(carousel-item, { placement : "bottom" });

// Mega Menu 
function changeImg(img) {
  document.getElementById("change_Image").src = img;
}

// Products code- when we click on image, same image goes to single product page 


// document.getElementById("product_image").onclick = changeImg1();

function changeImg1(){
  document.getElementById("product_image").src = document.getElementById("get_product_image").src;
  // document.getElementById("get_product_image").style.border = "14px solid red";

}  


// function show() {
//   var image1 = document.getElementById('showImage1');
//   var image2 = document.getElementById('showImage2');
//   if(image1.src == image2.src){
//     image2.src=image1.src;
//     console.log("object");
//   }
//   else{
//     console.log("object2");
//   }

// image Src="".something = secondPage ;
//   document.getElementById("demo").innerHTML=localStorage.something;
//   document.getElementById("product-main-image")= document.getElementById("showImage");
// }

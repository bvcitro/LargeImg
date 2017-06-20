var imagez;
$(document).ready(function(){ // ensures this doesnt run until the image is loaded
  imagez = document.getElementById("divmyImg"); // gets the div holding the image
  if (imagez===null) {
      //alert("Image Null :(");
      document.getElementById('divone').style.display = "none";// if there is no image, does not display button  
  }else{// if images null end
       imagez = imagez.firstElementChild.src; // get the element holding the image url
       //alert(imagez.src);
       imagez = imagez.replace(/&/g, "XXXXXXXXXX");// gets rid of '&' within the url so the url can be transferred within another url
       document.getElementById("buttonz").href = "http://citrowske.com/Training_Photos/PhotoHost.html?url="+imagez; //puts the modified image url within the host url and links it to the button
   }// if else imagez null end
 })

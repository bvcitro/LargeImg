var imagez;
$(document).ready(function(){ // ensures this doesnt run until the image is loaded
  imagez = document.getElementById("divmyImg"); // gets the div holding the image
    if (imagez===null) document.getElementById('divone').style.display = "none";// if there is no image, does not display button  
  imagez = imagez.firstElementChild.src; // get the element holding the image url
  imagez = imagez.replace(/&/g, "XXXXXXXXXX");// gets rid of '&' within the url so the url can be transferred within another url
  document.getElementById("buttonz").href = "http://citrowske.com/Training_Photos/PhotoHost.html?url="+imagez; //puts the modified image url within the host url and links it to the button
  })

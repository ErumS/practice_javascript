function changeImg()
{
  console.log("Clicked!");
  var image = document.getElementById("myImage");
  if(image.src.match("about.jpg")) 
  {
    image.src = "Pictures/aboutLight.jpg";
  } 
  else 
  {
    image.src = "Pictures/about.jpg";
  }
}
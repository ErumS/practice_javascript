function modalShow(){
  $('#clickOn').click(function(){
    $('#modalContainer').css('display', 'block');
  });
}

function modalHide()
{
  $('#closeButton').click(function(){
    $('#modalContainer').css('display', 'none');
  });
}

function displayInfo(name1, mail1)
{
  if (typeof(Storage) !== "undefined") 
  {
    sessionStorage.setItem("name", name1);
    sessionStorage.setItem("mail", mail1);
    subscriberName = document.getElementById("myName").innerHTML = sessionStorage.getItem("name");
    subscriberMail = document.getElementById("myMail").innerHTML = sessionStorage.getItem("mail");
    var row = "You have successfully subscribed with name as " + subscriberName + " and email id as " + subscriberMail;
    $('#newSec').show();
    $('#newSec').append(row + '<br>');
    $('#modalContainer').css('display', 'none');
  } 
  else 
  {
    document.getElementById("myName").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}

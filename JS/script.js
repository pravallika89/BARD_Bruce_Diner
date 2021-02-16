function getdetails()
{
var a = document.forms["details"]["firstName"].value;
var b = document.forms["details"]["lastName"].value;
var c= document.forms["details"]["phone"].value;

  if (a,b,c < 1) 
 {alert("Please Enter Valid details")}
 else
 {alert("Successfully Registered")}
 
}




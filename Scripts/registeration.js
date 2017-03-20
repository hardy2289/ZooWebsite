

function validate()
{ 
   if( document.Registration.textnames.value == "" )
   {
     alert( "Please provide your First Name!" );
     document.Registration.textnames.focus() ;
     return false;
   }
   if( document.Registration.lastname.value == "" )
   {
     alert( "Please provide your Last Name!" );
     document.Registration.lastname.focus() ;
     return false;
   }
   
   if( document.Registration.dob.value == "" )
   {
     alert( "Please provide your DOB!" );
     document.Registration.dob.focus() ;
     return false;
   }
   
   if ( ( Registration.sex[0].checked == false ) && ( Registration.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   } 
   
   if( document.Registration.userid.value == "" )
   {
     alert( "Please provide User ID!" );
     document.Registration.userid.focus() ;
     return false;
   }
   if( document.Registration.password.value == "" )
   {
     alert( "Please provide Password!" );
     document.Registration.password.focus() ;
     return false;
   }
  
   if( document.Registration.paddress.value == "" )
   {
     alert( "Please provide your Address!" );
     document.Registration.paddress.focus() ;
     return false;
   }
   if( document.Registration.City.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.Registration.City.focus() ;
     return false;
   }   
   if( document.Registration.pincode.value == "" ||
           isNaN( document.Registration.pincode.value) ||
           document.Registration.pincode.value.length != 6 )
   {
     alert( "Please provide a Postcode in the format ######." );
     document.Registration.pincode.focus() ;
     return false;
   }
      
 var email = document.Registration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.Registration.emailid.focus() ;
     return false;
 }
   
 if( document.Registration.mobileno.value == "" ||
           isNaN( document.Registration.mobileno.value) ||
           document.Registration.mobileno.value.length != 11 )
   {
     alert( "Please provide a Phone Number in 11 Digit Format." );
     document.Registration.mobileno.focus() ;
     return false;
   }
 


}

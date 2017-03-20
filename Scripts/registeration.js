/**
 * Created by Ajay Bakari on 20/03/2017.
 */


function validate()
{
    if( !document.Registration.textnames.value.match(/^[A-Za-z]{3,20}$/) )
    {
        alert( "Please provide Valid First Name!" );
        document.Registration.textnames.focus() ;
        return false;
    }
    if( !document.Registration.lastname.value.match(/^[A-Za-z]{3,20}$/) )
    {
        alert( "Please provide Valid Last Name!" );
        document.Registration.lastname.focus() ;
        return false;
    }


    if( !document.Registration.password.value.match(/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/) )
    {
        alert( "Please provide Password!" );
        document.Registration.password.focus() ;
        return false;
    }

    if( !document.Registration.number1.value.match(/^[0-9 ]{1,4}$/) )
    {
        alert( "Please provide Valid House Number!" );
        document.Registration.number1.focus() ;
        return false;
    }

    if( !document.Registration.pincode.value.match((/^[A-Za-z0-9]{7}$/)))
    {
        alert( "Please provide a Postcode in the format ######." );
        document.Registration.pincode.focus() ;
        return false;
    }


    if (!document.Registration.emailid.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    {
        alert("Please enter correct email ID")
        document.Registration.emailid.focus() ;
        return false;
    }

    if( !document.Registration.mobileno.value.match(/^[0-9 ]{11}$/))

    {
        alert( "Please provide a Phone Number in 11 Digit Format." );
        document.Registration.mobileno.focus() ;
        return false;
    }



}

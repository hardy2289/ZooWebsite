
function validate() {

    if (!document.ContactUs.FirstName.value.match(/^[A-Za-z]{3,20}$/)) {
        alert("Please provide Valid First Name!");
        document.ContactUs.FirstName.focus();
        return false;
    }
    if (!document.ContactUs.EmailAddress.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    {
        alert("Please enter correct email ID")
        document.ContactUs.EmailAddress.focus() ;
        return false;
    }

    if( !document.ContactUs.Comments.value.match(/^[A-Za-z0-9]{2,100}$/) )
    {
        alert( "Please provide Valid Comments!" );
        document.ContactUs.Comments.focus() ;
        return false;
    }

}
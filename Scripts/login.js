
function validate() {

    if (!document.Login.Username.value.match(/^[A-Za-z]{3,20}$/)) {
        alert("Please provide Valid First Name!");
        document.Login.Username.focus();
        return false;
    }

    if( !document.Login.Password1.value.match(/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/) )
    {
        alert( "Please provide Valid Password!" );
        document.Login.Password1.focus() ;
        return false;
    }

}
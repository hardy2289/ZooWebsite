
function validate() {

    if (!document.Login.email1.value.match(/^[A-Za-z]{3,20}$/)) {
        alert("Please provide Valid First Name!");
        document.Login.email1.focus();
        return false;
    }

    if( !document.Login.password1.value.match(/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/) )
    {
        alert( "Please provide Valid Password!" );
        document.Login.password1.focus() ;
        return false;
    }

}
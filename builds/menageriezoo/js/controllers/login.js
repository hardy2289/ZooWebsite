/**
 * Created by Ajay Bakari on 07/04/2017.
 */
function validate() {

    if (!document.Login.email.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        alert("Please provide Valid Email Address!");
        document.Login.email.focus();
        return false;
    }

    if( !document.Login.password.value.match(/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/) )
    {
        alert( "Please provide Valid Password!" );
        document.Login.password.focus() ;
        return false;
    }

}
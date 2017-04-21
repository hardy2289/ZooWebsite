/**
 * Created by Ajay Bakari on 13/04/2017.
 */


// Initialize Firebase





function answers() {
    var answer = document.getElementById("mySelect");

    if (answer[answer.selectedIndex].value == "Bonobo") {

        var rootRef = firebase.database().ref().child("Bonobo");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
           //var description = snap.child("description").val();


            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if (answer[answer.selectedIndex].value == "Chimpanzee") {

        var rootRef = firebase.database().ref().child("Chimpanzee");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
           // var description = snap.child("description").val();


            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if (answer[answer.selectedIndex].value == "Elephnat") {

        var rootRef = firebase.database().ref().child("Elephnat");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
           // var description = snap.child("description").val();


            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }
    else if (answer[answer.selectedIndex].value == "Horse") {

        var rootRef = firebase.database().ref().child("Horse");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
           // var description = snap.child("description").val();


            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if (answer[answer.selectedIndex].value == "Lion") {

        var rootRef = firebase.database().ref().child("Lion");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            //var description = snap.child("description").val();


            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if (answer[answer.selectedIndex].value == "Panda") {

        var rootRef = firebase.database().ref().child("Panda");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
           // var description = snap.child("description").val();


            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if (answer[answer.selectedIndex].value == "Penguin") {

        var rootRef = firebase.database().ref().child("Penguin");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            //var description = snap.child("description").val();


            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if (answer[answer.selectedIndex].value == "Python") {

        var rootRef = firebase.database().ref().child("Python");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            //var description = snap.child("description").val();


            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if (answer[answer.selectedIndex].value == "Tiger") {

        var rootRef = firebase.database().ref().child("Tiger");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
           // var description = snap.child("description").val();


            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if (answer[answer.selectedIndex].value == "Turtle") {

        var rootRef = firebase.database().ref().child("Turtle");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            //var description = snap.child("description").val();


            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if (answer[answer.selectedIndex].value = "") {

        function clicker1() {
            ss.innerHTML = "Please Select an Animal";
            setTimeout("kk()",3000);
        }
        function kk(){
            document.forms[0].submit();

        }

    }

}


function answersnew() {
    var answer = document.getElementById("mySelect1");

    if (answer[answer.selectedIndex].value == "Battersea") {

        var rootRef = firebase.database().ref().child("Battersea");

        rootRef.on("child_added", snap => {
            var address = snap.child("address").val();
            var phoneno = snap.child("phoneno").val();
            var time1 = snap.child("time").val();


            $("#table_body1").append("<tr><td>" + address + "</td><td>" + phoneno + "</td><td>" + time1 + "</td></tr>")
        });
    }

    if (answer[answer.selectedIndex].value == "Bristol") {

        var rootRef = firebase.database().ref().child("Bristol");

        rootRef.on("child_added", snap => {
            var address = snap.child("address").val();
            var phoneno = snap.child("phoneno").val();
            var time1 = snap.child("time").val();


            $("#table_body1").append("<tr><td>" + address + "</td><td>" + phoneno + "</td><td>" + time1 + "</td></tr>")
        });
    }

    if (answer[answer.selectedIndex].value == "Edinburgh") {

        var rootRef = firebase.database().ref().child("Edinburgh");

        rootRef.on("child_added", snap => {
            var address = snap.child("address").val();
            var phoneno = snap.child("phoneno").val();
            var time1 = snap.child("time").val();


            $("#table_body1").append("<tr><td>" + address + "</td><td>" + phoneno + "</td><td>" + time1 + "</td></tr>")
        });
    }

    if (answer[answer.selectedIndex].value == "Hamerton") {

        var rootRef = firebase.database().ref().child("Hamerton");

        rootRef.on("child_added", snap => {
            var address = snap.child("address").val();
            var phoneno = snap.child("phoneno").val();
            var time1 = snap.child("time").val();


            $("#table_body1").append("<tr><td>" + address + "</td><td>" + phoneno + "</td><td>" + time1 + "</td></tr>")
        });
    }

    if (answer[answer.selectedIndex].value == "London") {

        var rootRef = firebase.database().ref().child("London");

        rootRef.on("child_added", snap => {
            var address = snap.child("address").val();
            var phoneno = snap.child("phoneno").val();
            var time1 = snap.child("time").val();


            $("#table_body1").append("<tr><td>" + address + "</td><td>" + phoneno + "</td><td>" + time1 + "</td></tr>")
        });
    }




}
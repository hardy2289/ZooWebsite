function answers() {


    var answer = document.getElementById('myInput');



    if (answer.value =="Chimpanzee" || answer.value == "Pan" ) {

        var rootRef = firebase.database().ref().child("Chimpanzee");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            var description = snap.child("description").val();

            $("#table_body1").append("<tr><td>" + description + "</td><td>"+ +"</td><tr>")
            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if (answer.value == "Bonobo" ||answer.value == "Hominidae" || answer.value =="Pan Paniscus"  || answer.value == "Paniscus" ) {

        var rootRef = firebase.database().ref().child("Bonobo");


        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            var description = snap.child("description").val();

            $("#table_body1").append("<tr><td>" + description + "</td><td>" + + "</td><tr>")
            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")

        });
    }

}
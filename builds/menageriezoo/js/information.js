function answers() {


    var answer = document.getElementById("myInput");




    if ((((answer.value =="chimpanzee" || answer.value == "Chimpanzee" )|| (answer.value =="Pongidae"  || answer.value == "pongidae"))||((answer.value =="primates" || answer.value == "Primates" )|| (answer.value =="Troglodytes"  || answer.value == "troglodytes")))
    || (((answer.value =="CHIMPANZEE" || answer.value == "PONGIDAE" )|| (answer.value =="Pan"  || answer.value == "pan"))||((answer.value =="PAN" || answer.value == "PRIMATES" )|| (answer.value =="TROGLODYTES"  || answer.value == "troglodytes"))))
    {

        var rootRef = firebase.database().ref().child("Chimpanzee");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            var description = snap.child("description").val();
            var zoo=snap.child("zoo").val();

    var firstRow = document.getElementById("table").rows[0];
    var x = firstRow.insertCell(+2);
    x.innerHTML = "<img src='../../Images/Thumbnails/Chimpanzee1.jpg' height='120' width='120' alt='hello'/>";

            $("#table_body1").append("<tr><td>" + description + "</td><td>"+ zoo+"</td><td>"+"Chimpanzee Image" +"</td><tr>")
            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if ((((answer.value =="Bonobo" || answer.value == "bonobo" )|| (answer.value =="Pan Paniscus"  || answer.value == "pan paniscus"))||((answer.value =="primates" || answer.value == "Primates" )|| (answer.value =="Paniscus"  || answer.value == "paniscus")))
        || (((answer.value =="Hominidae" || answer.value == "hominidae" )|| (answer.value =="Pan"  || answer.value == "pan"))||((answer.value =="PAN" || answer.value == "PRIMATES" )|| (answer.value =="BONOBO"  || answer.value == "PANISCUS"))))
    {

        var rootRef = firebase.database().ref().child("Bonobo");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            var description = snap.child("description").val();
            var zoo=snap.child("zoo").val();

            var firstRow = document.getElementById("table").rows[0];
            var x = firstRow.insertCell(+2);
            x.innerHTML = "<img src='../../Images/Thumbnails/Bonobo1.jpeg' height='120' width='120' alt='hello'/>";

            $("#table_body1").append("<tr><td>" + description + "</td><td>"+ zoo+"</td><td>"+"Bonobo Image" +"</td><tr>")
            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if ((((answer.value =="Elephant" || answer.value == "elephant" )|| (answer.value =="Elephantidae"  || answer.value == "elephantidae"))||((answer.value =="Mammalia" || answer.value == "mammalia" )|| (answer.value =="Elephantus"  || answer.value == "elephantus")))
        || (((answer.value =="Proboscidea" || answer.value == "proboscidea" )|| (answer.value =="Loxodonta"  || answer.value == "loxodonta"))||((answer.value =="ELEPHANT" || answer.value == "MAMMALIA" )|| (answer.value =="ELEPHANTUS"  || answer.value == "LOXODONTA"))))
    {

        var rootRef = firebase.database().ref().child("Elephnat");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            var description = snap.child("description").val();
            var zoo=snap.child("zoo").val();

            var firstRow = document.getElementById("table").rows[0];
            var x = firstRow.insertCell(+2);
            x.innerHTML = "<img src='../../Images/Thumbnails/Elephant2.jpeg' height='120' width='120' alt='hello'/>";

            $("#table_body1").append("<tr><td>" + description + "</td><td>"+zoo +"</td><td>"+"Elephant Image" +"</td><tr>")
            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if ((((answer.value =="Horse" || answer.value == "horse" )|| (answer.value =="Equidae"  || answer.value == "equidae"))||((answer.value =="Equus" || answer.value == "equus" )|| (answer.value =="Perissodactyla"  || answer.value == "perissodactyla")))
        || (((answer.value =="E. ferus" || answer.value == "e. ferus" )|| (answer.value =="HORSE"  || answer.value == "EQUIDAE"))||((answer.value =="EQUUS" || answer.value == "MAMMALIA" )|| (answer.value =="PERISSODACTYLA"  || answer.value == "equus"))))
    {

        var rootRef = firebase.database().ref().child("Horse");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            var description = snap.child("description").val();
            var zoo=snap.child("zoo").val();

            var firstRow = document.getElementById("table").rows[0];
            var x = firstRow.insertCell(+2);
            x.innerHTML = "<img src='../../Images/Thumbnails/Horse1.jpg' height='120' width='120' alt='hello'/>";

            $("#table_body1").append("<tr><td>" + description + "</td><td>"+ zoo+"</td><td>"+"Horse Image" +"</td><tr>")
            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if ((((answer.value =="Lion" || answer.value == "lion" )|| (answer.value =="Felidae"  || answer.value == "felidae"))||((answer.value =="Panthera" || answer.value == "panthera" )|| (answer.value =="Leo"  || answer.value == "leo")))
        || (((answer.value =="Carnivora" || answer.value == "carnivora" )|| (answer.value =="African Lion"  || answer.value == "LION"))||((answer.value =="FELIDAE" || answer.value == "PANTHERA" )|| (answer.value =="LEO"  || answer.value == "CARNIVORA"))))
    {

        var rootRef = firebase.database().ref().child("Lion");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            var description = snap.child("description").val();
            var zoo=snap.child("zoo").val();

            var firstRow = document.getElementById("table").rows[0];
            var x = firstRow.insertCell(+2);
            x.innerHTML = "<img src='../../Images/Thumbnails/Lion1.jpeg' height='120' width='120' alt='hello'/>";

            $("#table_body1").append("<tr><td>" + description + "</td><td>"+ zoo+"</td><td>"+"Lion Image" +"</td><tr>")
            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if ((((answer.value =="Panda" || answer.value == "panda" )|| (answer.value =="Ursidae"  || answer.value == "ursidae"))||((answer.value =="Ailuropoda" || answer.value == "ailuropoda" )|| (answer.value =="Pandam"  || answer.value == "pandam")))
        || (((answer.value =="Carnivora" || answer.value == "carnivora" )|| (answer.value =="Giant Panda"  || answer.value == "PANDA"))||((answer.value =="URSIDAE" || answer.value == "AILUROPODA" )|| (answer.value =="PANDAM"  || answer.value == "GIANT PANDA"))))
    {

        var rootRef = firebase.database().ref().child("Panda");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            var description = snap.child("description").val();
            var zoo=snap.child("zoo").val();

            var firstRow = document.getElementById("table").rows[0];
            var x = firstRow.insertCell(+2);
            x.innerHTML = "<img src='../../Images/Thumbnails/Panda1.jpg' height='120' width='120' alt='hello'/>";

            $("#table_body1").append("<tr><td>" + description + "</td><td>"+ zoo+"</td><td>"+"Panda Image" +"</td><tr>")
            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if ((((answer.value =="Penguin" || answer.value == "penguin" )|| (answer.value =="Spheniscidae"  || answer.value == "spheniscidae"))||((answer.value =="Aptenodytes" || answer.value == "aptenodytes" )|| (answer.value =="Sphenisciformes"  || answer.value == "sphenisciformes")))
        || (((answer.value =="Forsteri" || answer.value == "forsteri" )|| (answer.value =="PENGUIN"  || answer.value == "SPHENISCIDAE"))||((answer.value =="APTENODYTES" || answer.value == "SPHENISCIFORMES" )|| (answer.value =="pEnguin"  || answer.value == "PENguin"))))
    {

        var rootRef = firebase.database().ref().child("Penguin");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            var description = snap.child("description").val();
            var zoo=snap.child("zoo").val();

            var firstRow = document.getElementById("table").rows[0];
            var x = firstRow.insertCell(+2);
            x.innerHTML = "<img src='../../Images/Thumbnails/Penguin1.jpg' height='120' width='120' alt='hello'/>";

            $("#table_body1").append("<tr><td>" + description + "</td><td>"+ zoo+"</td><td>"+"Penguin Image" +"</td><tr>")
            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if (((answer.value =="Python" || answer.value == "python" )|| (answer.value =="Boidae"  || answer.value == "boidae"))||((answer.value =="Squamata" || answer.value == "squamata" )|| (answer.value =="PYTHON"  || answer.value == "regius")))

    {

        var rootRef = firebase.database().ref().child("Python");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            var description = snap.child("description").val();
            var zoo=snap.child("zoo").val();

            var firstRow = document.getElementById("table").rows[0];
            var x = firstRow.insertCell(+2);
            x.innerHTML = "<img src='../../Images/Thumbnails/Python1.jpg' height='120' width='120' alt='hello'/>";

            $("#table_body1").append("<tr><td>" + description + "</td><td>"+ zoo+"</td><td>"+"Python Image" +"</td><tr>")
            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if (((answer.value =="Tiger" || answer.value == "tiger" )|| (answer.value =="Tigris"  || answer.value == "tigris"))||((answer.value =="TIGER" || answer.value == "TIger" )|| (answer.value =="TIGRIS"  || answer.value == "TIgris")))

    {

        var rootRef = firebase.database().ref().child("Tiger");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            var description = snap.child("description").val();
            var zoo=snap.child("zoo").val();

            var firstRow = document.getElementById("table").rows[0];
            var x = firstRow.insertCell(+2);
            x.innerHTML = "<img src='../../Images/Thumbnails/Tiger2.jpeg' height='120' width='120' alt='hello'/>";

            $("#table_body1").append("<tr><td>" + description + "</td><td>"+zoo +"</td><td>"+"Tiger Image" +"</td><tr>")
            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }

    else if ((((answer.value =="Turtle" || answer.value == "turtle" )|| (answer.value =="Emididae"  || answer.value == "emididae"))||((answer.value =="Cuora" || answer.value == "cuora" )|| (answer.value =="Testudo"  || answer.value == "testudo")))
        || (((answer.value =="Chelonia" || answer.value == "chelonia" )|| (answer.value =="Flavomarginata"  || answer.value == "flavomarginata"))||((answer.value =="TURTLE" || answer.value == "EMIDIDAE" )|| (answer.value =="CUORA"  || answer.value == "TESTUDO"))))
    {

        var rootRef = firebase.database().ref().child("Turtle");

        rootRef.on("child_added", snap => {
            var originalname = snap.child("originalname").val();
            var latinname = snap.child("latinname").val();
            var order1 = snap.child("order").val();
            var family = snap.child("family").val();
            var genus = snap.child("genus").val();
            var species = snap.child("species").val();
            var description = snap.child("description").val();
            var zoo=snap.child("zoo").val();

            var firstRow = document.getElementById("table").rows[0];
            var x = firstRow.insertCell(+2);
            x.innerHTML = "<img src='../../Images/Thumbnails/Turtle1.jpg' height='120' width='120' alt='hello'/>";


            $("#table_body1").append("<tr><td>" + description + "</td><td>"+ zoo+"</td><td>"+"Turtle Image" +"</td><tr>")
            $("#table_body").append("<tr><td>" + originalname + "</td><td>" + latinname + "</td><td>" + order1 + "</td><td>" + family + "</td><td>" + genus + "</td><td>" + species + "</td></tr>")
        });
    }


}
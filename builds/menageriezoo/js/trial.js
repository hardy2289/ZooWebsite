
var config = {
    apiKey: "AIzaSyAGOAeE7W8gWftPStV2nf4PwYyaEuxERNk",
    authDomain: "animalinformation-cd765.firebaseapp.com",
    databaseURL: "https://animalinformation-cd765.firebaseio.com",
    projectId: "animalinformation-cd765",
    storageBucket: "animalinformation-cd765.appspot.com",
    messagingSenderId: "843766532952"
};



new Firebase("https://animalinformation-cd765.firebaseio.com/Bonobo/Bonobo").once('value', show);

function show(snap) {
    $('pre').text(JSON.stringify(snap.val(), null));
}



function registrar(){
    // console.log('click')
    var email = doNotTrack.getElementById('email').value;
    var clave = doNotTrack.getElementById('clave').value;


    firebase.auth().createUserWithEmailAndPassword(email, clave)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

}
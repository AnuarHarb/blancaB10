function chinchampu() {
  compu = Math.round(Math.random()*3);
  jugador = document.querySelector("#jugador").value;
  if (compu === 0) {
    compu = "Papel";
  }else if (compu === 1) {
    compu = "Piedra";
  }else {
    compu = "Tijeras"
  };
  alert("Tu enemigo elige " + compu);

  if (jugador === compu) {
    alert("Empataron!");
  }else if ( jugador === "Papel" && compu === "Tijeras") {
    alert("Perdiste!");
  }else if (jugador === "Papel" && compu === "Piedra") {
    alert("Ganaste!")
  }else if (jugador === "Piedra" && compu === "Papel") {
    alert("Perdiste");
  }else if (jugador === "Piedra" && compu === "Tijeras") {
    alert("Ganaste!");
  }else if (jugador === "Tijeras" && compu === "Piedra") {
    alert("Perdiste!");
  }else if (jugador === "Tijeras" && compu === "Papel") {
    alert("Ganaste!");
  }else {
    alert("Escribiste mal tu jugada");
  }
};

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    testAPI();
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
  }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
FB.init({
  appId      : '1179852602059105',
  cookie     : true,  // enable cookies to allow the server to access
                      // the session
  xfbml      : true,  // parse social plugins on this page
  version    : 'v2.2' // use version 2.2
});

// Now that we've initialized the JavaScript SDK, we call
// FB.getLoginStatus().  This function gets the state of the
// person visiting this page and can return one of three states to
// the callback you provide.  They can be:
//
// 1. Logged into your app ('connected')
// 2. Logged into Facebook, but not your app ('not_authorized')
// 3. Not logged into Facebook and can't tell if they are logged into
//    your app or not.
//
// These three cases are handled in the callback function.

FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});

};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}
function Foto(){
    FB.api('/me?fields=id,name,birthday,picture.type(large)', 'get',function(response){
        console.log(response.picture.data.url);
        document.getElementById('foto').src=response.picture.data.url;
        console.log(response.email);

    });
  }
  function mail() {
    FB.api('/me?fields=id,name,email,hometown', 'get', function(response){
      document.querySelector('#email').innerHTML = response.email;
    });
  }
  function publicar() {
    FB.login(function() {
      FB.api('/me/feed', 'post', {
        message: document.querySelector('#publicar').value,
        link: document.querySelector('#publicarFoto').value});
      }, {scope: 'publish_actions'});
    }

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1688906524523851',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


function statusChangeCallback(response) {
  if(response.status === 'connected') {
    console.log("log in and authenticated", response)
    axios({
      method: 'post',
      url:'http://localhost:3000/signinfb',
      headers: {
        fbtoken: response.authResponse.accessToken
      }
    }).then(resLogin =>{
      console.log("res server", resLogin)
      localStorage.setItem("token",resLogin.data.user.token)
      localStorage.setItem("userId", resLogin.data.user._id)
      localStorage.setItem('picture', resLogin.data.user.picture)
      localStorage.setItem('name', resLogin.data.user.name)
      window.location.href="home.html"
    })
  }else{
    console.log('not log in')
    window.location.href ="index.html"
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    console.log("respon login:",response)
    statusChangeCallback(response);
  });
}

function logOutButton(){
  alert("you are will be log out?")
  FB.logout(function(response){
    statusChangeCallback(response)
  })
  localStorage.removeItem("token")
  localStorage.removeItem("userId")
  localStorage.removeItem("picture")
  localStorage.removeItem("name")
  window.location.href="index.html"
  
}


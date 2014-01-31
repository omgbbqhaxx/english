$(document).ready(function(){
  // using jQuery
function getCookie(name) {
var cookieValue = null;
if (document.cookie && document.cookie != '') {
var cookies = document.cookie.split(';');
for (var i = 0; i < cookies.length; i++) {
var cookie = jQuery.trim(cookies[i]);
// Does this cookie string begin with the name we want?
if (cookie.substring(0, name.length + 1) == (name + '=')) {
cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
break;
}
}
}
return cookieValue;
}
  
  
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1417396365172088', // App ID
      channelUrl : 'http://ingilizce-kelime-ogren.com/channel/', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });
    
    
	FB.Event.subscribe('auth.authResponseChange', function(response) 
	{
 	 if (response.status === 'connected') 
  	{
  		document.getElementById("message").innerHTML +=  "<br>Connected to Facebook";
  		//SUCCESS
  		
  	}	 
	else if (response.status === 'not_authorized') 
    {
    	document.getElementById("message").innerHTML +=  "<br>Failed to Connect";

		//FAILED
    } else 
    {
    	document.getElementById("message").innerHTML +=  "<br>Logged Out";

    	//UNKNOWN ERROR
    }
	});	
	
    };
    
   	function Login()
	{
	
		FB.login(function(response) {
		   if (response.authResponse) 
		   {
		    	getUserInfo();
  			} else 
  			{
  	    	 console.log('User cancelled login or did not fully authorize.');
   			}
		 },{scope: 'email,user_photos,user_friends'});
	
	
	}
	
	

  function getUserInfo() {
	    FB.api('/me', function(response) {
		$.ajax({
		  type:'POST',
		  url:'/gonder/',
		  data:{xn: xn,randoma: randoma,randomb:randomb},
		  success:function(cevap){
		  $("#sonuc").html(cevap);
		  },
		  });  
	      
	      
	      
	      
	  var str="<b>Name</b> : "+response.name+"<br>";
	  	  str +="<b>Link: </b>"+response.link+"<br>";
	  	  str +="<b>Username:</b> "+response.username+"<br>";
	  	  str +="<b>id: </b>"+response.id+"<br>";
	  	  str +="<b>Email:</b> "+response.email+"<br>";
		  
		  
	  	  //str +="<input type='button' value='Get Photo' onclick='getPhoto();'/>";
	  	  //str +="<input type='button' value='Logout' onclick='Logout();'/>";
	  	  //document.getElementById("status").innerHTML=str;
		  
		//  FB.api('/me?fields=friends.limit(10)', function(response) {
		//  var maganda= response.friends.data[3].name;
	  	// alert(maganda);
	  	//});
		  
	  	  	    
    });
    }
	function getPhoto()
	{
	  FB.api('/me/picture?type=square', function(response) {

		  var str="<br/><b>Pic</b> : <img src='"+response.data.url+"'/>";
	  	  document.getElementById("status").innerHTML+=str;
	  	  	    
    });
	
	}
	function Logout()
	{
		FB.logout(function(){document.location.reload();});
	}

  // Load the SDK asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
  
  
  });

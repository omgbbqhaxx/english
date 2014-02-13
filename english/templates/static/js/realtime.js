         function connect(){
         function displayMessage(message){
         $('#msjs div:lt(-4)').remove();
         $("#msjs").append(message);
         
         }

var sockJS = new SockJS("//ingilizce-kelime-ogren.com/sockjs")
sockJS.onopen = function() {
displayMessage('');
};

sockJS.onmessage = function(event) {
                    event.data = JSON.parse(event.data);
                    console.log(event.data);
                    event.data.forEach(function(entry) {
                    displayMessage('<div style="width:390px;" id="xnyy"  class="row"><div style="left:5px;"  class="col-lg-12"><section class="comment-list block"><article id="comment-id-1" class="comment-item media arrow arrow-left"><a class="pull-left thumb-small avatar"><img src="http://graph.facebook.com/'+entry[0]+'/picture?type=normal" class="img-circle"></a><section class="media-body panel"><header class="panel-heading clearfix"><a href="'+entry[1]+'">'+ entry[2] +'</a><br>'+ entry[3] +' kelime bildi ve '+ entry[4] +' yeni kelime öğrendi.</header></section></article></section></div></div>');
                    });
                   
                    
};
sockJS.onclose = function() {
displayMessage("");
};
         }
        

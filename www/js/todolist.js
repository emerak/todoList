window.kendoMobileApplication = new kendo.mobile.Application(document.body);

var app = new kendo.mobile.Application(document.body, 
  {
    platform:'android'
  });

var inbox = [
        {
            "id": 1,
            "from": "John Doe",
            "subject": "Monday meeting",
            "text": "Hi Tom, Since Monday I'll be out of office, I'm rescheduling the meeting for Tuesday.",
            "time": "07:56"
        },
        {
            "id": 2,
            "from": "Sarah Connor",
            "subject": "Regarding org chart changes",
            "text": "Tom, I checked the new org chart last night and I have some reservations about it...",
            "time": "08:22"
        },
        {
            "id": 3,
            "from": "Jane Parker",
            "subject": "Your Costume is ready",
            "text": "Hi mr. Sawyer, I'm sorry for the delay, your Halloween costume is ready. The bears...",
            "time": "10:14"
        },
        {
            "id": 4,
            "from": "Joe Harper",
            "subject": "I'm sorry, Tom",
            "text": "Hi Tom, my aunt comes for a visit this Saturday, so I can't come back to St. Pete...",
            "time": "10:14"
        },
        {
            "id": 5,
            "from": "Becky Thatcher",
            "subject": "Out tonight?",
            "text": "Honey, wanna go out tonight to grab some chicken? My weekly vouchers for cooking...",
            "time": "10:14"
        }
    ];

$(document).ready(function(){ 
  fillMailList();

});   

var fillMailList = function(){
  inbox.forEach(function(element){
    $('.mail-list').append("<div class='mail' id='mail-"+element.id+"'><div id='time'><p id='time'>"+element.time+"</p></div><div id='from'><h2>"+element.from+"</h2></div><div id='subject'><h2>"+element.subject+"</h2></div><div id='text'><p>"+element.text+"</p></div><button class='reply-mail' id="+element.id+">Reply</button><button class='delete-mail' id="+element.id+">Delete</button></hr></div>");
  });

  deleteMail();
  showMessages(); 
};

var removeAll = function(){
  $(".mail-list").children().remove()
};

var deleteMail = function(){
  $('.delete-mail').click(function(){
    $("#mail-"+this.id+"").remove();
  })
};

var showMessages = function(){
  $('.km-button').click(function(){
    if (this.id == 'new'){
      removeAll();
      showNewMessage();
    }else if(this.id == 'show'){
      removeAll();
      fillMailList();
    }else{
      removeAll();
    }
  })
};

var showNewMessage = function(){
  $('.mail-list').append("<div id='new-message'><div><h2>Destinatary</h2><input type='text'' name='destinatary'/><br/></div><div><h2>Content</h2><textarea id='new-message-content' name='new-message-content'></textarea></div><button id='send-new-mail'>Send Mail</button></div>")
};


$('.button-task').on('click',function(){
 var task = $(".text-task").val();
 $(".to-do-list").append("<p>"+task+"</p>");
});

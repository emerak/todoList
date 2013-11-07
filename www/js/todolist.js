tasks_count = 0
$('.button-task').on('click',function(){
  tasks_count = tasks_count+1;  
  var task = $(".text-task").val();
  $(".to-do-list").append("<div class="+tasks_count+"><p>"+task+"</p><button class='delete-task' id="+tasks_count+">X</button></div>");
  debugger
  delete_task();
 })

 var delete_task = function(){ 
  $('.delete-task').on('click',function(e){
    task_num = e.target.id;
    $("."+task_num+"").remove();
  });
 }



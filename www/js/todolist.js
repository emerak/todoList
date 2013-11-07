tasks_count = 0
$('.button-task').on('click',function(){
  tasks_count = tasks_count+1;  
  var task = $(".text-task").val();
  $(".to-do-list").append("<div class="+tasks_count+"><p class="+tasks_count+">"+task+"</p><input class='hidden' type='text' value="+task+"></input><button class='edit-task' id="+tasks_count+">Edit</button><button class='delete-task' id="+tasks_count+">Delete</button></div>");
  $(".text-task").val("");
  edit_task();
  delete_task();
 })

 var delete_task = function(){ 
  $('.delete-task').on('click',function(e){
    task_num = e.target.id;
    $("."+task_num+"").remove();
  })
 };
 
 var edit_task = function(){
   $(".edit-task").click(function(e){
     var $task = $(this).parent();
     var $edit = $task.find(".edit-task");
     $task.find("p").addClass("hidden");
     $task.find("input").removeClass("hidden");
     $edit.toggleClass("save-task");
     $edit.text("Save");
     save_task();
   });
 }

var save_task = function(){
  $(".save-task").click(function(){
    $task = $(this).parent().find("p")
    $task.text($(this).prev().val())
    $task.removeClass("hidden");
    $(this).toggleClass("save-task");
    $(this).text("Edit");
    $(this).prev().addClass("hidden");
    edit_task();

  });
}

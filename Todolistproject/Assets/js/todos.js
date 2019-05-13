// check of todos by clicking

$("ul").on("click","li",function(){
//if li is grey then turn it black, else turn it grey;
	$(this).toggleClass("completed");
});

// click on x to delete todo

$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e ){
	if(e.which===13){
		//grabbing tdo textfrom input
		var todoText=$(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+todoText+"</li>")
	}
});

$("#toggleForm").click(function(){
	$("input[type='text']").fadeToggle();
});
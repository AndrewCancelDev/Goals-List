// Check off todos by clicking
$("ul").on("click" , "li" , function(){
	$(this).toggleClass("completed"); 
	// css class that toggles gray w line through

});

// click on X to delete goal

$("ul").on("click", "span" , function(event){
	// removed li due to parent element
$(this).parent().fadeOut(500, function(){
//fade out refers to li
	$(this).remove();


	});

event.stopPropagation();
// stops bubbling up to other elements
});

// selecting input
// gets new goal input
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var goalText = $(this).val();
		// gets value of input
	  // enter char code is 13 (jQuery)
	//corresponds to char code of key pressed

	$(this).val("");

	$("ul").append("<li> <span> <i class='fas fa-trash-alt'></i> </span>" + goalText + "</li>")
	// adds new li in the ul
}
});

$(".fa-pencil-alt").click(function(){
   $("input[type='text']").fadeToggle();/* makes pencil 
   											cause toggle*/

});
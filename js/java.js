$(document).ready(function() {
	$(".town").click(function(){
		var category = $(this).attr("id");
		if(category=="all") {
			$(".all").removeClass("d-none");
			$(".town").removeClass("active-town");
			$("#all").addClass("active-town");
		}else {
			$(".all").addClass("d-none");
			$(".town").removeClass("active-town");
			$("."+category).removeClass("d-none");
			$("#"+category).addClass("active-town");
			
		}
	});
});
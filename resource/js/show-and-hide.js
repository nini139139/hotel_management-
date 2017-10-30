
function autoHeight(container,clicked_stage){
    var biggestHeight = 0;
    var containerr= ("."+container);
    var stage_to_show = $("."+clicked_stage);
    biggestHeight=stage_to_show.height();
    // Set the container height
    $(containerr).height(biggestHeight);        
}

$(document).ready(function(){

    $(".stage").on("click", function(){
        var clicked_stage = $(this).parent().attr("id");//parent id a's id
        var clicked_stages_parrent_container=$(this).parent().parent();//main parent 

        var stage_to_show = $("."+clicked_stage);//children class name

        autoHeight(stage_to_show.parent().attr('class'),clicked_stage);
                
        stage_to_show.parent().children().each(function(){
            $(this).css('visibility','hidden').css('z-index','0');
        });

        stage_to_show.css('visibility','visible').css('z-index','1');
        
        
          
    });
});


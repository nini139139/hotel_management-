function autoHeight(container,clicked_stage){
    var biggestHeight = 0;
    var containerr= ("."+container);
    var stage_to_show = $("."+clicked_stage);
    biggestHeight=stage_to_show.height();
    // Set the container height
    $(containerr).height(biggestHeight);        
}



window.onload = function(){

    $('#file-input').change(function () {
        $('#profile-photo-hidden').hide();
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function (e) {
            var img = $("<img/>");
            img.addClass("main-photo")
            img.attr("src", e.target.result);
            $('.personal-info-uploadPhoto').append(img);
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
        }
    });




    $(document).on('change', '.files', function (event) {

        if (typeof (FileReader) != "undefined") {
            var dvPreview = $(this).parents(".gallery").find(".gallery-section");
            dvPreview.html("");
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;

            var files = event.target.files;
            var filesLength=files.length;


            if (filesLength>6){
                alert("You can only upload a maximum of 6 files");
            }
            else{
                for(var i=0; i<6; i++){
                    var file = files[i];
                    if (regex.test(file.name.toLowerCase())) {
                        var reader = new FileReader();
                        reader.onload = function (event) {

                            //                        var file = event.target;
                            var mainDiv=$("<figure></figure>")
                            mainDiv.addClass("main-div");
                            var img = $("<img />");
                            img.addClass("gallery-img");
                            var div = $("<div>remove</div>");
                            div.addClass("remove");
                            img.attr("src", event.target.result);
                            mainDiv.append(img, div);
                            mainDiv.insertAfter(dvPreview);
                        }
                        reader.readAsDataURL(file);
                    }
                    else {
                        alert(file.name + " is not a valid image file.");
                        dvPreview.html("");
                        return false;
                    }
                }    
            }
        }

        else {
            alert("This browser does not support HTML5 FileReader.");
        }
    });



    $(document).on('click', '.remove',function(){
        $(this).parent(".main-div").remove();

    });







    $(".stage").on("click",function(){
        /*id of clicked ellements parrent(its id has same name as class("element")that should opend on clicking it)*/
        var clicked_stage = $(this).parent().attr("id");

        /*container of stage that was clicked*/
        var clicked_stages_parrent_container = $(this).parent().parent().parent().parent().parent().parent();

        /*element shat should appear*/
        var stage_to_show = $("."+clicked_stage);

        /*sets height of container automatically*/
        autoHeight(stage_to_show.parent().attr('class'),clicked_stage);

        /*set heighyt to container that includes element that should appear(its important becauze this container has absolute positioned childs so it cant set height automaticaly without js(help))*/
        //        maxHeight(stage_to_show.parent().attr('class'));

        /*close current opened element*/
        stage_to_show.parent().children().each(function(){
            $(this).css('display','none').css('z-index','0');
        });

        /*show clicked element*/
        stage_to_show.css('display','inline-block').css('z-index','1');

        /*its to give default color to all elemnt of newly opened container 
        the purpose is to delete opened mark(color) if element was
        clicked when its container was opeed last time*/
        $(stage_to_show).find(".box").each(function(){
            $(this).css("background-color","rgba(0, 152, 208, 0.81)");
        });

        /*---change color of clicked element and set default color to all its neigbours---*/

        /*make all boxes to default color(as not opened mark(blue))*/
        $(clicked_stages_parrent_container).find(".box").each(function(){
            $(this).css("background-color","rgba(0, 152, 208, 0.81)");
        });

        /*add different(red) color to clicked element*/
        $(this).find(".box").each(function(){
            $(this).css("background-color","#9d2b2b");
        });

        /*---end of change color of clicked element and set default color to all its neigbours---*/




    });


    }


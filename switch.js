($(document).ready(function(){
    
    "use strict";
    
    $(".btn-group").on("click", function(){
        $(this).find(".btn").toggleClass("select").toggleClass("unselect");  
    });

}))(jQuery);
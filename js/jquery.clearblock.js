*This script delete block, in which it is*/
$(document).ready(function () {
  $('.clear_coment').click(function(e){
    var index=$('.clear_coment').index(this); 
    $(this).parent().remove();
    });
})
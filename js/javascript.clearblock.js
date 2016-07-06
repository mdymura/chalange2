  $('.clear_coment').click(function(e) {
    var index=$('.clear_coment').index(this); 
    $(this).parent().remove();
    $(this).remove();
    });
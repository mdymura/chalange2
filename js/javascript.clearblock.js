/**This code doesn`t work, outside html 
*This script delete block, in which it is

  * function clear_coment()
  * */
('.clear_coment').click(function(e){
    var index=('.clear_coment').index(this); 
    (this).parent().remove();
    }
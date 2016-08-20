/**This function show variable Elem(Family,Name,Age,Phone).*/
       /* function Complete()*/
       $(document).ready(function () {
            $('#Complete', '[name=Form1]').click(function(){
            var Elem="Фамилия: " + document.Form1.Family.value +
                "\nИмя: " + document.Form1.Name.value +
                "\nВозраст: " + document.Form1.Age.value +
                "\nТелефон: " + document.Form1.Phone.value;
            alert(Elem);
            });
        
/**
This function return age to form.
@param {int} age - output number
*/        
        /*function CheckAge(age)
        $('.CheckAge').click(function(){
        
            if(age<18)
                return "18";
            else
                return  age;
        
        });
   */})




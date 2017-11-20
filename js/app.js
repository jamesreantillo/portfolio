$(document).ready(function(){
   var hobbies = [
  "I love Cleveland but soon be switching to boston because of Kyrie Irving",
  "I love going to the beach",
  "I love travelling"
  ]


    var hobbyCounter=0;
    var myVar = setInterval(renderHobby, 5000);

    function renderHobby() {
        
        if( hobbyCounter < hobbies.length) {
          $("#myHobbies").text(hobbies[hobbyCounter]);
          // console.log(hobbbiesArray[hobbyCounter]);
          hobbyCounter ++;
        }
        else {
          hobbyCounter = 0;
          if (hobbyCounter === 0){
            $("#myHobbies").text("Big fan of Incubus");
          }
        }

    }

    
})
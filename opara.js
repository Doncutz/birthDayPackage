var body = $(".body");
var submit = $("#submit");

$(window).ready(function(){
    body.children("h1").fadeIn(8000);

});


    
 submit.on("click", function(){
    var inputs = $("#userInput").val();
    var fullname = $("#fullName").val();
    var myname = ['opara prosper ndubuisi'];
    


     if(inputs === "20" && fullname === myname[0]){
            return swal({
                title: "Good Guess!",
                text: "You are a true friend!",
                icon: "success"
              });
     }else if(inputs === "20" && (fullname !== myname[0])){
            return swal({
                title: "Opps!",
                text: " Thats not my full name! contact me to get my full name"
            });
     }else{
         return swal({
            title: "OOPs!",
            text: "Its obvious you don't know me! please i would love to connect with you follow the links below to contact me on social media"
          });
     }

    /* for(var i=0; i < myname.length; i++){        

         if(fullname === myname[0] && inputs === "20"){
             return swal({
                title: "Goood Guess",
                text: " i am Opara prosper Ndubuisi and i just turned 20",
                icon: "success"
             });
         }else{
             return swal({
                title: "OOPs!",
                text: "sorry You failed it"
              });
         }
     }*/


    });






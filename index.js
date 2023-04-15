$('document').ready(function(){
     


    $("#regis").submit(function(){
        var nm1 = $("#name1").val();
        var ps1 = $("#pass1").val();
        var ps2 = $("#fio").val();
        console.log("nm1");
        localStorage.setItem("login",nm1);
        localStorage.setItem("password", ps1);
        localStorage.setItem("fio",ps2);
    });
    $('#vhod').submit(function(){
        var EnteredLogin = $("#name2").val();
        var EnteredPass = $("#pass2").val();

        var storedLogin = localStorage.getItem("login");
        var storedPass = localStorage.getItem("password");

        if(EnteredLogin == storedLogin && EnteredPass == storedPass){
            // alert("Успех");
            // document.location.href = '/max.html';
            history.pushState(null, 'LK', "/max.html");

        }else{
            $('#error').css('color', 'red');
        };
        
    });


});


$(document).ready(function () {

    $("#myBtn").click(function () {
        jq();
    });

    function jq() {
        var myBtn = true;

        //1

        //Nom 

        var nom = $("#nom").val();
        console.log(nom);

        if (nom === "") {
            myBtn = false;
            $("#n").show();
        }
        else if (myBtn = true) {
            $("#n").hide();
        };

        //Prénom

        var prénom = $("#prénom").val();
        console.log(prénom);

        if (prénom === "") {
            myBtn = false;
            $("#p").show();
        }

        else if (myBtn == true) {
            $("#p").hide();
        };

        //Sexe

        var sexe = $("input[name='sexe']:checked").val();

        if (sexe === undefined) {
            myBtn = false;
            $("#s").show();
        }
        else if (myBtn = true) {
            $("#s").hide();
        };

        //Date de naissance 

        var date = $("input#date").val();

        if (date === "") {
            myBtn = false;
            $("#d").show();
        }
        else if (myBtn = true) {
            $("#d").hide();
        };

        //Code postale

        var code = $("#code").val();

        console.log(code);
        if (code === "") {
            myBtn = false;
            $("#cp").show();
        }
        else if (myBtn = true) {
            $("#cp").hide();
        };

        //Email

        var email = $("#email").val();
        console.log(email);

        if (email === "") {
            myBtn = false;
            $("#em").show();
        }

        // else if ($('#email').filter(function() {
        // return this.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        // }));
    
        else if(myBtn=true){
            $("#em").hide();
            };
    }


        //2 

        //Sujet 

        var sujet = $("#sujet").val();

        if (sujet === "0") {
            myBtn = false;
            
            $("#sjt").show();
        }
        else if (myBtn = true) {
            $("#sjt").hide();
        };

        //Question 

        var question = $("textarea#question").val();
        console.log(question);

        if (question === "") {
            myBtn = false;
            $("#taQ").show();
        }
        else if (myBtn = true) {
            $("#taQ").hide();
        };

        //Accepter

        var ok = $("input#accepter").prop("checked");

        if (!ok) {
            myBtn = false;
            $("#acc").show();
        }
        else if (myBtn = true) {
            $("#acc").hide();
        };


});
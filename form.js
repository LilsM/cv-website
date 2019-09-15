$(document).ready(function(){
    //check for correct email format
    function emailvalidate(email) {
        var mailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return mailreg.test(String(email).toLowerCase());
    }

    //make sure names are composed of aplhabetical characters only
    function namevalidate(fullname){
        var namereg = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/; //works for both upeercase and lowercase 
        return namereg.test(String(fullname).toLowerCase());
    }

    //make sure that phone numbers have only digits between 0 and 9
    function phonevalidate(phone_number){
        var phonereg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return phonereg.test(phone_number);
        }

    //a function that calls the separate hvalidation functions and validates the user inputs
    function myvalidatons() {
        //get data from the form
        var fullname = $("#flname").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var phone_number = $("#pnumber").val();
        var mailinfo = $("#mailvalidationinfo");
        var nameinfo = $("#namevalidationinfo");
        var phoneinfo = $("#phonevalidationinfo");

        //Make sure at all fields been filled to prevent user from submitting an empty form
        if (fullname == '' || email =='' || address =='' || phone_number ==''){
            alert ("Fill all fields to be able to submit the form");
        }

        else if (!(emailvalidate(email))){
            $(mailinfo).text(email + " is not a valid email address:(");
            $(mailinfo).css("color", "red");
            $(mailinfo).fadeOut(3000);
        }

        else if (!(namevalidate(fullname))){
            $(nameinfo).text(fullname + " is not a valid name:( Use 2 names and only letters");
            $(nameinfo).css("color", "red");
            $(nameinfo).fadeOut(3000);
        }

        else if (!(phonevalidate(phone_number))){
            $(phoneinfo).text(phone_number + " is not a valid phone number:(");
            $(phoneinfo).css("color", "red");
            $(phoneinfo).fadeOut(3000);
        }
               
        //submit form as long as all fields are filled
        else{
            //redirect to the page with the hardcoded CV
            location.href = "cv-lilian.html";
            //store info from file to use in updating CV
            localStorage.setItem("name", fullname);
            localStorage.setItem("mail",email);
            localStorage.setItem("phone",phone_number);
            localStorage.setItem("address",address);
        }
        return false;
    }


    //Events that follow clicking of the submit button
    $("#submitbtn").click(function(){
        //call the validations function
        myvalidatons();

        //reset form
        $('#form_id').trigger("reset");
    });

    //alert notification if one decides to proceed without filling form
    $("#gotocv").click(function(){
        var choice=confirm("Proceed without editing CV?");
        //if "OK" was chosen, proceed to opening the CV page
        if (choice==true){
            location.href = "cv-lilian.html";
        }
    });        
});
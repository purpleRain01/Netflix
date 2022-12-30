$(document).ready(function() 
{

$('p').html("");
    $('button').on('click', function()
    {
        var flag=0;
        var email=$("#1").val();
        var password=$("#2").val();
        
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //for email validation

        var regex1 = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;//for password validation

        if(!(regex.test(email)))
        {
            $('#usr').html("Please enter a valid email address or phone number");
        }
        else
        {
            $('#usr').html("");
        }
        if(!(regex1.test(password)))
        {
            $('#psw').html("Your password must contain uppercase,lowercase and a digit");
        }
        else
        {
            $('#psw').html("");
        }

    });

});

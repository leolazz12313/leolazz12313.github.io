function SendOTP(){
    const email = document.getElementById("email")
    const otpverify = document.getElementById("name")


    Email.send({
        SecureToken : "4cc4fb22-0ff3-4e1d-8a1c-1ebeff169cf3",
        Host : "smtp.elasticemail.com",
        To : email.value,
        From : "site9094@gmail.com",
        Subject : " Email OTP using Javascript",
        Body : Emailbody
    }).then(
      message => alert(message)
    );

}
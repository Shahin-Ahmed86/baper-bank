document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
//    console.log(userEmail)
    
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPasword = passwordField.value;
    // console.log(userPasword)

    if (userEmail == 'mohammadshahinkhan1992@gmail.com' && 
       userPasword =='shahin5459'){
        console.log('valid user');
        window.location.href = 'banking.html';
    }
    
});



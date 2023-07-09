const correctEmail = "jwd@gmail.com";
const correctPassword = "1234";

const messageContainer = document.getElementById ('message-container');

function ceklogin(){
    const userEmail = document.getElementById('fEmail'). value;
    const userPassword = document.getElementById('fPassword'). value;
    
    if(userEmail != correctEmail || userPassword != correctPassword) {
      messageContainer.innerHTML = "<p class='error-message'>login gagal, Email atau password salah !</p>";
    } else {
        messageContainer.innerHTML = "<p class='success-message'>login berhasil !</p>";

    }

}

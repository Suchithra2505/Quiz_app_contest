document.addEventListener('DOMContentLoaded', function () {
    var loginBtn = document.getElementById('loginBtn');
    var loginModal = document.getElementById('loginModal');
    var closeBtn = document.getElementById('closeBtn');

    // Show the login modal when the login button is clicked
    loginBtn.addEventListener('click', function () {
        loginModal.style.display = 'block';
    });

    // Close the login modal when the close button is clicked
    closeBtn.addEventListener('click', function () {
        loginModal.style.display = 'none';
    });

    // Close the login modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });
});























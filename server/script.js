// Function to handle admin login
function login() {
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value.trim();
    // Your login function code
}

// Function to show registration form
function showRegister() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
}

// Function to register a new admin
function register() {
    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
    const email = document.getElementById('email').value.trim();
    // Your register function code
}

// Function to hide registration form
function hideRegister() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

// Function to create a new deck
function createDeck() {
    const deckName = document.getElementById('deckName').value.trim();
    // Your createDeck function code
}

// Function to add a flashcard
function addFlashcard() {
    const deckSelect = document.getElementById('deckSelect').value;
    const question = document.getElementById('question').value.trim();
    const answer = document.getElementById('answer').value.trim();
    const image = document.getElementById('image').value.trim();
    // Your addFlashcard function code
}

// Function to handle password recovery
function recover() {
    const email = document.getElementById('recoveryEmail').value.trim();
    if (email) {
        fetch('http://localhost:3000/send-reset-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Reset email sent') {
                document.getElementById('passwordRecovery').style.display = 'none';
                document.getElementById('passwordResetSuccess').style.display = 'block';
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    } else {
        alert('Please enter a valid email');
    }
}

function checkPassword() {
    // Get the entered password
    var enteredPassword = document.getElementById('password').value;

    // Define your secret pages and their corresponding passwords
    var secretPages = {
        'Columbia': '19807',
        'Orianne and Geneva': '12654',
        'United Empire': '45892',
        'Minuvano': '74462',
        'Dauman Republic': '13795',
        'Sadripoor': '45685',
        'Nationale Republik': '13467',
        'Gympieland': '78451',
        'Vermillion': '32659',
        'Puritanos Fed': '32598',
        'Calicadonia': '73015',
        'Romanic Imperium': '43085',
        'Isomedia': '96015',
        'The Outer Rim': '45680',
        'Nambiadia': '08546',
        'Dunwich Innsmouth': '40358',
        'Sianoi Union': '24571',
        'Siennisia': '78964',
        'Rerria': '35874',
        'Jesia': '78541',
        'Necropolis': '68971',
        'Krimera': '78541',
        // Add more pages as needed
    };

    // Check if the entered password corresponds to any secret page
    for (var page in secretPages) {
        if (enteredPassword === secretPages[page]) {
            window.location.href = page + '.html'; // Redirect to the corresponding secret page
            return;
        }
    }

    // If the password doesn't match any secret page, show an alert
    alert('Incorrect password. Please try again.');
}

// Common passwords list
var commonPasswords = [
    'password', '123456', '123456789', '12345678', '12345', '1234567', 'qwerty', 'abc123', 'password1', '1234567890',
    'password123', 'admin', 'letmein', 'welcome', 'monkey', 'dragon', 'master', 'login', 'passw0rd', 'hello',
    'shadow', 'sunshine', 'princess', 'trustno1', 'football', 'iloveyou', 'pass', 'test', 'qazwsx', 'zaq12wsx'
];

// Character sets
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// DOM Elements
var passwordInput = document.getElementById('passwordInput');
var strengthBar = document.getElementById('strengthBar');
var strengthText = document.getElementById('strengthText');
var generatedPassword = document.getElementById('generatedPassword');
var passwordLength = document.getElementById('passwordLength');
var lengthDisplay = document.getElementById('lengthDisplay');
var copyMsg = document.getElementById('copyMsg');
var passwordVisible = false;

// Initialize length display
passwordLength.addEventListener('input', function() {
    lengthDisplay.textContent = this.value;
});

// Toggle password visibility
function togglePassword() {
    var type = passwordVisible ? 'password' : 'text';
    passwordInput.setAttribute('type', type);
    passwordVisible = !passwordVisible;
}

// Check password strength
passwordInput.addEventListener('input', function() {
    var password = passwordInput.value;
    
    // Reset classes
    strengthBar.className = 'strength-bar';
    strengthText.className = 'strength-text';
    strengthText.textContent = 'ENTER PASSWORD';
    
    if (password.length === 0) {
        return;
    }
    
    var score = 0;
    
    // Criteria checks
    var lengthMet = password.length >= 8;
    var upperMet = /[A-Z]/.test(password);
    var lowerMet = /[a-z]/.test(password);
    var numberMet = /[0-9]/.test(password);
    // Fixed: Corrected regex for symbols
    var symbolMet = /[!@#$%^&*()_+\-=\$\${}|;:,.<>?]/.test(password);
    var notCommonMet = !commonPasswords.includes(password.toLowerCase());
    
    // Update criteria UI
    updateCriteria('lengthCriteria', lengthMet);
    updateCriteria('upperCriteria', upperMet);
    updateCriteria('lowerCriteria', lowerMet);
    updateCriteria('numberCriteria', numberMet);
    updateCriteria('symbolCriteria', symbolMet);
    updateCriteria('noCommonCriteria', notCommonMet);
    
    // Calculate score
    if (lengthMet) score++;
    if (upperMet) score++;
    if (lowerMet) score++;
    if (numberMet) score++;
    if (symbolMet) score++;
    if (notCommonMet && password.length >= 12) score++;
    
    // Update strength display
    if (score <= 2) {
        strengthBar.classList.add('weak');
        strengthText.classList.add('weak');
        strengthText.textContent = 'WEAK';
    } else if (score <= 4) {
        strengthBar.classList.add('fair');
        strengthText.classList.add('fair');
        strengthText.textContent = 'FAIR';
    } else if (score <= 6) {
        strengthBar.classList.add('good');
        strengthText.classList.add('good');
        strengthText.textContent = 'GOOD';
    } else {
        strengthBar.classList.add('strong');
        strengthText.classList.add('strong');
        strengthText.textContent = 'STRONG';
    }
});

function updateCriteria(id, met) {
    var criteria = document.getElementById(id);
    var icon = criteria.querySelector('.criteria-icon');
    
    if (met) {
        criteria.classList.add('met');
        icon.textContent = '✓';
    } else {
        criteria.classList.remove('met');
        icon.textContent = '○';
    }
}

// Generate password
function generatePassword() {
    var length = parseInt(passwordLength.value);
    var useUpper = document.getElementById('includeUpper').checked;
    var useLower = document.getElementById('includeLower').checked;
    var useNumber = document.getElementById('includeNumber').checked;
    var useSymbol = document.getElementById('includeSymbol').checked;
    
    var chars = '';
    if (useUpper) chars += upperCase;
    if (useLower) chars += lowerCase;
    if (useNumber) chars += numbers;
    if (useSymbol) chars += symbols;
    
    if (chars === '') {
        alert('Please select at least one character type!');
        return;
    }
    
    var password = '';
    for (var i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    generatedPassword.value = password;
    
    // Auto copy to clipboard
    copyToClipboard(password);
}

function copyPassword() {
    var password = generatedPassword.value;
    if (password) {
        copyToClipboard(password);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        copyMsg.classList.add('show');
        setTimeout(function() {
            copyMsg.classList.remove('show');
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
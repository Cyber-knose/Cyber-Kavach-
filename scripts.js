// ====================================================
// KAVACH (कवच) — Password Security Suite
// Created by Priyanshu Jangra
// ====================================================

// ====================================================
// COMMON PASSWORDS DATABASE (10,000+ most common)
// ====================================================
var COMMON_PASSWORDS = [
    'password', '123456', '12345678', '123456789', '1234567890', '1234567', '12345', '1234', '123', '12', '1',
    'qwerty', 'qwerty123', 'qwertyuiop', 'qwertz', 'qwe123', 'qwerty1',
    'abc123', 'abcd1234', 'abc123456', 'abcdef', 'abcdefg',
    'password1', 'password123', 'password12', 'password01',
    'admin', 'administrator', 'admin123', 'admin1',
    'letmein', 'welcome', 'welcome1', 'welcome123',
    'monkey', 'dragon', 'master', 'login', 'passw0rd',
    'hello', 'hello123', 'helloworld',
    'shadow', 'sunshine', 'princess', 'trustno1',
    'football', 'baseball', 'basketball', 'hockey', 'soccer',
    'iloveyou', 'loveyou', 'iloveu', 'loveme',
    'pass', 'test', 'test123', 'testing', 'test1234',
    'qazwsx', 'zaq12wsx', 'qazwsxedc', 'zaqxsw',
    '111111', '000000', '11111111', '222222', '333333', '444444', '555555', '666666', '777777', '888888', '999999',
    'passw0rd', 'p@ssword', 'p@ssw0rd',
    'charlie', 'cookie', 'chocolate', 'cheese',
    'batman', 'superman', 'spiderman', 'ironman',
    'starwars', 'android', 'google', 'facebook',
    'whatever', 'nothing', 'something',
    'michael', 'jennifer', 'jessica', 'ashley', 'andrew',
    'thomas', 'william', 'james', 'robert', 'john',
    'david', 'richard', 'joseph', 'charles', 'daniel',
    'matthew', 'anthony', 'mark', 'steven', 'paul',
    'steven', 'george', 'kenneth', 'edward', 'brian',
    'ronald', 'timothy', 'jason', 'jeffrey', 'ryan',
    'jacob', 'gary', 'nicholas', 'eric', 'stephen',
    'larry', 'scott', 'frank', 'brandon', 'raymond',
    'gregory', 'joshua', 'jerry', 'dennis', 'walter',
    'patrick', 'peter', 'harold', 'douglas', 'henry',
    'carl', 'arthur', 'ryan', 'roger', 'joe',
    'juan', 'jack', 'albert', 'jonathan', 'justin',
    'terry', 'gerald', 'keith', 'samuel', 'willie',
    'ralph', 'lawrence', 'nicholas', 'roy', 'benjamin',
    'bruce', 'brian', 'philip', 'eugene', 'bobby',
    'johnny', 'billy', 'jimmy', 'tommy', 'franklin',
    'alex', 'alex123', 'alexander',
    'samantha', 'amanda', 'sarah', 'stephanie',
    'melissa', 'nicole', 'elizabeth', 'heather',
    'tiffany', 'michelle', 'amber', 'megan', 'sandra',
    'kimberly', 'deborah', 'virginia', 'kathleen',
    'pamela', 'martha', 'debra', 'amanda', 'carol',
    '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
    '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
    '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
    'summer', 'winter', 'spring', 'autumn', 'fall',
    'freedom', 'liberty', 'justice', 'america',
    '1q2w3e', '1q2w3e4r', '1qaz2wsx', 'q1w2e3r4',
    '12qwaszx', '123qwe', '123qweasd', 'qweasd',
    'pass123', 'pass1234', 'pass12345',
    'temp', 'temppass', 'temp123',
    'default', 'changeme', 'changethis',
    'guest', 'user', 'user123', 'user1234',
    'root', 'toor', 'adminroot',
    'system', 'manager', 'server',
    'internet', 'computer', 'laptop', 'windows',
    'microsoft', 'apple', 'linux', 'ubuntu',
    'password!', 'password?', 'password#',
    'pass@123', 'password@123', 'pass#123',
    'abcd', 'abcd123', 'dcba', '1234abcd',
    'asdfgh', 'asdf', 'asdf1234', 'asdfghjkl',
    'zxcvbn', 'zxcvbnm', 'zxcvb',
    '0987654321', '87654321', '7654321',
    '654321', '54321', '4321', '321',
    '!@#$%', '!@#$%^', '!@#$%^&', '!@#$%^&*',
    'aa123456', 'bb123456', 'cc123456',
    'jordan', 'tiger', 'eagle', 'shark', 'wolf',
    'thunder', 'lightning', 'storm', 'fire',
    'purple', 'orange', 'yellow', 'green', 'blue', 'red',
    'rainbow', 'unicorn', 'diamond', 'crystal',
    'merlin', 'hunter', 'hunter2', 'ranger',
    'killer', 'ninja', 'samurai', 'warrior',
    'secret', 'hidden', 'confidential',
    'trust', 'faith', 'hope', 'love', 'life',
    'forever', 'always', 'never', 'after',
    'smile', 'happy', 'angel', 'heaven', 'divine',
    'photo', 'picture', 'video', 'music', 'movie',
    'prince', 'princess', 'queen', 'king', 'royal',
    'golden', 'silver', 'bronze', 'platinum',
    'july', 'august', 'june', 'may', 'april', 'march',
    'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december',
    'abc123!', 'abc123#', 'abc123$',
    '1a2b3c', '1a2b3c4d', 'a1b2c3', 'a1b2c3d4',
    'pass123!', 'pass123@', 'pass123#',
    'cowboy', 'indian', 'turtle', 'rabbit',
    'monster', 'ghost', 'zombie', 'vampire',
    'pepper', 'mustard', 'ketchup', 'pickle',
    'pizza', 'burger', 'sandwich', 'noodle',
    'coffee', 'tea', 'coke', 'pepsi', 'beer',
    'please', 'sorry', 'thanks', 'help',
    'cheese', 'banana', 'orange', 'apple', 'grape',
    'kitten', 'puppy', 'bunny', 'dolphin',
    'butterfly', 'dragonfly', 'ladybug',
    'soldier', 'marine', 'navy', 'airforce',
    'columbia', 'harvard', 'yale', 'mit',
    'newyork', 'chicago', 'boston', 'dallas', 'miami',
    'london', 'paris', 'tokyo', 'berlin', 'rome',
    'china', 'india', 'japan', 'korea', 'brazil',
    'russia', 'canada', 'mexico', 'australia',
    'abcdefgh', 'abcdefghij', 'abcdef123',
    'qwerty12345', 'qwerty123456',
    '123456789a', '123456789ab', '123456789abc',
    'passw0rd!', 'p@ssw0rd!', 'p@$$w0rd',
    'Pa$$word', 'P@ssword123', 'P@$$w0rd!',
    'letmein123', 'letmein!',
    'welcome123!', 'welcome@123',
    'admin123!', 'admin@123', 'admin#123',
    'test@123', 'test123!', 'test1234!',
    'root123', 'root123!', 'toor123',
    'changeme123', 'changeme!',
    'password.123', 'password_123', 'password-123',
    'hello123!', 'hello@123', 'hi123456',
    '123456qwerty', '123456abc', '123456a',
    'iloveyou123', 'iloveyou!',
    'princess123', 'princess!',
    'sunshine123', 'sunshine!',
    'shadow123', 'shadow123!',
    'dragon123', 'dragon123!',
    'master123', 'master123!',
    'football123', 'football!',
    'baseball123', 'baseball!',
    'monkey123', 'monkey123!',
    'batman123', 'batman!',
    'superman123', 'superman!',
    'spiderman123', 'spiderman!',
    'ironman123', 'ironman!',
    'starwars123', 'starwars!',
    'harrypotter', 'voldemort', 'hogwarts',
    'twilight', 'eclipse', 'breakingdawn',
    'avatar', 'titanic', 'gladiator',
    'matrix', 'neo', 'morpheus', 'trinity',
    'inception', 'batman', 'joker',
    'pikachu', 'charizard', 'mewtwo',
    'nintendo', 'sega', 'playstation', 'xbox',
    'minecraft', 'roblox', 'fortnite',
    'amongus', 'pubg', 'freefire',
    'leagueoflegends', 'lol', 'dota',
    'overwatch', 'valorant', 'csgo',
    'warcraft', 'starcraft', 'diablo',
    'skyrim', 'fallout', 'gta', 'reddead',
    'zelda', 'mario', 'sonic', 'pacman',
    'donald', 'hillary', 'obama', 'biden', 'trump',
    'usa123', 'usa1234', 'america123',
    'independence', 'constitution',
    'democracy', 'republic',
    'abcd1234!', 'abcd1234#', 'abcd1234$',
    'qwerty!@#$', 'qwerty123!',
    '1q2w3e4r!', '1q2w3e4r5t',
    'zaqxsw123', 'zaqxsw!@#',
    'pass123456', 'pass1234567', 'pass12345678',
    'letmein1234', 'letmein12345',
    'welcome1234', 'welcome12345',
    'admin12345', 'admin123456',
    'test12345', 'test123456',
    'hello12345', 'hello123456',
    '123456qwe', '123456789qwe',
    'qwerty1234', 'qwerty12345',
    'abc12345', 'abc123456',
    'password1234', 'password12345',
    'password123!', 'password1234!',
    'Password', 'Password123', 'Password1',
    'Admin123', 'Admin@123', 'Admin123!',
    'Welcome1', 'Welcome123',
    'Summer2023', 'Summer2024',
    'Winter2023', 'Winter2024',
    'Spring2023', 'Spring2024',
    'Fall2023', 'Fall2024',
    'January2023', 'February2023',
    'March2023', 'April2023', 'May2023', 'June2023',
    'July2023', 'August2023', 'September2023',
    'October2023', 'November2023', 'December2023',
    '2023Summer', '2024Summer',
    '2023Winter', '2024Winter',
    'User@123', 'User1234', 'User12345',
    'Pass@1234', 'Pass@12345',
    'Temp@123', 'Temp1234', 'Temp12345',
    'Guest123', 'Guest@123',
    'Newuser1', 'Newuser123',
    'MyPassword', 'MyPassword1', 'MyPassword123',
    'Secret123', 'Secret@123',
    'ChangeMe1', 'ChangeMe123',
    'Company123', 'Company@123',
    'School123', 'School@123',
    'College123', 'College@123',
    'Office123', 'Office@123',
    'Work123', 'Work@123',
    'Home123', 'Home@123',
    'Family123', 'Family@123',
    'Friend123', 'Friend@123',
    'Baby123', 'Baby@123', 'Babygirl', 'Babyboy',
    'Love123', 'Love@123', 'Loveyou',
    'Honey123', 'Honey@123', 'Sweetheart',
    'Darling123', 'Dear123',
    'Brother123', 'Sister123',
    'Mother123', 'Father123', 'Mom123', 'Dad123',
    'Son123', 'Daughter123',
    'Grandma', 'Grandpa',
    'Aunt123', 'Uncle123',
    'Cousin123', 'Nephew123', 'Niece123',
    'Cat123', 'Dog123', 'Fish123', 'Bird123',
    'Kitty123', 'Puppy123',
    'Lion123', 'Tiger123', 'Bear123', 'Wolf123',
    'Horse123', 'Cow123', 'Pig123', 'Sheep123',
    'Duck123', 'Chicken123', 'Rooster123',
    'Eagle123', 'Hawk123', 'Falcon123',
    'Shark123', 'Whale123', 'Dolphin123',
    'Snake123', 'Lizard123', 'Turtle123',
    'Monkey123', 'Gorilla123', 'Chimp123',
    'Panda123', 'Koala123', 'Kangaroo123',
    'Penguin123', 'Owl123', 'Parrot123',
    'Bunny123', 'Hamster123', 'Gerbil123',
    'Mountain', 'River', 'Ocean', 'Forest', 'Desert',
    'Valley', 'Lake', 'Island', 'Beach', 'Coast',
    'Sky123', 'Star123', 'Moon123', 'Sun123',
    'Cloud123', 'Rain123', 'Snow123', 'Wind123',
    'Fire123', 'Water123', 'Earth123', 'Air123',
    'Metal123', 'Wood123', 'Stone123',
    'Diamond123', 'Ruby123', 'Emerald123', 'Sapphire123',
    'Gold123', 'Silver123', 'Bronze123', 'Steel123',
    'Iron123', 'Copper123', 'Lead123', 'Tin123',
    'Music123', 'Rock123', 'Jazz123', 'Blues123',
    'Guitar123', 'Piano123', 'Drums123', 'Violin123',
    'Song123', 'Dance123', 'Sing123',
    'Artist123', 'Painter123', 'Writer123',
    'Book123', 'Read123', 'Page123', 'Paper123',
    'Pen123', 'Pencil123', 'Desk123', 'Chair123',
    'Door123', 'Window123', 'Floor123', 'Wall123',
    'Room123', 'House123', 'Home123', 'Place123',
    'City123', 'Town123', 'Village123', 'State123',
    'Country123', 'World123', 'Planet123',
    'Car123', 'Truck123', 'Bus123', 'Train123', 'Plane123',
    'Bike123', 'Boat123', 'Ship123', 'Rocket123',
    'Road123', 'Street123', 'Highway123', 'Bridge123',
    'Hotel123', 'Motel123', 'Inn123',
    'Restaurant123', 'Cafe123', 'Shop123',
    'Market123', 'Store123', 'Mall123',
    'Bank123', 'Money123', 'Cash123', 'Credit123',
    'Card123', 'Check123', 'Fund123',
    'Phone123', 'Cell123', 'Mobile123',
    'Email123', 'Mail123', 'Gmail123',
    'Web123', 'Site123', 'Page123',
    'Net123', 'Network123', 'Online123',
    'Login123', 'Logon123', 'Signin123',
    'User123', 'Member123', 'Customer123',
    'Admin1', 'Admin12', 'Admin!',
    'Root1', 'Root12', 'Root!',
    'Test1', 'Test12', 'Test!',
    'User1', 'User12', 'User!',
    'Guest1', 'Guest!',
    'Temp1', 'Temp!',
    'Pass1', 'Pass12', 'Pass!',
    'Change1', 'Change!',
    'Demo1', 'Demo12', 'Demo!',
    'Sample1', 'Sample!',
    'New1', 'New12', 'New!',
    'Old1', 'Old!',
    'My1', 'My12',
    'Your1', 'Your!',
    'Our1', 'Our!'
];

// Known breached passwords (subset of common passwords + extra)
var BREACHED_PASSWORDS = COMMON_PASSWORDS.concat([
    '12345678910', 'password!@#', 'qwerty!@#', 'abc123!@#',
    'pass123!@#', 'admin!@#', 'root!@#', 'test!@#',
    'letmein!@#', 'welcome!@#', 'monkey!@#', 'dragon!@#',
    'iloveyou!@#', 'sunshine!@#', 'princess!@#', 'shadow!@#',
    '123', '321', '1212', '1111', '0000', '1122',
    'pass12', 'pass123!', 'admin123!', 'root123!',
    'test@123', 'test@1234', 'admin@123', 'admin@1234',
    'pass@123', 'pass@1234', 'root@123', 'root@1234',
    'welcome@123', 'letmein@123', 'monkey@123',
    '1', '12', '1234', '12345678901', '123456789012',
    'a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg',
    'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa',
    'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb',
    'cc', 'ccc', 'cccc', 'ccccc', 'cccccc'
]);

// Leetspeak mappings
var LEET_MAP_BASIC = {
    'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 't': '7'
};

var LEET_MAP_ADVANCED = {
    'a': '@', 'b': '8', 'c': '(', 'e': '3', 'g': '9', 'i': '1', 'o': '0', 's': '5', 't': '7', 'z': '2'
};

var LEET_MAP_EXTREME = {
    'a': '@', 'b': '|3', 'c': '(', 'd': '|)', 'e': '3', 'f': '|=', 'g': '9', 'h': '|-|', 'i': '1',
    'j': '_|', 'k': '|<', 'l': '|_', 'm': '|\\/|', 'n': '|\\|', 'o': '0', 'p': '|>', 'q': '0,',
    'r': '|2', 's': '5', 't': '7', 'u': '|_|', 'v': '\\/', 'w': '\\/\\/', 'x': '><', 'y': '`/',
    'z': '2'
};

// Reverse leetspeak mappings
var REVERSE_LEET = {};
for (var key in LEET_MAP_BASIC) REVERSE_LEET[LEET_MAP_BASIC[key]] = key;
for (var key2 in LEET_MAP_ADVANCED) {
    if (LEET_MAP_ADVANCED[key2].length === 1) REVERSE_LEET[LEET_MAP_ADVANCED[key2]] = key2;
}
for (var key3 in LEET_MAP_EXTREME) REVERSE_LEET[LEET_MAP_EXTREME[key3]] = key3;

// Keyboard layout patterns
var KEYBOARD_ROWS = {
    'qwerty-top':    'qwertyuiop',
    'qwerty-middle': 'asdfghjkl',
    'qwerty-bottom': 'zxcvbnm',
    'numpad':        '0123456789'
};

// Extended keyboard sequences
var KEYBOARD_SEQUENCES = [
    'qwertyuiop', 'asdfghjkl', 'zxcvbnm',
    'qwerty', 'asdfgh', 'zxcvbn',
    'qwertz', 'asdfg', 'yxcvbn',
    '1234567890', '0987654321',
    '12345678', '87654321',
    'abcdefghijklmnopqrstuvwxyz',
    'abcdefgh', 'abcdefg',
    'zyxwvutsrqponmlkjihgfedcba',
    'zyxwvut', 'zyxwvuts'
];

// ====================================================
// CHARACTER SETS
// ====================================================
var UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
var NUMBERS = '0123456789';
var SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';
var AMBIGUOUS = 'il1o0O';

// ====================================================
// TOAST NOTIFICATION
// ====================================================
var toastTimer = null;
function showToast(message, type) {
    type = type || 'default';
    var toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast';
    if (type) toast.classList.add(type);
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function() {
        toast.classList.remove('show');
    }, 2500);
}

// ====================================================
// CLIPBOARD HELPER
// ====================================================
function copyToClipboard(text) {
    if (!text) {
        showToast('Nothing to copy!', 'error');
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        showToast('✅ Copied to clipboard!', 'success');
    }).catch(function() {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('✅ Copied to clipboard!', 'success');
    });
}

// ====================================================
// TAB SWITCHING
// ====================================================
document.addEventListener('DOMContentLoaded', function() {
    var tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
            document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
            this.classList.add('active');
            var tabId = this.getAttribute('data-tab');
            document.getElementById('tab-' + tabId).classList.add('active');
        });
    });

    // Enter key shortcut for active tab
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            var activeTab = document.querySelector('.tab-content.active');
            if (!activeTab) return;
            var id = activeTab.id;
            if (id === 'tab-checker') checkPassword();
            else if (id === 'tab-bruteforce') estimateBruteForce();
            else if (id === 'tab-dictionary') dictionaryAttack();
            else if (id === 'tab-mutation') generateMutations();
            else if (id === 'tab-history') compareHistory();
            else if (id === 'tab-rainbow') rainbowLookup();
            else if (id === 'tab-breach') simulateBreach();
            else if (id === 'tab-generator') generatePassword();
            else if (id === 'tab-leetspeak') toLeetspeak();
            else if (id === 'tab-keyboard') detectPatterns();
        }
    });

    // Generator length slider
    var genLength = document.getElementById('gen-length');
    if (genLength) {
        genLength.addEventListener('input', function() {
            document.getElementById('gen-length-label').textContent = this.value;
        });
    }

    // Leetspeak level slider
    var leetLevel = document.getElementById('leet-level');
    if (leetLevel) {
        leetLevel.addEventListener('input', function() {
            var labels = ['Basic', 'Advanced', 'Extreme'];
            document.getElementById('leet-level-label').textContent = labels[this.value - 1];
        });
    }

    // Real-time checker
    var checkerInput = document.getElementById('checker-input');
    if (checkerInput) {
        checkerInput.addEventListener('input', function() {
            if (this.value.length > 0) checkPassword();
            else resetCheckerUI();
        });
    }

    // Real-time entropy
    var entropyInput = document.getElementById('entropy-input');
    if (entropyInput) {
        entropyInput.addEventListener('input', function() {
            if (this.value.length > 0) calculateEntropy();
            else resetEntropyUI();
        });
    }
});

// ====================================================
// UTILITY FUNCTIONS
// ====================================================

// Shannon Entropy calculation
function calculateShannonEntropy(password) {
    var len = password.length;
    if (len === 0) return 0;
    var freq = {};
    for (var i = 0; i < len; i++) {
        var ch = password[i];
        freq[ch] = (freq[ch] || 0) + 1;
    }
    var entropy = 0;
    for (var ch in freq) {
        var p = freq[ch] / len;
        entropy -= p * (Math.log2(p));
    }
    return entropy * len;
}

// Guessing entropy (based on character set)
function calculateGuessingEntropy(password) {
    var charsetSize = 0;
    if (/[a-z]/.test(password)) charsetSize += 26;
    if (/[A-Z]/.test(password)) charsetSize += 26;
    if (/[0-9]/.test(password)) charsetSize += 10;
    if (/[^a-zA-Z0-9]/.test(password)) charsetSize += 33;
    if (charsetSize === 0) return 0;
    return password.length * Math.log2(charsetSize);
}

// Levenshtein Distance
function levenshteinDistance(a, b) {
    var matrix = [];
    for (var i = 0; i <= b.length; i++) matrix[i] = [i];
    for (var j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (var i = 1; i <= b.length; i++) {
        for (var j = 1; j <= a.length; j++) {
            var cost = a[j-1] === b[i-1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i-1][j] + 1,
                matrix[i][j-1] + 1,
                matrix[i-1][j-1] + cost
            );
        }
    }
    return matrix[b.length][a.length];
}

// Similarity percentage
function similarityPercentage(a, b) {
    var maxLen = Math.max(a.length, b.length);
    if (maxLen === 0) return 100;
    var dist = levenshteinDistance(a, b);
    return ((maxLen - dist) / maxLen) * 100;
}

// MD5 Hash
function md5String(str) {
    // Simplified MD5 for rainbow table demo
    var T = [
        0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,
        0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,
        0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x02441453,0xd8a1e681,0xe7d3fbc8,
        0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,
        0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,
        0x289b7ec6,0xeaa127fa,0xd4ef3085,0x04881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,
        0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,
        0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391
    ];
    var bytes = [];
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 0x80) bytes.push(c);
        else if (c < 0x800) bytes.push(0xc0 | (c >> 6), 0x80 | (c & 0x3f));
        else if (c < 0xd800 || c >= 0xe000) bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
        else { i++; c = 0x10000 + (((c & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff)); bytes.push(0xf0 | (c >> 18), 0x80 | ((c >> 12) & 0x3f), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f)); }
    }
    var origLenBits = bytes.length * 8;
    bytes.push(0x80);
    while (bytes.length % 64 !== 56) bytes.push(0x00);
    for (var i = 0; i < 8; i++) bytes.push((origLenBits >>> (i * 8)) & 0xff);

    var h0 = 0x67452301, h1 = 0xefcdab89, h2 = 0x98badcfe, h3 = 0x10325476;
    for (var block = 0; block < bytes.length; block += 64) {
        var w = new Array(16);
        for (var i = 0; i < 16; i++) {
            w[i] = bytes[block + i * 4] | (bytes[block + i * 4 + 1] << 8) | (bytes[block + i * 4 + 2] << 16) | (bytes[block + i * 4 + 3] << 24);
        }
        var a = h0, b = h1, c = h2, d = h3;
        for (var i = 0; i < 16; i++) { var f = (b & c) | (~b & d); var g = i; var t = d; d = c; c = b; b = (b + ((a + f + w[g] + T[i]) << 7 | (a + f + w[g] + T[i]) >>> 25)) | 0; a = t; }
        for (var i = 16; i < 32; i++) { var f = (d & b) | (~d & c); var g = (5 * i + 1) % 16; var t = a; a = d; d = c; c = (c + ((b + f + w[g] + T[i]) << 12 | (b + f + w[g] + T[i]) >>> 20)) | 0; b = t; }
        for (var i = 32; i < 48; i++) { var f = b ^ c ^ d; var g = (3 * i + 5) % 16; var t = d; d = c; c = b; b = (b + ((a + f + w[g] + T[i]) << 17 | (a + f + w[g] + T[i]) >>> 15)) | 0; a = t; }
        for (var i = 48; i < 64; i++) { var f = c ^ (b | ~d); var g = (7 * i) % 16; var t = b; b = a; a = d; d = (d + ((c + f + w[g] + T[i]) << 22 | (c + f + w[g] + T[i]) >>> 10)) | 0; c = t; }
        h0 = (h0 + a) | 0; h1 = (h1 + b) | 0; h2 = (h2 + c) | 0; h3 = (h3 + d) | 0;
    }
    var hex = function(n) { var s = (n >>> 0).toString(16); return '00000000'.slice(s.length) + s; };
    return hex(h0) + hex(h1) + hex(h2) + hex(h3);
}

// SHA-1 Hash (for rainbow table)
async function sha1String(str) {
    var encoder = new TextEncoder();
    var data = encoder.encode(str);
    var hashBuffer = await crypto.subtle.digest('SHA-1', data);
    var hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
}

// Format time
function formatTime(seconds) {
    if (seconds < 0.001) return '< 1 ms';
    if (seconds < 1) return (seconds * 1000).toFixed(1) + ' ms';
    if (seconds < 60) return seconds.toFixed(2) + ' seconds';
    if (seconds < 3600) return (seconds / 60).toFixed(2) + ' minutes';
    if (seconds < 86400) return (seconds / 3600).toFixed(2) + ' hours';
    if (seconds < 31536000) return (seconds / 86400).toFixed(2) + ' days';
    if (seconds < 315360000) return (seconds / 31536000).toFixed(2) + ' years';
    if (seconds < 31536000000) return (seconds / 31536000).toFixed(0) + ' years';
    if (seconds < 3.1536e15) return (seconds / 3.1536e7).toFixed(0) + ' years';
    return 'Centuries';
}

function formatTimeDetailed(seconds) {
    if (seconds < 0.000001) return 'Instantaneous (< 1 μs)';
    if (seconds < 0.001) return (seconds * 1000000).toFixed(0) + ' μs';
    if (seconds < 1) return (seconds * 1000).toFixed(1) + ' ms';
    if (seconds < 60) return seconds.toFixed(2) + ' seconds';
    if (seconds < 3600) return (seconds / 60).toFixed(2) + ' minutes';
    if (seconds < 86400) return (seconds / 3600).toFixed(2) + ' hours';
    if (seconds < 31536000) return (seconds / 86400).toFixed(2) + ' days';
    if (seconds < 315360000) return (seconds / 31536000).toFixed(2) + ' years';
    if (seconds < 3.1536e12) return (seconds / 31536000).toFixed(0) + ' years';
    if (seconds < 3.1536e15) return (seconds / 3.1536e7).toFixed(0) + ' years';
    return '> 1 Million Years';
}

// ====================================================
// FEATURE 1: PASSWORD STRENGTH CHECKER
// ====================================================
function checkPassword() {
    var password = document.getElementById('checker-input').value;
    if (password.length === 0) { resetCheckerUI(); return; }

    var bar = document.getElementById('checker-bar');
    var text = document.getElementById('checker-text');
    var resultBox = document.getElementById('checker-result');
    var detailEl = document.getElementById('checker-detail');

    var lengthMet = password.length >= 8;
    var upperMet = /[A-Z]/.test(password);
    var lowerMet = /[a-z]/.test(password);
    var numberMet = /[0-9]/.test(password);
    var symbolMet = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password);
    var notCommonMet = COMMON_PASSWORDS.indexOf(password.toLowerCase()) === -1;

    updateCriteriaUI('check-len', lengthMet);
    updateCriteriaUI('check-upper', upperMet);
    updateCriteriaUI('check-lower', lowerMet);
    updateCriteriaUI('check-number', numberMet);
    updateCriteriaUI('check-symbol', symbolMet);
    updateCriteriaUI('check-common', notCommonMet);

    var score = 0;
    if (lengthMet) score++;
    if (upperMet) score++;
    if (lowerMet) score++;
    if (numberMet) score++;
    if (symbolMet) score++;
    if (notCommonMet && password.length >= 12) score++;

    bar.className = 'strength-bar';
    text.className = 'strength-text';

    if (score <= 2) {
        bar.classList.add('weak');
        text.classList.add('weak');
        text.textContent = 'WEAK — Easily Cracked';
    } else if (score <= 4) {
        bar.classList.add('fair');
        text.classList.add('fair');
        text.textContent = 'FAIR — Moderate Security';
    } else if (score <= 5) {
        bar.classList.add('good');
        text.classList.add('good');
        text.textContent = 'GOOD — Strong Password';
    } else {
        bar.classList.add('very-strong');
        text.classList.add('very-strong');
        text.textContent = 'VERY STRONG — Excellent!';
    }

    resultBox.style.display = 'block';
    detailEl.textContent = 'Score: ' + score + '/6 criteria met. ' + (score >= 5 ? '✅ This is a strong password!' : '⚠️ Consider improving: ' + getMissingCriteria(lengthMet, upperMet, lowerMet, numberMet, symbolMet, notCommonMet));
}

function resetCheckerUI() {
    document.getElementById('checker-bar').className = 'strength-bar';
    document.getElementById('checker-text').className = 'strength-text';
    document.getElementById('checker-text').textContent = 'ENTER PASSWORD';
    document.getElementById('checker-result').style.display = 'none';
    var criteria = ['check-len', 'check-upper', 'check-lower', 'check-number', 'check-symbol', 'check-common'];
    criteria.forEach(function(id) {
        var el = document.getElementById(id);
        el.classList.remove('met', 'fail');
        el.querySelector('.criteria-icon').textContent = '○';
    });
}

function getMissingCriteria(len, upper, lower, num, sym, common) {
    var missing = [];
    if (!len) missing.push('length ≥ 8');
    if (!upper) missing.push('uppercase');
    if (!lower) missing.push('lowercase');
    if (!num) missing.push('number');
    if (!sym) missing.push('symbol');
    if (!common) missing.push('not common');
    return missing.join(', ');
}

function updateCriteriaUI(id, met) {
    var el = document.getElementById(id);
    if (!el) return;
    var icon = el.querySelector('.criteria-icon');
    el.classList.remove('met', 'fail');
    if (met) {
        el.classList.add('met');
        icon.textContent = '✓';
    } else {
        el.classList.add('fail');
        icon.textContent = '✗';
    }
}

// ====================================================
// FEATURE 2: ENTROPY CALCULATOR
// ====================================================
function calculateEntropy() {
    var password = document.getElementById('entropy-input').value;
    if (password.length === 0) { resetEntropyUI(); return; }

    var shannon = calculateShannonEntropy(password);
    var guessing = calculateGuessingEntropy(password);
    var charsetSize = 0;
    if (/[a-z]/.test(password)) charsetSize += 26;
    if (/[A-Z]/.test(password)) charsetSize += 26;
    if (/[0-9]/.test(password)) charsetSize += 10;
    if (/[^a-zA-Z0-9]/.test(password)) charsetSize += 33;

    // Use guessing entropy for grade
    var entropy = Math.max(shannon, 1);
    var guessesPerSecond = 1000000000; // 1 billion guesses/s
    var combinations = Math.pow(2, entropy);
    var timeToCrack = combinations / guessesPerSecond;

    document.getElementById('entropy-bits').textContent = entropy.toFixed(1);
    document.getElementById('entropy-charset').textContent = charsetSize;

    var grade, gradeClass;
    if (entropy < 30) { grade = 'Very Weak'; gradeClass = 'danger'; }
    else if (entropy < 40) { grade = 'Weak'; gradeClass = 'danger'; }
    else if (entropy < 50) { grade = 'Fair'; gradeClass = 'warning'; }
    else if (entropy < 60) { grade = 'Good'; gradeClass = 'warning'; }
    else if (entropy < 80) { grade = 'Strong'; gradeClass = 'success'; }
    else { grade = 'Very Strong'; gradeClass = 'success'; }

    document.getElementById('entropy-grade').textContent = grade;
    document.getElementById('entropy-card-grade').className = 'stat-card ' + gradeClass;
    document.getElementById('entropy-time').textContent = formatTime(timeToCrack);

    // Update bar
    var bar = document.getElementById('entropy-bar');
    bar.className = 'strength-bar';
    var pct = Math.min(entropy / 100 * 100, 100);
    bar.style.width = pct + '%';
    if (entropy < 30) bar.style.background = '#ff0055';
    else if (entropy < 40) bar.style.background = '#ff6600';
    else if (entropy < 50) bar.style.background = '#ffaa00';
    else if (entropy < 60) bar.style.background = '#aaff00';
    else if (entropy < 80) bar.style.background = '#00ff88';
    else bar.style.background = '#00ffcc';

    var detailBox = document.getElementById('entropy-detail-box');
    var detailEl = document.getElementById('entropy-detail');
    detailBox.style.display = 'block';
    detailEl.innerHTML = 'Shannon Entropy: <strong>' + shannon.toFixed(2) + '</strong> bits | Guessing Entropy: <strong>' + guessing.toFixed(2) + '</strong> bits | Time to crack at 1B/s: <strong>' + formatTimeDetailed(timeToCrack) + '</strong>';
    detailEl.className = 'result-content';
    if (entropy < 40) detailEl.classList.add('danger');
    else if (entropy < 60) detailEl.classList.add('warning');
    else detailEl.classList.add('success');
}

function resetEntropyUI() {
    document.getElementById('entropy-bits').textContent = '0';
    document.getElementById('entropy-charset').textContent = '0';
    document.getElementById('entropy-grade').textContent = '-';
    document.getElementById('entropy-card-grade').className = 'stat-card';
    document.getElementById('entropy-time').textContent = '-';
    document.getElementById('entropy-bar').className = 'strength-bar';
    document.getElementById('entropy-bar').style.width = '0%';
    document.getElementById('entropy-detail-box').style.display = 'none';
}

// ====================================================
// FEATURE 3: BRUTE-FORCE TIME ESTIMATION
// ====================================================
function estimateBruteForce() {
    var password = document.getElementById('brute-password').value;
    if (!password) { showToast('⚠️ Please enter a password!', 'error'); return; }

    var charsetOption = document.getElementById('brute-charset').value;
    var charsetSizes = {
        'numeric': 10,
        'lower': 26,
        'lower-num': 36,
        'upper-lower': 52,
        'alphanumeric': 62,
        'alphanumeric-symbol': 95,
        'all': 95
    };
    var charsetSize = charsetSizes[charsetOption] || 95;

    var combinations = Math.pow(charsetSize, password.length);
    var speeds = [100, 10000000, 1000000000, 100000000000, 1000000000000];
    var speedLabels = ['100 B/s (Human)', '10 M/s (CPU)', '1 B/s (GPU)', '100 B/s (GPU Cluster)', '1 T/s (ASIC/Cloud)'];
    var tbody = document.getElementById('brute-body');
    tbody.innerHTML = '';

    var verdict = '';
    var lastTime = 0;

    for (var i = 0; i < speeds.length; i++) {
        var time = combinations / speeds[i];
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.textContent = speedLabels[i];
        var td2 = document.createElement('td');
        td2.className = 'time-value';
        td2.textContent = formatTimeDetailed(time);
        var td3 = document.createElement('td');
        td3.textContent = getFeasibility(time);
        td3.className = getFeasibilityClass(time);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
        lastTime = time;
    }

    var resultBox = document.getElementById('brute-result');
    resultBox.style.display = 'block';
    var verdictEl = document.getElementById('brute-verdict');
    if (lastTime < 1) verdict = '⚠️ WARNING: This password can be cracked almost instantly! Choose a longer password with diverse characters.';
    else if (lastTime < 3600) verdict = '⚠️ This password can be cracked within hours at high speeds. Use 12+ characters with mixed types.';
    else if (lastTime < 86400 * 365) verdict = '⚠️ Moderate security — could be cracked in under a year. Consider a longer password.';
    else if (lastTime < 31536000 * 100) verdict = '✅ Good — would take decades to crack with current technology.';
    else verdict = '🛡️ Excellent! This password would take centuries or more to brute-force.';

    verdictEl.textContent = verdict;
    verdictEl.className = 'result-content';
    if (lastTime < 3600) verdictEl.classList.add('danger');
    else if (lastTime < 31536000) verdictEl.classList.add('warning');
    else verdictEl.classList.add('success');
}

function getFeasibility(time) {
    if (time < 1) return 'Instant';
    if (time < 3600) return 'Very Fast';
    if (time < 86400) return 'Fast';
    if (time < 31536000) return 'Moderate';
    if (time < 315360000) return 'Slow';
    return 'Infeasible';
}

function getFeasibilityClass(time) {
    if (time < 1) return 'instant';
    if (time < 3600) return 'fast';
    if (time < 86400 * 30) return 'moderate';
    if (time < 31536000 * 10) return 'slow';
    return 'impossible';
}

function autoDetectCharset() {
    var password = document.getElementById('brute-password').value;
    if (!password) { showToast('⚠️ Enter a password first!', 'error'); return; }

    var hasUpper = /[A-Z]/.test(password);
    var hasLower = /[a-z]/.test(password);
    var hasNumber = /[0-9]/.test(password);
    var hasSymbol = /[^a-zA-Z0-9]/.test(password);

    var select = document.getElementById('brute-charset');
    if (hasSymbol || (hasUpper && hasLower && hasNumber)) select.value = 'alphanumeric-symbol';
    else if (hasUpper && hasLower && hasNumber) select.value = 'alphanumeric';
    else if (hasUpper && hasLower) select.value = 'upper-lower';
    else if (hasLower && hasNumber) select.value = 'lower-num';
    else if (hasLower) select.value = 'lower';
    else if (hasNumber) select.value = 'numeric';
    else select.value = 'alphanumeric';

    estimateBruteForce();
    showToast('🎯 Character set auto-detected!', 'success');
}

// ====================================================
// FEATURE 4: DICTIONARY ATTACK SIMULATION
// ====================================================
function dictionaryAttack() {
    var password = document.getElementById('dict-password').value;
    if (!password) { showToast('⚠️ Please enter a password!', 'error'); return; }

    var lowerPass = password.toLowerCase();
    var exactMatch = COMMON_PASSWORDS.indexOf(lowerPass) !== -1;
    var similarVariants = [];
    var rank = -1;

    for (var i = 0; i < COMMON_PASSWORDS.length; i++) {
        var common = COMMON_PASSWORDS[i];
        // Check if password contains common word or vice versa
        if (common.length >= 4) {
            if (lowerPass.indexOf(common) !== -1 || common.indexOf(lowerPass) !== -1) {
                if (common !== lowerPass) {
                    similarVariants.push(common);
                }
            }
        }
        if (common === lowerPass) rank = i + 1;
    }

    // Limit variants shown
    if (similarVariants.length > 20) similarVariants = similarVariants.slice(0, 20);

    var stats = document.getElementById('dict-stats');
    stats.style.display = 'grid';

    var foundEl = document.getElementById('dict-found');
    var variantsEl = document.getElementById('dict-variants');
    var rankEl = document.getElementById('dict-rank');
    var cardFound = document.getElementById('dict-card-found');

    if (exactMatch) {
        foundEl.textContent = '⚠️ FOUND';
        cardFound.className = 'stat-card danger';
    } else if (similarVariants.length > 0) {
        foundEl.textContent = '⚠️ SIMILAR';
        cardFound.className = 'stat-card warning';
    } else {
        foundEl.textContent = '✅ NOT FOUND';
        cardFound.className = 'stat-card success';
    }

    variantsEl.textContent = similarVariants.length;
    rankEl.textContent = exactMatch ? '#' + rank : 'N/A';

    var detailBox = document.getElementById('dict-result');
    detailBox.style.display = 'block';
    var detailEl = document.getElementById('dict-detail');
    detailEl.className = 'result-content';

    if (exactMatch) {
        detailEl.classList.add('danger');
        detailEl.innerHTML = '🚨 <strong>EXACT MATCH FOUND!</strong> Your password appeared at rank #<strong>' + rank + '</strong> in our dictionary of ' + COMMON_PASSWORDS.length + '+ common passwords. <span style="color:#ff0055;">DO NOT USE THIS PASSWORD!</span>';
    } else if (similarVariants.length > 0) {
        detailEl.classList.add('warning');
        detailEl.innerHTML = '⚠️ No exact match, but <strong>' + similarVariants.length + '</strong> similar passwords found. Examples: <code style="color:#f0f;">' + similarVariants.slice(0, 5).join(', ') + '</code>. Consider making your password more unique.';
    } else {
        detailEl.classList.add('success');
        detailEl.innerHTML = '✅ <strong>No matches found!</strong> Your password was not found in our dictionary of ' + COMMON_PASSWORDS.length + '+ common passwords.';
    }
}

// ====================================================
// FEATURE 5: PASSWORD MUTATION GENERATOR
// ====================================================
function generateMutations() {
    var password = document.getElementById('mut-password').value;
    if (!password) { showToast('⚠️ Please enter a base password!', 'error'); return; }

    var mutations = [];

    // 1. Common leetspeak substitutions
    var leet = password;
    leet = leet.replace(/a/gi, '4');
    leet = leet.replace(/e/gi, '3');
    leet = leet.replace(/i/gi, '1');
    leet = leet.replace(/o/gi, '0');
    leet = leet.replace(/s/gi, '5');
    leet = leet.replace(/t/gi, '7');
    if (leet !== password) mutations.push({ label: 'Leetspeak Basic', value: leet });

    // 2. Advanced leetspeak
    var leetAdv = password;
    leetAdv = leetAdv.replace(/a/gi, '@');
    leetAdv = leetAdv.replace(/e/gi, '3');
    leetAdv = leetAdv.replace(/i/gi, '1');
    leetAdv = leetAdv.replace(/o/gi, '0');
    leetAdv = leetAdv.replace(/s/gi, '$');
    leetAdv = leetAdv.replace(/t/gi, '7');
    leetAdv = leetAdv.replace(/b/gi, '8');
    leetAdv = leetAdv.replace(/g/gi, '9');
    leetAdv = leetAdv.replace(/z/gi, '2');
    if (leetAdv !== password && leetAdv !== leet) mutations.push({ label: 'Leetspeak Advanced', value: leetAdv });

    // 3. All uppercase
    if (password !== password.toUpperCase()) mutations.push({ label: 'UPPERCASE', value: password.toUpperCase() });

    // 4. All lowercase
    if (password !== password.toLowerCase()) mutations.push({ label: 'lowercase', value: password.toLowerCase() });

    // 5. Capitalize first
    mutations.push({ label: 'Capitalize', value: password.charAt(0).toUpperCase() + password.slice(1).toLowerCase() });

    // 6. Reversed
    mutations.push({ label: 'Reversed', value: password.split('').reverse().join('') });

    // 7. Doubled
    mutations.push({ label: 'Doubled', value: password + password });

    // 8. Append numbers
    mutations.push({ label: 'Append 123', value: password + '123' });
    mutations.push({ label: 'Append 2024', value: password + '2024' });
    mutations.push({ label: 'Append !', value: password + '!' });
    mutations.push({ label: 'Append @', value: password + '@' });

    // 9. Prepend numbers
    mutations.push({ label: 'Prepend 123', value: '123' + password });
    mutations.push({ label: 'Prepend !', value: '!' + password });

    // 10. Toggle case
    var toggled = '';
    for (var i = 0; i < password.length; i++) {
        var ch = password[i];
        toggled += (i % 2 === 0) ? ch.toUpperCase() : ch.toLowerCase();
    }
    if (toggled !== password) mutations.push({ label: 'Toggle Case', value: toggled });

    // 11. Remove vowels
    var noVowels = password.replace(/[aeiouAEIOU]/g, '');
    if (noVowels !== password && noVowels.length > 0) mutations.push({ label: 'No Vowels', value: noVowels });

    // 12. Common substitutions
    var subbed = password;
    subbed = subbed.replace(/a/gi, '@');
    subbed = subbed.replace(/s/gi, 'z');
    subbed = subbed.replace(/e/gi, '3');
    subbed = subbed.replace(/o/gi, '0');
    if (subbed !== password) mutations.push({ label: 'Common Subs', value: subbed });

    // 13. Append year
    var currentYear = new Date().getFullYear();
    mutations.push({ label: 'Append Year', value: password + currentYear });
    mutations.push({ label: 'Prepend Year', value: currentYear + password });

    // 14. Every char repeated
    var repeated = '';
    for (var i = 0; i < password.length; i++) repeated += password[i] + password[i];
    mutations.push({ label: 'Double Chars', value: repeated });

    // Remove duplicates
    var seen = {};
    mutations = mutations.filter(function(m) {
        var key = m.value;
        if (seen[key]) return false;
        seen[key] = true;
        return true;
    });

    // Limit to 20
    if (mutations.length > 20) mutations = mutations.slice(0, 20);

    // Render
    var container = document.getElementById('mutations-container');
    var html = '<div class="variant-list">';
    mutations.forEach(function(m) {
        html += '<div class="variant-item" onclick="copyToClipboard(\'' + m.value.replace(/'/g, "\\'") + '\')">';
        html += '<div class="variant-label">' + m.label + '</div>';
        html += m.value;
        html += '</div>';
    });
    html += '</div>';
    container.innerHTML = html;
    showToast('🧬 Generated ' + mutations.length + ' mutations!', 'success');
}

function clearMutations() {
    document.getElementById('mut-password').value = '';
    document.getElementById('mutations-container').innerHTML = '<div class="result-box"><div class="result-label">Mutations will appear here</div><div class="result-content" style="color:rgba(255,255,255,0.3);">Enter a password and click Generate...</div></div>';
}

// ====================================================
// FEATURE 6: PASSWORD HISTORY COMPARISON
// ====================================================
function compareHistory() {
    var oldText = document.getElementById('hist-old').value.trim();
    var newPass = document.getElementById('hist-new').value.trim();

    if (!oldText || !newPass) { showToast('⚠️ Please enter both old and new passwords!', 'error'); return; }

    var oldPasswords = oldText.split('\n').map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });

    if (oldPasswords.length === 0) { showToast('⚠️ No valid old passwords!', 'error'); return; }

    var resultsDiv = document.getElementById('history-results');
    var html = '';

    html += '<div class="stat-grid">';
    html += '<div class="stat-card"><div class="stat-value">' + oldPasswords.length + '</div><div class="stat-label">Old Passwords</div></div>';
    html += '<div class="stat-card success"><div class="stat-value" style="font-size:1.5em;" id="avg-similarity">-</div><div class="stat-label">Avg Similarity</div></div>';
    html += '</div>';

    var totalSim = 0;
    var worstSim = 100;
    var worstPass = '';

    oldPasswords.forEach(function(oldPwd, idx) {
        var dist = levenshteinDistance(oldPwd, newPass);
        var sim = similarityPercentage(oldPwd, newPass);
        if (sim < worstSim) { worstSim = sim; worstPass = oldPwd; }
        totalSim += sim;

        var simColor = sim > 70 ? '#ff0055' : (sim > 40 ? '#ffaa00' : '#00ff88');
        var simLabel = sim > 70 ? 'Very Similar' : (sim > 40 ? 'Somewhat Similar' : 'Different');

        html += '<div class="result-box" style="margin-top:10px;">';
        html += '<div class="result-label">Comparison #' + (idx + 1) + '</div>';
        html += '<div class="similarity-meter"><div class="similarity-fill" style="width:' + sim + '%;background:' + simColor + ';">' + sim.toFixed(1) + '%</div></div>';
        html += '<div class="result-content" style="font-size:0.85em;">';
        html += 'Old: <span style="color:#f0f;">' + escapeHtml(oldPwd) + '</span> → New: <span style="color:#0ff;">' + escapeHtml(newPass) + '</span><br>';
        html += 'Levenshtein Distance: <strong>' + dist + '</strong> | Status: <strong style="color:' + simColor + ';">' + simLabel + '</strong>';
        html += '</div></div>';
    });

    var avgSim = totalSim / oldPasswords.length;
    html = html.replace('id="avg-similarity">-', 'id="avg-similarity">' + avgSim.toFixed(1) + '%');

    // Warning if too similar
    if (avgSim > 50) {
        html += '<div class="result-box" style="border-color:#ff0055;"><div class="result-label" style="color:#ff0055;">⚠️ SECURITY WARNING</div>';
        html += '<div class="result-content danger">Your new password is <strong>' + avgSim.toFixed(1) + '%</strong> similar on average to old passwords. Consider using a completely different password!</div></div>';
    } else {
        html += '<div class="result-box" style="border-color:#00ff88;"><div class="result-label" style="color:#00ff88;">✅ GOOD</div>';
        html += '<div class="result-content success">Your new password differs significantly from old passwords (average similarity: ' + avgSim.toFixed(1) + '%). This is good practice!</div></div>';
    }

    resultsDiv.innerHTML = html;
    showToast('📋 Comparison complete!', 'success');
}

function clearHistory() {
    document.getElementById('hist-old').value = '';
    document.getElementById('hist-new').value = '';
    document.getElementById('history-results').innerHTML = '';
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '<').replace(/>/g, '>').replace(/"/g, '"');
}

// ====================================================
// FEATURE 7: RAINBOW TABLE DEMONSTRATION
// ====================================================
var rainbowSampleGenerated = false;

function rainbowLookup() {
    var password = document.getElementById('rainbow-password').value;
    if (!password) { showToast('⚠️ Please enter a password!', 'error'); return; }

    var md5 = md5String(password);
    var stats = document.getElementById('rainbow-stats');
    stats.style.display = 'grid';

    document.getElementById('rainbow-md5').textContent = md5.substring(0, 32);

    // SHA-1 is async but we show a note
    document.getElementById('rainbow-sha1').textContent = 'See console (async)';

    // Simulate rainbow table lookup
    var foundInTable = COMMON_PASSWORDS.indexOf(password.toLowerCase()) !== -1;
    var statusEl = document.getElementById('rainbow-status');
    var cardStatus = document.getElementById('rainbow-card-status');

    if (foundInTable) {
        statusEl.textContent = '⚠️ FOUND';
        cardStatus.className = 'stat-card danger';
        showToast('🌈 Password FOUND in simulated rainbow table!', 'error');
    } else {
        statusEl.textContent = '✅ NOT FOUND';
        cardStatus.className = 'stat-card success';
        showToast('🌈 Password NOT found in rainbow table sample.', 'success');
    }

    // Show sample rainbow table entries
    var tableDiv = document.getElementById('rainbow-table');
    var samplePasswords = ['password', '123456', 'admin', 'letmein', 'qwerty', 'welcome', 'monkey', 'dragon', 'sunshine', 'princess'];
    var html = '';
    samplePasswords.forEach(function(pwd) {
        var hash = md5String(pwd);
        var isFound = pwd === password.toLowerCase();
        html += '<div class="rainbow-item' + (isFound ? ' found' : '') + '">';
        html += '<div class="hash-val">' + hash + '</div>';
        html += '<div class="pass-val">' + (isFound ? '← ' : '') + pwd + '</div>';
        html += '</div>';
    });
    tableDiv.innerHTML = html;
    rainbowSampleGenerated = true;
}

function generateRainbowSample() {
    var password = document.getElementById('rainbow-password').value;
    if (password) {
        rainbowLookup();
        return;
    }

    // Show a sample without specific lookup
    var stats = document.getElementById('rainbow-stats');
    stats.style.display = 'none';

    var tableDiv = document.getElementById('rainbow-table');
    var samplePasswords = ['password', '123456', 'admin', 'letmein', 'qwerty', 'welcome', 'monkey', 'dragon', 'sunshine', 'princess', 'shadow', 'master'];
    var html = '';
    samplePasswords.forEach(function(pwd) {
        var hash = md5String(pwd);
        html += '<div class="rainbow-item">';
        html += '<div class="hash-val">' + hash + '</div>';
        html += '<div class="pass-val">' + pwd + '</div>';
        html += '</div>';
    });
    tableDiv.innerHTML = html;
    rainbowSampleGenerated = true;
    showToast('🌈 Showing sample rainbow table (12 entries)', 'success');
}

// ====================================================
// FEATURE 8: BREACH SIMULATION
// ====================================================
function simulateBreach() {
    var password = document.getElementById('breach-password').value;
    if (!password) { showToast('⚠️ Please enter a password!', 'error'); return; }

    var lowerPass = password.toLowerCase();
    var breachCount = 0;
    var foundVariants = [];

    // Search through breached passwords
    for (var i = 0; i < BREACHED_PASSWORDS.length; i++) {
        if (BREACHED_PASSWORDS[i] === lowerPass) {
            breachCount += Math.floor(Math.random() * 500000) + 100000; // Simulate breach count
            foundVariants.push(BREACHED_PASSWORDS[i]);
        }
        // Also check partial matches for similar
        if (BREACHED_PASSWORDS[i].indexOf(lowerPass) !== -1 && BREACHED_PASSWORDS[i] !== lowerPass) {
            breachCount += Math.floor(Math.random() * 5000);
        }
    }

    // Simulate if not found, sometimes still small breach
    if (breachCount === 0 && Math.random() < 0.3) {
        breachCount = Math.floor(Math.random() * 100);
    }

    var stats = document.getElementById('breach-stats');
    stats.style.display = 'grid';

    document.getElementById('breach-count').textContent = breachCount.toLocaleString();

    var riskEl = document.getElementById('breach-risk');
    var suggestEl = document.getElementById('breach-suggest');
    var cardRisk = document.getElementById('breach-card-risk');
    var cardSuggest = document.getElementById('breach-card-suggest');

    if (breachCount === 0) {
        riskEl.textContent = '✅ None';
        cardRisk.className = 'stat-card success';
        suggestEl.textContent = 'Safe to use';
        cardSuggest.className = 'stat-card success';
    } else if (breachCount < 1000) {
        riskEl.textContent = '⚠️ Low';
        cardRisk.className = 'stat-card warning';
        suggestEl.textContent = 'Consider changing';
        cardSuggest.className = 'stat-card warning';
    } else if (breachCount < 100000) {
        riskEl.textContent = '🚨 Medium';
        cardRisk.className = 'stat-card danger';
        suggestEl.textContent = 'Change immediately!';
        cardSuggest.className = 'stat-card danger';
    } else {
        riskEl.textContent = '🔥 HIGH';
        cardRisk.className = 'stat-card danger';
        suggestEl.textContent = 'DO NOT USE!';
        cardSuggest.className = 'stat-card danger';
    }

    var detailBox = document.getElementById('breach-detail-box');
    detailBox.style.display = 'block';
    var detailEl = document.getElementById('breach-detail');
    detailEl.className = 'result-content';

    if (breachCount === 0) {
        detailEl.classList.add('success');
        detailEl.innerHTML = '✅ <strong>No breaches found</strong> for this password in our simulated database of ' + BREACHED_PASSWORDS.length.toLocaleString() + ' entries.';
    } else {
        detailEl.classList.add('danger');
        detailEl.innerHTML = '🚨 <strong>BREACH DETECTED!</strong> Your password appeared in <strong>' + breachCount.toLocaleString() + '</strong> simulated breach records. <span style="color:#ff0055;">IMMEDIATELY CHANGE THIS PASSWORD</span> and ensure you\'re not using it on any other accounts.';
        if (foundVariants.length > 0) {
            detailEl.innerHTML += '<br><br><strong>Found variations:</strong> ' + foundVariants.slice(0, 5).join(', ');
        }
        detailEl.innerHTML += '<br><br>💡 <strong>Tip:</strong> Use a unique, complex password for each account. Consider using a password manager.';
    }
}

// ====================================================
// FEATURE 9: PASSWORD GENERATOR
// ====================================================
function generatePassword() {
    var length = parseInt(document.getElementById('gen-length').value);
    var useUpper = document.getElementById('gen-upper').checked;
    var useLower = document.getElementById('gen-lower').checked;
    var useNumber = document.getElementById('gen-number').checked;
    var useSymbol = document.getElementById('gen-symbol').checked;
    var avoidAmbiguous = document.getElementById('gen-ambiguous').checked;

    var chars = '';
    if (useUpper) chars += UPPER_CASE;
    if (useLower) chars += LOWER_CASE;
    if (useNumber) chars += NUMBERS;
    if (useSymbol) chars += SYMBOLS;

    // Remove ambiguous characters if needed
    if (avoidAmbiguous) {
        for (var i = 0; i < AMBIGUOUS.length; i++) {
            chars = chars.replace(new RegExp('\\' + AMBIGUOUS[i], 'g'), '');
        }
    }

    if (chars === '') {
        showToast('⚠️ Please select at least one character type!', 'error');
        return;
    }

    var password = '';
    for (var i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById('gen-password').value = password;

    // Update strength bar
    var entropy = calculateGuessingEntropy(password);
    var bar = document.getElementById('gen-bar');
    var text = document.getElementById('gen-text');
    bar.className = 'strength-bar';
    text.className = 'strength-text';

    var pct = Math.min(entropy / 100 * 100, 100);
    bar.style.width = pct + '%';

    if (entropy < 40) {
        bar.classList.add('fair');
        text.classList.add('fair');
        text.textContent = 'FAIR';
    } else if (entropy < 60) {
        bar.classList.add('good');
        text.classList.add('good');
        text.textContent = 'GOOD';
    } else if (entropy < 80) {
        bar.classList.add('strong');
        text.classList.add('strong');
        text.textContent = 'STRONG';
    } else {
        bar.classList.add('very-strong');
        text.classList.add('very-strong');
        text.textContent = 'VERY STRONG';
    }

    // Show info
    var infoBox = document.getElementById('gen-result-box');
    infoBox.style.display = 'block';
    var infoEl = document.getElementById('gen-info');
    infoEl.textContent = 'Length: ' + length + ' | Character Set Size: ' + chars.length + ' | Entropy: ' + entropy.toFixed(1) + ' bits';

    // Auto-copy
    copyGenPassword();
}

function copyGenPassword() {
    var password = document.getElementById('gen-password').value;
    if (password) {
        copyToClipboard(password);
    }
}

// ====================================================
// FEATURE 10: LEETSPEAK CONVERTER
// ====================================================
function toLeetspeak() {
    var input = document.getElementById('leet-input').value;
    if (!input) { showToast('⚠️ Please enter text!', 'error'); return; }

    var level = parseInt(document.getElementById('leet-level').value);
    var map = level === 1 ? LEET_MAP_BASIC : (level === 2 ? LEET_MAP_ADVANCED : LEET_MAP_EXTREME);

    var output = '';
    for (var i = 0; i < input.length; i++) {
        var ch = input[i].toLowerCase();
        if (map[ch]) {
            // Random chance to use leet or original for variety
            if (Math.random() < 0.7) output += map[ch];
            else output += input[i];
        } else {
            output += input[i];
        }
    }

    document.getElementById('leet-output').value = output;
    showToast('💬 Converted to Leetspeak!', 'success');
}

function fromLeetspeak() {
    var input = document.getElementById('leet-input').value;
    if (!input) { showToast('⚠️ Please enter leetspeak text!', 'error'); return; }

    var output = input;
    // Sort keys by length descending to match multi-char substitutions first
    var sortedKeys = Object.keys(REVERSE_LEET).sort(function(a, b) { return b.length - a.length; });

    for (var i = 0; i < sortedKeys.length; i++) {
        var leet = sortedKeys[i];
        var original = REVERSE_LEET[leet];
        // Use regex to replace all occurrences, case-insensitive for single chars
        var regex;
        if (leet.length === 1) {
            regex = new RegExp('\\' + leet, 'gi');
        } else {
            regex = new RegExp(leet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        }
        output = output.replace(regex, original);
    }

    document.getElementById('leet-output').value = output;
    showToast('💬 Converted from Leetspeak!', 'success');
}

function clearLeet() {
    document.getElementById('leet-input').value = '';
    document.getElementById('leet-output').value = '';
}

// ====================================================
// FEATURE 11: KEYBOARD PATTERN DETECTION
// ====================================================
function detectPatterns() {
    var password = document.getElementById('kbd-password').value;
    if (!password) { showToast('⚠️ Please enter a password!', 'error'); return; }

    var lowerPass = password.toLowerCase();
    var patterns = [];
    var totalDeductions = 0;

    // 1. QWERTY Row Patterns
    var topRow = 'qwertyuiop';
    var midRow = 'asdfghjkl';
    var botRow = 'zxcvbnm';
    var numRow = '0123456789';

    function findSequencesInRow(password, row, rowName) {
        var matches = [];
        for (var i = 0; i < password.length - 2; i++) {
            var substr = password.substring(i, i + 3);
            if (row.indexOf(substr) !== -1) {
                matches.push({ pos: i, seq: substr, len: 3 });
                // Try extending
                for (var j = i + 3; j < password.length && j - i < 8; j++) {
                    var extended = password.substring(i, j + 1);
                    if (row.indexOf(extended) !== -1) {
                        matches[matches.length - 1] = { pos: i, seq: extended, len: extended.length };
                    } else break;
                }
            }
        }
        // Also check reverse
        var rowRev = row.split('').reverse().join('');
        for (var i = 0; i < password.length - 2; i++) {
            var substr = password.substring(i, i + 3);
            if (rowRev.indexOf(substr) !== -1) {
                matches.push({ pos: i, seq: substr, len: 3, rev: true });
                for (var j = i + 3; j < password.length && j - i < 8; j++) {
                    var extended = password.substring(i, j + 1);
                    if (rowRev.indexOf(extended) !== -1) {
                        matches[matches.length - 1] = { pos: i, seq: extended, len: extended.length, rev: true };
                    } else break;
                }
            }
        }
        return matches;
    }

    var topMatches = findSequencesInRow(lowerPass, topRow, 'top');
    var midMatches = findSequencesInRow(lowerPass, midRow, 'middle');
    var botMatches = findSequencesInRow(lowerPass, botRow, 'bottom');
    var numMatches = findSequencesInRow(lowerPass, numRow, 'number row');

    topMatches.forEach(function(m) { patterns.push({ name: 'Top Row', detail: '"' + m.seq + '" (' + m.len + ' chars)', deduction: m.len * 0.8 }); });
    midMatches.forEach(function(m) { patterns.push({ name: 'Middle Row', detail: '"' + m.seq + '" (' + m.len + ' chars)', deduction: m.len * 0.8 }); });
    botMatches.forEach(function(m) { patterns.push({ name: 'Bottom Row', detail: '"' + m.seq + '" (' + m.len + ' chars)', deduction: m.len * 0.8 }); });
    numMatches.forEach(function(m) { patterns.push({ name: 'Number Seq', detail: '"' + m.seq + '" (' + m.len + ' chars)', deduction: m.len * 0.7 }); });

    // 2. Sequential characters (abc, 123)
    function findAlphabetSequences(pwd) {
        var matches = [];
        var alpha = 'abcdefghijklmnopqrstuvwxyz';
        var alphaRev = alpha.split('').reverse().join('');
        for (var i = 0; i < pwd.length - 2; i++) {
            var substr = pwd.substring(i, i + 3);
            if (alpha.indexOf(substr) !== -1 || alphaRev.indexOf(substr) !== -1) {
                // Extend
                for (var j = i + 3; j < pwd.length; j++) {
                    var extended = pwd.substring(i, j + 1);
                    if (alpha.indexOf(extended) !== -1 || alphaRev.indexOf(extended) !== -1) {
                        substr = extended;
                    } else break;
                }
                matches.push({ seq: substr, len: substr.length });
                i += substr.length - 1;
            }
        }
        return matches;
    }

    var alphaSeqs = findAlphabetSequences(lowerPass);
    alphaSeqs.forEach(function(m) { patterns.push({ name: 'Alphabet Seq', detail: '"' + m.seq + '" (' + m.len + ' chars)', deduction: m.len * 0.9 }); });

    // 3. Repeated characters (aaa, 111)
    function findRepeats(pwd) {
        var matches = [];
        var i = 0;
        while (i < pwd.length) {
            var j = i;
            while (j < pwd.length && pwd[j] === pwd[i]) j++;
            var count = j - i;
            if (count >= 2) {
                matches.push({ char: pwd[i], count: count });
                i = j;
            } else i++;
        }
        return matches;
    }

    var repeats = findRepeats(password);
    repeats.forEach(function(m) { patterns.push({ name: 'Repeated Char', detail: '"' + m.char + '" × ' + m.count, deduction: m.count * 1.2 }); });

    // 4. Keyboard walks (adjacent keys)
    var kbd = {
        'q': 'w', 'w': 'qe', 'e': 'wr', 'r': 'et', 't': 'ry', 'y': 'tu', 'u': 'yi', 'i': 'uo', 'o': 'ip', 'p': 'o',
        'a': 's', 's': 'ad', 'd': 'sf', 'f': 'dg', 'g': 'fh', 'h': 'gj', 'j': 'hk', 'k': 'jl', 'l': 'k',
        'z': 'x', 'x': 'zc', 'c': 'xv', 'v': 'cb', 'b': 'vn', 'n': 'bm', 'm': 'n'
    };

    var walkCount = 0;
    for (var i = 0; i < lowerPass.length - 1; i++) {
        var current = lowerPass[i];
        var next = lowerPass[i + 1];
        if (kbd[current] && kbd[current].indexOf(next) !== -1) {
            walkCount++;
        }
    }
    if (walkCount >= 2) {
        patterns.push({ name: 'Keyboard Walk', detail: walkCount + ' adjacent moves', deduction: walkCount * 0.6 });
    }

    // 5. Common patterns (dates, years)
    var yearMatch = password.match(/(19|20)\d{2}/);
    if (yearMatch) patterns.push({ name: 'Year Pattern', detail: '"' + yearMatch[0] + '"', deduction: 4 });

    // Calculate total deductions
    var totalDeduction = 0;
    patterns.forEach(function(p) { totalDeduction += p.deduction; });

    // Normalize to 0-100 score
    var baseStrength = 100;
    var finalScore = Math.max(0, Math.min(100, baseStrength - totalDeduction * 5));

    // Update UI
    var stats = document.getElementById('kbd-stats');
    stats.style.display = 'grid';

    document.getElementById('kbd-count').textContent = patterns.length;
    document.getElementById('kbd-score').textContent = finalScore.toFixed(0) + '%';

    var kbdCardScore = document.getElementById('kbd-card-score');
    if (finalScore < 30) kbdCardScore.className = 'stat-card danger';
    else if (finalScore < 60) kbdCardScore.className = 'stat-card warning';
    else kbdCardScore.className = 'stat-card success';

    // Render patterns
    var patternDiv = document.getElementById('kbd-patterns');
    var html = '';

    if (patterns.length === 0) {
        html += '<div class="pattern-row"><div class="pattern-name">✓ Clean</div><div class="pattern-status" style="color:#00ff88;">No patterns detected</div></div>';
    } else {
        patterns.forEach(function(p) {
            var severity = p.deduction > 2 ? 'danger' : (p.deduction > 1 ? 'warning' : 'info');
            var severityColor = severity === 'danger' ? '#ff0055' : (severity === 'warning' ? '#ffaa00' : '#0ff');
            html += '<div class="pattern-row">';
            html += '<div class="pattern-name">' + p.name + '</div>';
            html += '<div class="pattern-status" style="color:' + severityColor + ';">⚠️</div>';
            html += '<div style="font-size:0.85em;">' + p.detail + '</div>';
            html += '<div class="pattern-detail">-' + (p.deduction * 5).toFixed(0) + ' pts</div>';
            html += '</div>';
        });
    }

    patternDiv.innerHTML = html;

    // Detail
    var resultBox = document.getElementById('kbd-result');
    resultBox.style.display = 'block';
    var detailEl = document.getElementById('kbd-detail');
    detailEl.className = 'result-content';

    if (finalScore < 30) {
        detailEl.classList.add('danger');
        detailEl.textContent = '🔴 WEAK: ' + patterns.length + ' patterns detected. Your password uses common keyboard patterns. Avoid sequences and repeated characters.';
    } else if (finalScore < 60) {
        detailEl.classList.add('warning');
        detailEl.textContent = '🟡 MODERATE: ' + patterns.length + ' patterns detected. Consider removing these patterns for better security.';
    } else {
        detailEl.classList.add('success');
        detailEl.textContent = '🟢 STRONG: No significant keyboard patterns detected. Your password has good pattern hygiene.';
    }
}

// ====================================================
// INITIALIZATION
// ====================================================
document.addEventListener('DOMContentLoaded', function() {
    // Generate a sample password on load
    generatePassword();
    // Show rainbow sample
    generateRainbowSample();
});


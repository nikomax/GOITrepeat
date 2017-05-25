var names = [];

for (var i = 0; i < 5; i++) {
    names[i] = prompt('Enter ' + (i+1) + ' name');
}

console.log(names);

var userName;

userName = prompt('Enter your name');

if (names[i] != userName) {
    alert(userName + ', welcome!');
} else {
    alert('Wrong user name');
}
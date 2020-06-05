alert('working');

function run() {
  var password = prompt('password please');

  if (password != 'password') {
    document.body.innerHTML = '';
    document.body.innerHTML = 'Wrong password';
  } else {
    document.body.innerHTML = 'correct';
  }
}

run();

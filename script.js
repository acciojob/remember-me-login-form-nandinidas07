
const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const existingBtn = document.getElementById('existing');


window.onload = function () {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    existingBtn.style.display = 'inline';
  }
};


form.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(Logged in as ${username});

  if (checkbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  if (localStorage.getItem('username')) {
    existingBtn.style.display = 'inline';
  } else {
    existingBtn.style.display = 'none';
  }
});


existingBtn.addEventListener('click', function () {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    alert(Logged in as ${savedUsername});
  }
});
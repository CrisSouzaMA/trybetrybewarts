const stLogin = document.getElementById('startLogin');
const user = 'tryber@teste.com';
const password = '123456';
const actBotton = document.getElementById('submit-btn');
const checkBotton = document.querySelector('#agreement');

stLogin.addEventListener('click', () => {
  const nameLogin = document.getElementById('email').value;
  const passwordLogin = document.getElementById('password').value;
  if (nameLogin === user && passwordLogin === password) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function habilBotton() {
  if (checkBotton.checked) {
    actBotton.classList.remove('inactive');
    actBotton.disabled = false;
  } else {
    actBotton.classList.add('inactive');
    actBotton.disabled = true;
  }
}
checkBotton.addEventListener('change', habilBotton);

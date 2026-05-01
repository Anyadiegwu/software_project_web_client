const screens = document.querySelectorAll('.screen');
const htmlRoot = document.documentElement;
const navButtons = document.querySelectorAll('[data-target]');

function updateDeviceType() {
  const width = window.innerWidth;
  htmlRoot.classList.remove('phone', 'tablet', 'desktop');

  if (width < 720) {
    htmlRoot.classList.add('phone');
  } else if (width < 1080) {
    htmlRoot.classList.add('tablet');
  } else {
    htmlRoot.classList.add('desktop');
  }
}

function setActiveScreen(screenId) {
  screens.forEach((screen) => {
    screen.classList.toggle('active', screen.id === screenId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    if (target) {
      setActiveScreen(target);
    }
  });
});

window.addEventListener('resize', updateDeviceType);
updateDeviceType();
setActiveScreen('screen-home');

const reporterSignupForm = document.getElementById('reporter-signup-form');
const securityRegisterForm = document.getElementById('security-register-form');
const reporterSigninForm = document.getElementById('reporter-signin-form');

function bindForm(form, targetScreen) {
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    setActiveScreen(targetScreen);
  });
}

bindForm(reporterSignupForm, 'screen-dashboard');
bindForm(securityRegisterForm, 'screen-dashboard');
bindForm(reporterSigninForm, 'screen-welcome-back');

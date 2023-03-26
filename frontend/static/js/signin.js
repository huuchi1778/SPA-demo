import {Button, Text} from 'kintone-ui-component';
import {validateStringValue} from './validate';
import {displayPopup} from './common';

const form = document.querySelector('#signin-form');

main();

function main() {
  const [userName, password, signupBtn] = _initUI();

  signupBtn.addEventListener('click', () => {
    _handleForm({
      userName: userName.value,
      password: password.value,
    });
  });
}

function _initUI() {
  const userName = new Text({
    placeholder: 'Enter your username',
    className: 'text-input'
  });

  const password = document.createElement('input');
  password.type = 'password';
  password.className = 'password-input';
  password.placeholder = 'Enter your password';
  password.autocomplete = 'on';

  const signinBtn = new Button({
    text: 'Sign-in',
    type: 'submit',
    className: 'submit-button'
  });

  form.appendChild(userName);
  form.appendChild(password);
  form.appendChild(signinBtn);

  return [userName, password, signinBtn];
}

function _handleForm(formValue) {
  if (!_validateForm(formValue)) {
    displayPopup('Missing or invalid input. \n Please try again!', 'danger');
    return;
  }

  displayPopup('Signing in!', 'success');
}

function _validateForm(formValue) {
  if (
    !Object.values(formValue).every(validateStringValue)
  ) return false;

  return true;
}

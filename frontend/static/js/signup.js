import {Button, Text} from 'kintone-ui-component';
import {validateEmail, validateStringValue, validatePasswordMatch} from './validate';
import {displayPopup} from './common';

const form = document.querySelector('#signup-form');

main();

function main() {
  const [fullName, userName, email, password, passwordConfirm, signupBtn] = _initUI();

  signupBtn.addEventListener('click', () => {
    _handleForm({
      fullName: fullName.value,
      userName: userName.value,
      email: email.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value
    });
  });
}

function _initUI() {
  const fullName = new Text({
    placeholder: 'Enter your full name',
    className: 'text-input',
  });

  const userName = new Text({
    placeholder: 'Enter your username',
    className: 'text-input'
  });

  const email = new Text({
    placeholder: 'Enter your email',
    className: 'text-input'
  });

  const password = document.createElement('input');
  password.type = 'password';
  password.className = 'password-input';
  password.placeholder = 'Enter your password';
  password.autocomplete = 'on';

  const passwordConfirm = document.createElement('input');
  passwordConfirm.type = 'password';
  passwordConfirm.className = 'password-input';
  passwordConfirm.placeholder = 'Confirm your password';
  passwordConfirm.autocomplete = 'on';

  const signupBtn = new Button({
    text: 'Sign-up',
    type: 'submit',
    className: 'sign-up-button'
  });

  form.appendChild(fullName);
  form.appendChild(userName);
  form.appendChild(email);
  form.appendChild(password);
  form.appendChild(passwordConfirm);
  form.appendChild(signupBtn);

  return [fullName, userName, email, password, passwordConfirm, signupBtn];
}

function _handleForm(formValue) {
  if (!_validateForm(formValue)) {
    displayPopup('Missing or invalid input. \n Please try again!', 'danger');
    return;
  }

  displayPopup('Succesfully sign-up!', 'success');
}

function _validateForm(formValue) {
  if (
    !Object.values(formValue).every(validateStringValue) ||
    !validateEmail(formValue.email) ||
    !validatePasswordMatch(formValue.password, formValue.passwordConfirm)
  ) return false;

  return true;
}

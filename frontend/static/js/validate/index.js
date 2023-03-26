export function validateStringValue(stringValue) {
  if (stringValue === '') return false;
  return true;
}

export function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      // eslint-disable-next-line max-len
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export function validatePasswordMatch(password, confirm) {
  return password === confirm;
}
import {Notification} from 'kintone-ui-component';

export function displayPopup(text, type) {
  const notification = new Notification({
    text,
    type
  });

  notification.open();
}

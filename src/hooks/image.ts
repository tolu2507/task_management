/* eslint-disable prettier/prettier */
export default function useImage() {
  const image = require('../../assets/pic4.png');
  return image;
}

export function generateRandomId() {
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#%@#';
  const length = 8;
  let randomId = '';

  for (let i = 0; i < length; i++) {
    const randomIdx = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIdx];
  }

  return randomId;
}

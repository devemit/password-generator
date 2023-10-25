function generateLetter() {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letter = Math.floor(Math.random() * alphabet.length);
  return alphabet[letter];
}
function generateLetters() {
  let lettersArray = [];
  for (let i = 0; i < 12; i++) {
    lettersArray.push(generateLetter());
  }
  let letters = lettersArray.join('');
  return letters;
}

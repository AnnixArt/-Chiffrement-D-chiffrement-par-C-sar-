function normalizeChar(char, shift, isEncrypting) {
  const code = char.charCodeAt(0);
  const base = char === char.toUpperCase() ? 65 : 97;
  const alphabetSize = 26;

  if (!/[a-zA-Z]/.test(char)) return char;

  let offset = isEncrypting ? shift : -shift;
  return String.fromCharCode(((code - base + offset + alphabetSize) % alphabetSize) + base);
}

function transformText(text, shift, isEncrypting) {
  return text.split('').map(char => normalizeChar(char, shift, isEncrypting)).join('');
}

function chiffrer() {
  const text = document.getElementById("textInput").value;
  const shift = parseInt(document.getElementById("shiftInput").value);
  const result = transformText(text, shift, true);
  document.getElementById("output").value = result;
}

function dechiffrer() {
  const text = document.getElementById("textInput").value;
  const shift = parseInt(document.getElementById("shiftInput").value);
  const result = transformText(text, shift, false);
  document.getElementById("output").value = result;
}

function resetForm() {
  document.getElementById("textInput").value = "";
  document.getElementById("shiftInput").value = 3;
  document.getElementById("output").value = "";
}

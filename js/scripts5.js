// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

frase = "Olá, me chamo Jorge D Alves";


// com reverse()
function inverter(s) {
  s.split('').reverse().join('');  return s;
}

// sem reverse()
function reverse(s) {
  var o = [];
  for (var i = 0, len = s.length; i <= len; i++)
      o.push(s.charAt(len - i));
  return o.join('');
}

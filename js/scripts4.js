// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

let monthlyBilling = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let total = monthlyBilling.SP + monthlyBilling.RJ + monthlyBilling.MG + monthlyBilling.ES + monthlyBilling.Outros;

percOfSp = monthlyBilling.SP * 100 / total;
percOfRj = monthlyBilling.RJ * 100 / total
percOfMg = monthlyBilling.MG * 100 / total
percOfEs = monthlyBilling.ES * 100 / total
percOfOthers = monthlyBilling.Outros * 100 / total


console.log(`O percentual de SP é de ${percOfSp.toFixed(2)}`)
console.log(`O percentual de RJ é de ${percOfRj.toFixed(2)}`)
console.log(`O percentual de MG é de ${percOfMg.toFixed(2)}`)
console.log(`O percentual de ES é de ${percOfEs.toFixed(2)}`)
console.log(`O percentual de Outros estados é de ${percOfOthers.toFixed(2)}`)
console.log(`O faturamento total foi de ${total.toFixed(2)}`)

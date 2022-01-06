// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const faturamento = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

// • Número de dias uteis no mês
let diasUteis = faturamento.filter(function (e) {
  return e.valor !== 0;
})

//• Media mensal sem contar feriados e fins de semana
const media = faturamento.reduce((prev, curr) => prev += curr.valor, 0) / diasUteis.length;

//• Dias Mariores que media mensal
let maiorMedia = 0;

function maiores(nums) {
  for (i = 0; i <= nums.length; i++) {
    if (nums[i] >= media) {
      maiorMedia++
    }
  }
  // return `A quantidade maior que a média é:  ${maioress}`
  console.log(`A quantidade maior que a média é:  ${maiorMedia}`)
}

// • O menor valor de faturamento ocorrido em um dia do mês;
const min = diasUteis.reduce((prev, curr)=>{
  if(curr.valor < prev.valor) prev = curr;
  return prev;
});

// • O maior valor de faturamento ocorrido em um dia do mês;
const max = diasUteis.reduce((prev,curr)=>{
  if(curr.valor > prev.valor) prev = curr;
  return prev;
});

console.log("O valor medio é " + media)
console.log("O valor minimo é " + min.valor)
console.log("O valor maximo é " + max.valor)
console.log("A quantidade de numeros maiores que a média é mensal é :" + diasUteis.length)

// console.log(diasUteis.length)
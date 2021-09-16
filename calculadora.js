      const sedentario = 1.0;
const maior19Hbaixa = 1.11;
const maior19Hativa = 1.25;
const maior19Hintenso = 1.48;
const maior19Mbaixa = 1.12;
const maior19Mativa = 1.27;
const maior19Mintenso = 1.45;
const menor18Hbaixa = 1.13;
const menor18Hativa = 1.26;
const menor18Hintenso = 1.42;
const menor18Mbaixa = 1.16;
const menor18Mativa = 1.31;
const menor18Mintenso = 1.56;
var $nome = document.getElementById('name');
var $idade = document.querySelector(".idade");
var $genero = document.querySelector('.genero');
var $peso = document.querySelector('.peso');
var $altura = document.querySelector('.altura');
var $idade = document.querySelector('.idade');
var $AF = document.querySelector('.AF');
var $proteina = document.querySelector(".proteina");
var $lipidio = document.querySelector('.lipidio');
var $exibir = document.querySelector('.resultado');
var valorAf = 0;
var FormulaGet = 0;
var IMC = 0;
function LimparValores() {
  $idade.value = '';
}
function DefinirIMC(){
    IMC =  $peso.value/($altura.value* 0.01)**2;
    return IMC;
}
function DefinirValorAF() {
  if ($AF.value === 'sedentario') {
    return valorAf = sedentario;
  } else if ($idade.value <= 18 && $genero.value === 'homem' && $AF.value === 'leve') {
    return valorAf = menor18Hbaixa;
  } else if ($idade.value <= 18 && $genero.value === 'mulher' && $AF.value === 'leve') {
    return valorAf = menor18Mbaixa;
  } else if ($idade.value <= 18 && $genero.value === 'homem' && $AF.value === 'moderado') {
    return valorAf = menor18Hativa;
  } else if ($idade.value <= 18 && $genero.value === 'mulher' && $AFativae === 'moderado') {
    return valorAf = menor18Mativa;
  } else if ($idade.value <= 18 && $genero.value === 'homem' && $AF.value === 'intenso') {
    return valorAf = menor18Hativa;
  } else if ($idade.value <= 18 && $genero.value === 'mulher' && $AFativae === 'intenso') {
    return valorAf = menor18Mativa;
  } else if ($idade.value > 18 && $genero.value === 'homem' && $AF.value === 'leve') {
    return valorAf = maior19Hbaixa;
  } else if ($idade.value > 18 && $genero.value === 'mulher' && $AF.value === 'leve') {
    return valorAf = maior19Mbaixa;
  } else if ($idade.value > 18 && $genero.value === 'homem' && $AF.value === 'moderado') {
    return valorAf = maior19Hativa;
  } else if ($idade.value > 18 && $genero.value === 'mulher' && $AFativae === 'moderado') {
    return valorAf = maior19Mativa;
  } else if ($idade.value > 18 && $genero.value === 'homem' && $AF.value === 'intenso') {
    return valorAf = maior19Hintenso;
  } else if ($idade.value > 18 && $genero.value === 'mulher' && $AFativae === 'intenso') {
    return valorAf = maior19Mintenso
  }
}
function DefinirFormula(){
  if ($genero.value ==='homem' && IMC < 25){
    return FormulaGet = (662 - (9.53 * ($idade.value)) + ((valorAf) * (15.91 * ($peso.value))) + (539.6 * ($altura.value) * 0.01));
     
  } else if($genero.value ==='homem' && IMC > 25){
    return FormulaGet =(1086 - (10.1 * $idade.value)) + valorAf* (13.7 * $peso.value) + (416 * $altura.value);
    
  }
  if ($genero.value ==='Mulher' && IMC < 25){
    return FormulaGet =(354 - (6.91 * $idade.value)) + valorAf * (9.36 * $peso.value) + (726 * $altura.value);
    
  } else if($genero.value ==='Mulher' && IMC > 25){
    return (448 - (7.95 * $idade.value)) + valorAf * (11.4 * $peso.value) + (619 * $altura.value);
    
  }
}

function enviar() {
  DefinirIMC()
  DefinirValorAF();
  DefinirFormula();
  $exibir.textContent = FormulaGet.toFixed(2)+" Kcal";
  LimparValores();

}
     
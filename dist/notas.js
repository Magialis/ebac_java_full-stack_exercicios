"use strict";

var alunos = [{
  nome: 'Ana',
  nota: 5
}, {
  nome: 'Lucas',
  nota: 8
}, {
  nome: 'Milena',
  nota: 10
}, {
  nome: 'Gustavo',
  nota: 6
}, {
  nome: 'Mateus',
  nota: 4
}, {
  nome: 'Vanessa',
  nota: 7
}, {
  nome: 'Roberta',
  nota: 5
}, {
  nome: 'Guilherme',
  nota: 6
}];
var alunosQuePassaramDeAno = alunos.filter(function (alunos) {
  return alunos.nota >= 6;
});
console.log(alunosQuePassaramDeAno);
// Conteúdo da aula

// let x = new Array();
// x = ["João", "Pedro", "Maria", "Joana"]
// document.write(x[2]+"<hr/>")
// document.write(x+"<hr/>")
// document.write(x.length+"<hr/>")
// x[1] = "AAAAA"
// console.table(x)

// for(bomdia = 0 ; bomdia<x.length; bomdia++){
//     document.write(x[bomdia]+"<br/>")
// }

// Atividade

let qtd = prompt("Quantos nomes você quer digitar?")
let array = new Array()
for(repeat = 0; repeat < qtd; repeat++){
    array[repeat] = prompt(`Digite o ${repeat+1}° nome:`)
}
for(n = 0; n<array.length;n++){
    document.write(array[n]+"<br/>")
}
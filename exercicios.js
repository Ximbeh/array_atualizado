//1 e 2
let nomes = ["Cebolinha", "Cascao", "Monica", "Magali", "Louco"]
let salarios = ["R$ 90,00", "R$ 80,00", "R$ 100,00", "R$ 50,00", "R$ 1,00", "R$150,00", "R$20,00", "R$30,00"]

console.log (nomes)
console.log (salarios)

//3
let booleanas = "[3 > 5, 1 < 10, 6 >= 6]"
console.log(booleanas)

//4 
let matriz = [[2, 4,8]]
let preço = ["10"]

for(i in matriz){
    matriz [i][0] *= preço
    }
    for(i in matriz){
        matriz [i][1] *= preço
        }
        for(i in matriz){
            matriz [i][2] *= preço
            }

    console.log (matriz)

    //5
Q5pre = [10.0,29.9,32.6];
Q5 = [];
for(i of Q5pre){
    Q5.push(i)
    Desconto = i * (95/100)
    Q5.push(Desconto);
    console.log(Q5)
}

//6

let matriz2 = [[2, 4, 8],[6, 9, 2], [6, 8, 6]]
for(let i in matriz){
    console.log("|", matriz[i][0], matriz[i][1], matriz[i][2], "|")
}
console.log('Dobro')
for (let i in matriz){
  
    matriz2[i][i] *= 2
    console.log("|", matriz[i][0], matriz[i][1], matriz[i][2], "|") 
}

//7

function random(max,min){
    n = Math.floor(Math.random()* (max - min) + min);
    return n;
}

q7 = []
for(i = 0; i < 2; i++){
    arr = []
    q7.push(arr);
    for(ii = 0; ii < 2; ii++){
        q7[i].push(random(9,0));
    }

}

determina = (q7[0][0]* q7[1][1]) - (q7[0][1] * q7[1][0]);
console.log(q7, determina);
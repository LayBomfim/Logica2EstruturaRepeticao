//| `10 em 10` | Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em 
//vez dos numeros 60 e 90 imprima a palavra "CONTINUE".|


function tabuada(num){
    for(let i = 1; i <= 10; i++) {
        let multiplicacao = num * i ;
        let result = console.log(`${num} x ${i} = ${multiplicacao} `)
    }
    return 'Funcionou'
}
console.log(tabuada(4))
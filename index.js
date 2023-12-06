console.log("O ano novo está chegando! Uhu!!")
console.log("----------")
let cantora = "Mariah Carey"
let idade = 54
let anoNascimento = 2023 - 54
console.log("A " + cantora +" nasceu no ano de " + anoNascimento + " e tem " + idade + " anos.")
console.log("----------")
let cantor = "Roberto Carlos"
let anoNasc = 1941
let age = 2023 - anoNasc
console.log(`Ninguém perguntou, mas o ${cantor} tem ${age} anos. Ele nasceu em ${anoNasc}.`)
console.log("----------")
let quartaFeira = true
if(quartaFeira === true){
console.log("Oba! Hoje é quarta-feira! Tem aula da Karynne!!!")
}
else("Ah... Hoje não é quarta-feira...")
console.log("----------")
console.log("O tipo de 'quartaFeira' é " + typeof quartaFeira + ".")
console.log("----------")
let id = 17
if (id >=18){
console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey")
}
else {
    console.log("Você não tem idade suficiente. Sinto muito, mas assistirá ao show do Roberto Carlos com participação especial de Mariah Carey apenas pela tv globo.")
}

console.log("----------")

console.log("Sobre o mês de aniversário: ") 

let Agosto = true
let Dezembro = false
let Junho = false
let mes

if (Agosto || Dezembro|| Junho === true){
    console.log("Uma ou mais opções estão corretas.")
}
else{
    console.log("Algo de errado não está certo")
}

if(mes = Agosto){
console.log("O mês escolhido foi Agosto") 
}
else if (mes = Dezembro){
    console.log("O mês escolhido foi Dezembro") 
    }
else if (mes = Junho){
    console.log("O mês escolhido foi Junho") 
    }
    else{
        console.log("valor invalido")
    }
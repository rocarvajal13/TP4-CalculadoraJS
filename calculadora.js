const elemDisplay= document.querySelector("#display").innerText="0";
console.log(elemDisplay);
let valor1=0;
let valor2=0;
let operacion="";
const btnNum1=document.querySelector("#btnNum1")
const btnOpSuma=document.querySelector("#btnOpSuma")
const btnOpResta=document.querySelector("#btnOpResta")
const btnNum2=document.querySelector("#btnNum2")
const btnNum3=document.querySelector("#btnNum3")
const btnNum4=document.querySelector("#btnNum4")
const btnNum5=document.querySelector("#btnNum5")
const btnNum6=document.querySelector("#btnNum6")
const btnNum7=document.querySelector("#btnNum7")
const btnNum8=document.querySelector("#btnNum8")
const btnNum9=document.querySelector("#btnNum9")
const btnNum0=document.querySelector("#btnNum0")
const btnOpIgual=document.querySelector("#btnigual") 
function asignarValor(valor){
    if(!operacion || !valor1){
        valor1=valor;
    }else{
        valor2=valor;
    }
}
btnNum1.addEventListener("click", (e)=>{
    document.querySelector("#display").innerText=e.target.innerText;
    asignarValor(Number(e.target.innerText));
})
btnOpSuma.addEventListener("click", (e)=>{
operacion="+"
document.querySelector("#display").innerText=e.target.innerText;
})
btnOpResta.addEventListener("click", (e)=>{
operacion="-"
})
btnNum2.addEventListener("click", (e)=>{
    document.querySelector("#display").innerText=e.target.innerText;
    asignarValor(Number(e.target.innerText));
})
btnNum3.addEventListener("click", (e)=>{
    document.querySelector("#display").innerText=e.target.innerText;
    asignarValor(Number(e.target.innerText));
})
btnNum4.addEventListener("click", (e)=>{
    document.querySelector("#display").innerText=e.target.innerText;;
    asignarValor(Number(e.target.innerText));
})
btnNum5.addEventListener("click", (e)=>{
    document.querySelector("#display").innerText=e.target.innerText;;
    asignarValor(Number(e.target.innerText));
})
btnNum6.addEventListener("click", (e)=>{
    document.querySelector("#display").innerText=e.target.innerText;;
    asignarValor(Number(e.target.innerText));
})
btnNum7.addEventListener("click", (e)=>{
    document.querySelector("#display").innerText=e.target.innerText;;
    asignarValor(Number(e.target.innerText));
})
btnNum8.addEventListener("click", (e)=>{
    document.querySelector("#display").innerText=e.target.innerText;;
    asignarValor(Number(e.target.innerText));
})
btnNum9.addEventListener("click", (e)=>{
    document.querySelector("#display").innerText=e.target.innerText;;
    asignarValor(Number(e.target.innerText));
})
btnNum0.addEventListener("click", (e)=>{
    document.querySelector("#display").innerText=e.target.innerText;;
    asignarValor(Number(e.target.innerText));
})



btnigual.addEventListener("click", ()=>{
const total=calculadora(valor1,valor2,operacion);
document.querySelector("#display").innerText=total;
valor1=total;
valor2=0;
operacion="";
})

function calculadora(op1,op2, operacion){
    switch(operacion){
    case '+':
         console.log("Sumando")
        return op1+op2;
    case '-':
        console.log("Restando")
        return op1-op2;
    case '*':
        console.log("Multiplicando")
        return op1*op2;
    case '/':
        console.log("Dividiendo")
        if (op2!=0){
        return op1/op2;}
        default:
            return "Operacion no valida";
            
    }
}


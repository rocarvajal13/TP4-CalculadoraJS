function suma(op1,op2, operacion){
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
        else{
            
        }
        
    }
}


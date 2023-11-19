//esercizio 1
/*const stringJSON = `
    {
        "nome": Gianni",
        "age": 21
    }
`;

const safeParseJSON = (stringa) =>{
    try{
    const obj = JSON.parse(stringa);
    console.log('analisi riuscita')
    return obj;
    }catch(error){
       console.warn('analisi non riuscita');
       return null;
       
    }
    
}

const result = safeParseJSON(stringJSON);
console.log(result);
*/

//esercizio 2
/*
const array = ["pomodori", "uova", "farina", "latte"];

const logElements=(array)=>{
    array.forEach((prodotti)=>{
        console.log(prodotti);
    });
};
logElements(array);
*/

//esercizio 3

const divide = (dividendo, divisore)=>{
    try{
        if(divisore === 0){
        throw new Error('impossibile dividere per 0');
        } 
        return dividendo/divisore;

    }catch(error){
        console.error(error);
        return null;
        
    }    
}
const test = divide(10,0);
console.log(test)

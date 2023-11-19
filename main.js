//esercizio 1
const stringJSON = `
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


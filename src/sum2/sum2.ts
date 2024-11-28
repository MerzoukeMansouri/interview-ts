export const sum = (a: number[], b: number) => {
    let result;
    a.forEach((value1, index1) => {
        a.forEach( (value2, index2) => {
            if(value1 + value2 === b && index1 != index2) result = [index1, index2]
        })
    })
    return result;
}

/// ALGO: algo sur des tableau 
// (trouver les index dans un tableau pour que la somme des index face une valeur target )

/// utilisation d'axios
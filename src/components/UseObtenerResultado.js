

const UseObtenerResultado = (n) => {
    //Valor del triangular(n-1)
    const triangular = (n) => {
        return n*(n+1)/2;
    };

    //Valor de fibonacci(n)
    const fibonacci = (n) => {
        return Math.round((1/Math.sqrt(5))*(((1+Math.sqrt(5))/2)**n-((1-Math.sqrt(5))/2)**n));
        //Redondeamos porque comienzan a aparecer decimales cuando n es muy grande
    };

    //Valor de primo(n)
    const primo = (n) => {
        let contador = 0;
        let resultado = 0;
        let numeroAProbar = 2; //El primer número primo
        
        while (contador < n) {
            let i=1;
            let divisores=0;
            while (i<=numeroAProbar){   //i serán todos los números desde 1 hasta el número de prueba
                if (numeroAProbar%i===0){
                    divisores+=1;
                };
                if (i===numeroAProbar){
                    if (divisores===2){     //Si son sólo dos divisores (1 y el propio número), entonces es primo
                        resultado=numeroAProbar; 
                        contador++;
                    };
                };
                i++;
            };
            numeroAProbar++; //Probamos el siguiente número
        };
        return resultado;
    }

    //Resultado total
    const serie = (n) => {
        return 4*primo(n)-triangular(n-1)+fibonacci(n+2);
    };

    return serie(n);
}
 
export default UseObtenerResultado;
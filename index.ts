/* function soma (a: number, b: number) { //variáveis podem ser tipadas
    return a + b;
}

soma('a', 'b'); */

//types 
//interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

//Atalho CTRL + es+aço, indica quais as opções contidas na interface Ianimal. Assim como as opções contidas nas promisses.
const animal: IAnimal = { 
    nome: 'Elefante',
    tipo: "terrestre",
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

animal.executarRugido('s');

const felino: IFelino = {
    nome: 'Leão',
    tipo: "terrestre",
    visaoNoturna: true;
}
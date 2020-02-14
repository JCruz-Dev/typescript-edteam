import { random } from 'lodash';
import { Saludos } from './utils/index';

function numeroAleatorio(a: number, b: number): number {
    return random(a, b);
}
console.log('Numero aleatorio: ', numeroAleatorio(2, 5));
console.log('Aleatorio', random(10, 20));
console.log(Saludos());

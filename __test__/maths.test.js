//import { describe } from "yargs";
import { sumar, multiplicar, restar, dividir } from "../maths";

describe('Calculos matematicos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1, 1)).toBe(2);
    });
    test('Multiplicar', () => {
        expect(multiplicar(2, 2)).toBe(4);
    });
    test('Restas', () => {
        expect(restar(3, 2)).toBe(1);
    });
    test('Dividir', () => {
        expect(dividir(6, 2)).toBe(3);
    });
});
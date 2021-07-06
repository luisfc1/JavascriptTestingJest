import { arrayFruits, arrayColors } from "../arrays";

describe('Comprobaremos que existe un elemento', () => {
    test('¿Tiene una banada?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('No contiene un platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
});
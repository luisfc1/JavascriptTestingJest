describe('Comprobar cadenas de texto', () => {

    const text = 'es un bonito texto';

    test('Debe contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/);
    });

    test('No contiene el siguiente texto', () => {
        expect(text).not.toMatch(/esa/);
    });

    test('comprobar el tamaño de un texto', () => {
        expect(text).toHaveLength(18);
    });

});
//const { TestWatcher } = require("jest");

describe('Comparadores comunes', () => {
    const user = {
        name: "Luis",
        lastname: "Caute"
    };
    const user2 = {
        name: "luis",
        lastname: "caute"
    };

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user);
    });

    test('No son exactamente iduales', () => {
        expect(user).not.toEqual(user2);
    });

});
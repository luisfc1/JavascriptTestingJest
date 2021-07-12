import { getdataFromApi } from "../promise";

describe('Probando promesas', () => {
    test('Realizando una peticion a una api', done => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getdataFromApi(api).then(data => {
            //  console.log(data);
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });
    });
});
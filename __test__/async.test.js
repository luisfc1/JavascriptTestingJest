import "regenerator-runtime/runtime";

import { getdataFromApi } from "../promise";

setTimeout(function() {}, 5000);
describe('Provar Async/Await', () => {
    test('Realizar una peticion a una api', async() => {
        const api = 'https://rickandmortyapi.com/api/character/';
        const getRick = 'https://rickandmortyapi.com/api/character/1';
        await getdataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        });
        await getdataFromApi(getRick).then(data => {
            expect(data.name).toEqual('Rick Sanchez');
        });
    });
});
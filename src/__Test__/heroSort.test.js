import { getSortHeroes } from '../heroSort.js';

describe('getSortHeroes', () => {
    test('сортировка "health"  по убыванию', () =>{
        const heroes = [
             {name: 'мечник', health: 10},
             {name: 'маг', health: 100},
             {name: 'лучник', health: 80},
        ];

        const expected = [
             {name: 'маг', health: 100},
             {name: 'лучник', health: 80},
             {name: 'мечник', health: 10},
        ];

        const result = getSortHeroes(heroes);
        
        expect(result).toEqual(expected);
    })

    
})


import {expect, jest, test} from '@jest/globals';

describe('Prueba del componente <Demo />', () => {

    test('Comparar dos objetos de tipo cadena', () => {
    
        // if(true === true){
        //     throw new Error('No se cumple con la condición');
        // }
    
        const name1 = "Daniel ";
        const name2 = name1.trim();
        expect( name1 ).toBe( name2 );
    })

    test('Comparar dos objetos de tipo cadena', () => {
    
        // if(true === true){
        //     throw new Error('No se cumple con la condición');
        // }
    
        const name1 = "Daniel";
        const name2 = name1.trim();
        expect( name1 ).toBe( name2 );
    })

})

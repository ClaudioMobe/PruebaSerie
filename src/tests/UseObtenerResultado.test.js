import UseObtenerResultado from '../components/UseObtenerResultado';

describe('Verificar las 10 primeras n en serie(n)', ()=>{
    describe('testSerie', () => {

        test('n=1', ()=>{
            const result = UseObtenerResultado(1);
            expect(result).toBe(10);
        });
        test('n=2', ()=>{
            const result = UseObtenerResultado(2);
            expect(result).toBe(14);
        });
        test('n=3', ()=>{
            const result = UseObtenerResultado(3);
            expect(result).toBe(22);
        });
        test('n=4', ()=>{
            const result = UseObtenerResultado(4);
            expect(result).toBe(30);
        });
        test('n=5', ()=>{
            const result = UseObtenerResultado(5);
            expect(result).toBe(47);
        });
        test('n=6', ()=>{
            const result = UseObtenerResultado(6);
            expect(result).toBe(58);
        });
        test('n=7', ()=>{
            const result = UseObtenerResultado(7);
            expect(result).toBe(81);
        });
        test('n=8', ()=>{
            const result = UseObtenerResultado(8);
            expect(result).toBe(103);
        });
        test('n=9', ()=>{
            const result = UseObtenerResultado(9);
            expect(result).toBe(145);
        });
        test('n=10', ()=>{
            const result = UseObtenerResultado(10);
            expect(result).toBe(215);
        });

    });
});
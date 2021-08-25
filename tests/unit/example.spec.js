// $ yarn test:unit 
describe('Example  Component', () => {
    test('Debe ser mayor a 10 ', () =>{
      let value = 5;
      value = value + 10;

      expect(value) .toBeGreaterThan(10);
    })
})

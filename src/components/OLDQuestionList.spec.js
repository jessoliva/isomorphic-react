describe(`The Question List`, () => {
    // runs before each test
    beforeEach(() => {
        console.log('before each');
    });

    // runs before the beforeEach
    beforeAll(() => {
        console.log('before all');
    });

    // runs after each test and after each beforeEach
    afterEach(() => {
        console.log('after each');
    });

    // runs after all tests
    afterAll(() => {
        console.log('after all');
    });

    it(`should display a list of items`, () => {
        expect (2+2).toEqual(4);
    });

    // adding  .only  after it, will only run this test
    // adding  .skip  after it, will skip this test

});
// import jest from 'jest';
let __value = 42;

// this creates a spy function and always returns value
const isomorphicFetch = jest.fn(()=>__value);

// define an api to set the value
isomorphicFetch.__setValue = v => __value = v;

// exported as a default module
// lets jest know to export this as the default module
export default isomorphicFetch;
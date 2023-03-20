// anywhere you use JSX, you need to import React
import React from 'react';

// import component itself
import TagsList from './TagsList'

// to render the component
import renderer from 'react-test-renderer';


describe("The tags list",()=>{
    /**
     * The tagsList can be tested against an expected snapshot value, as in below.
     */
    it ("renders as expected",()=>{

        // define tree
        // a JSON representation of the component
        // pass a react component to renderer.create and it returns a json representation of the component
        const tree = renderer
           .create(<TagsList tags={[`css`,`go`,`typescript`,`coffeescript`]}/>)
           .toJSON();
           // call to JSON so that it returns a JSON representation of the component

        // compare tree to snapshot
        expect(tree).toMatchSnapshot();
    });  
});
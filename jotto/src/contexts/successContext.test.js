import React from 'react';
import { shallow, mount } from 'enzyme';

import {useSuccess,SuccessProvider} from './successContext';

//functional component that calls useSuccess for our tests
const FunctionalComponent = () => {
    useSuccess();
    return <div />;
}

test('useSuccess throws error when not wrapped in a SuccessProvider', ()=> {
    expect(()=> {
        shallow(<FunctionalComponent />);        
    }).toThrow("useSuccess must be used within a SuccessProvider");
});

test('useSuccess does not throw error when wrapped in a SuccessProvider', ()=> {
    expect(() => {
        mount(
          <SuccessProvider>
            <FunctionalComponent />
          </SuccessProvider>
        )
      }).not.toThrow();
});
import React from 'react';
import { shallow, mount } from 'enzyme';

import successContext from './successContext';

//functional component that calls useSuccess for our tests
const FunctionalComponent = () => {
    successContext.getContext();
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
          <successContext.SuccessProvider>
            <FunctionalComponent />
          </successContext.SuccessProvider>
        )
      }).not.toThrow();
});
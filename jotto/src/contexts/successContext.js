import React from 'react';

const successContext = React.createContext();

/**
* @function useSuccess
* @returns {array} successContext value, which is a state of [value, setter].
*
*/
export const useSuccess = () => {
    const context = React.useContext(successContext);

    //check to ensure we are using in a provider. If not 
    //we throw the error to inform. 
    if(!context) {
      throw new Error('useSuccess must be used within a SuccessProvider');
    }
  
    return context;
}

/**
* @function SuccessProvider
* @param {object} props - props to pass through from declared component
* @returns {JSX.Element} Provider component
*/
export const SuccessProvider = (props) => {
    const [success,setSuccess] = React.useState(false);

    //useMemo hook ensures we aren't recalculating the value more than we need to
    //useMemo only recomputes the value when one of the dependencies has changed
    //this helps avoid expensive calculations on every render
    //the function passed to useMemo runs during render. 
    const value = React.useMemo(()=> [success,setSuccess], [success]);
    return <successContext.Provider value={value} {...props} />
}

export default { SuccessProvider, useSuccess};
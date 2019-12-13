# Jotto - word guessing game
This is an example application that demonstrates testing components in React. 

## Components
* App
    * Title, contains children components
* Input
    * Input box 
    * Submit button
* Guessed Words
    * Table containing words guessed
* Message
   * Displays messages in the application

## Workflow 
* Initial loading of the application
    * No guessed words will display, instead the instructions will be displayed.
    *  Title will be displayed
    *  Input box will be displayed
    *  Button will be displayed

* Some guesses have been made, but correct word hasn't been guessed 
    * Guessed words table is displayed with guessed tries
    * The table will have a column for guesses, and a column for matching letter count 
    * Instructions are not displayed
    * Title is displayed
    * Input box displayed
    * Button displayed

* Correct Word is guessed
    * Guessed words table is displayed with guessed tries
    * Instructions are not displayed
    * Input not displayed
    * Button not displayed
    * Title is displayed
    * Message is displayed with congrats message. 

* API Server serves random word

# Hooks
* Allows state and lifecycle events in functional components
   * No need for complexity for class (or this)
* Easier code re-use among components
   * Can mix and match logic among components
   * Ex: 
        Component A & Component B tracks mouse and changes color based on mouse position
        With Hooks, both A and B can reuse logic for the mouse tracking 

* useEffect hook is used to handle lifecycle events in your component. 


# Context 
* Context is used for 
    * Global Settings (language, visual themes)
    * Deeply nested components thst need access to a value but ancestors don't need access to that prop. Avoids prop drilling; however, should try to composition when possible not to over pollute the global context. 

* Using context
   * Components that use a context, need to be wrapped in a Provider
   * The context value is passed to the provider as a prop
   * When context changes the provider will update the children
      * Value can be local state for the parent component
      * Or you can use a pattern to embed state into context (custom hook)
   * You can have multiple context, or in a larger app you can combine all of the context into a single provider, and use the useReducer hook to determine what context needs to be updated. 


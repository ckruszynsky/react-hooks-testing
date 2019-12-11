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
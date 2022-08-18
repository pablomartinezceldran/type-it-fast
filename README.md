# Type it Fast

The game goal is to score points by typing the right
first letter of the emoji appearing on the screen.

The player has 60 seconds to score as many points as possible.

## Documentation

This web app has been programmed in **React**. It consists of a main menu, where you can start the game, see the game instructions and personal scores.

In the game screen there is a header with a countdown timer, the current score and the errors. For these I have used React hooks. There is also the board where the images appear, a gradient and a keyboard.

At the end of the countdown timer, the game over screen will be shown, with the option to restart a game or go to the main menu.

## Problems and future improvements

The main problem I have had is moving the images around the board. I have tried CSS animations and other alternatives but either it only ran once or it didn't move at all.

Another important problem has been reading inputs from the keyboard. Too many pressed keys were read at once. In order to partially solve it, I have developed a virtual keyboard on screen that also allows its use in mobile devices.

There are things that I have left out. One of them is to save the scores in a database and to be able to log in.
I would also like to add an option to share the web app with friends and be able to challenge each other.

I originally wanted to process the images in a queue and check that the key pressed was the front of the queue. Then I changed it to only process a single image using a hook.

## Things I am proud of

Personally I think the look and feel has turned out very well.

I have tried to make the web app as responsive as possible, so it can be used on mobile devices.

With this project I have been able to expand my knowledge of React, such as the use of hooks and functions like useEffect, setTimeout and others.

## Author

- [@pablomartinezceldran](https://www.github.com/pablomartinezceldran)

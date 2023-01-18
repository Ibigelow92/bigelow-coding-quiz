# bigelow-coding-quiz

## Description

The purpose of this project was to become more familiar with Web APIs. Building it really helped me reinforce my understanding of how JavaScript interacts with HTML and makes it interactive. Specifically, I learned about using query selectors, creating timers and setting items in local storage, as well as removing them. 

## Installation

To have a working local version, clone the repository to your device. To simply use the application, all that is needed is to use the following URL: https://ibigelow92.github.io/bigelow-coding-quiz/

## Usage

Essentially, this is an application designed to test one's knowledge of coding. As this is just a prototype, I have included only four questions and have set the time limit to forty seconds to allow the user ten seconds on average for each question. If and when I decide to add more questions, I'll adjust the timer so as to keep the average time allowed for each question to 10 seconds. 

You will begin on a landing page with two buttons, "Play" and "High Scores". The "Play" button initiates the quiz and the "High Scores" button takes you to the high scores page. 

![quiz-homepage](https://user-images.githubusercontent.com/115512219/212800267-1fd0468f-b224-47a9-ab5e-8438d3f08897.jpg)

If you press the "Play" button, this will initiate the timer and you will have forty seconds to complete the four questions. 

![quiz-quizpage](https://user-images.githubusercontent.com/115512219/212800416-12c20528-add2-4fab-8736-c00b68ab825f.jpg)

If you do not complete the entire quiz within the alotted time, your score will be zero and you will be directed to the end page. Otherwise, your score will display on the end page and you will have the option to save your score. Simply type in your initials and click "save". This will set the initials and your score in local storage. To view it, click the "See High Scores" button. 

![quiz-endpage](https://user-images.githubusercontent.com/115512219/212800565-aba4fe98-74e8-4f26-9aaf-68303afe2381.jpg)

The High Scores page features a display of the scores, a "Go Home" button and a "Clear High Scores" button. "Go Home" takes you back to the landing page and "Clear High Scores" removes all the saved score data from local storage. 

![quiz-highscorepage](https://user-images.githubusercontent.com/115512219/212800531-38c6e8ff-57c8-4fab-a58d-b5aa417498ec.jpg)

## Credits

The basic functionality of this quiz, especially in regards to JavaScript, was built by following this video tutorial: https://www.youtube.com/watch?v=f4fB9Xg2JEY. Additional elements were built as needed in order to fulfill the project's requirements, namely the timer, which was done with the help of a tutor. The "Clear Highscores" button was independent work. 

## License

MIT License

Copyright (c) 2023 Ibigelow92

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests

To test the quiz, open the application and click "Play". This will initiate the quiz. This will bring you to the quiz page. You should see a green progress bar on the lefthand side with a timer beneath it. The timer should begin counting down from 40 seconds. If you hover over one of the answer boxes, the box should scale up slightly and display a drop-shadow. If you click a correct answer, the box should flash green momentarily and your score should increase. If you click an incorrect answer, the answer box should flash red and your score will remain the same. If the time runs out, you should be directed to the end page and the score will be zero. If you complete the quiz, you will have the option to save your score. If you type in your initials, click "Save" and click "See High Scores", you will be directed to the high scores page where you will see your name and score displayed. If you click "Clear High Scores", the page will reload and the scores will be gone. 

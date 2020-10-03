![Warhammer 40k Logo](assets/images/40klogo.png)
<h2 align="left">Warhammer 40k Tic Tac Toe</h2>
<h3 align="left">App written and designed by <a href="" target="_blank">Nikolas Kotsikos</a></h2>

Welcome to a new and fresh iteration of the tic tac toe classic game!<br>
As a passionate and long time fan of the Warhammer 40,000 tabletop universe I was inspired to replace the default X and O icons used in the game traditionally with icons representing the five main factions of the Warhammer 40k universe. <br>
The user is requested to select one of  the available factions, and then the cpu selects one from the remaining four.<br>
After pressing Start A New Game, the user needs to click or tap on one of the available boxes in order to act his selected icon.<br>
The cpu follows with a random box selection, defensively coded against it selecting an occupied box on its first attempt.<br>
After the cpu has completed its turn the players take turns in that order until either one wins or loses, or there is a draw.<br> 
If the user wins, a win is added to the score counter. The user can then restart the game and select another faction.<br>
The app keeps track of the total wins in one session of play (the page has not been refreshed from the browser).<br>
The app is responsive to all orientations and screen widths and was designed with a mobile first approach.<br>
 
[Play the game!](https://nikolaskotsikos.github.io/Warhammer40kTicTacToe/)



### User Experience (UX)

*   #### User stories

    *   ##### First Time User Goals

        1. I want to easily understand how to start the game.
        2. I want to know if I've won.
        3. I want to know if I've lost or drawn.
        
    *   ##### Returning User Goals

        1. I want to be able to track my score from game to game.
        2. I want to be able to experience all available factions in one session.
        

    *   ##### Frequent User Goals

        1. I want the game to be fun.
        2. I want to be notified of invalid moves.
        3. I want to play on my mobile and tablet. 
       


*   #### Design

    -   ##### Colour Scheme
        *   The colour scheme for the website is based on a palette inspired by the various factions of the Warhammer 40k universe. The basic colors blue, green, lightgreen, purple, orange as well as default colors for Bootstrap 4.5 buttons.

    -   ##### Typography
        *   The Cormorant SC font is used as the main font for the app, with sans serif used as the fallback font.
    

*   #### Wireframes

    *   Desktop app view with the Adeptus Astartes faction selected and an invalid move flagged - <a href="https://github.com/NikolasKotsikos/Warhammer40kTicTacToe/blob/master/assets/wireframes/Wireframe-AA.png" target="_blank">View</a>

    *   Desktop app view with the T'au Empire faction selected and the user win event- <a href="https://github.com/NikolasKotsikos/Warhammer40kTicTacToe/blob/master/assets/wireframes/Wireframe-TAU.png" target="_blank">View</a>

    *   Mobile and tablet view (all sizes)- <a href="https://github.com/NikolasKotsikos/Warhammer40kTicTacToe/blob/master/assets/wireframes/Wireframe-Mobile.png" target="_blank">View</a>


    


### Features

*   Five different options for icon and background color.
*   Randomized cpu turns.
*   User notifications for invalid moves.
*   Information text dynamically responds to game events.
*   Dynamic score keeping.
*   Responsive on *all* common device sizes.



### Technology Stack

#### Languages Used

-   The app was created using [HTML5](https://en.wikipedia.org/wiki/HTML5) styled with custom [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) styles. The logic scripts were written in [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
#### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.5:](https://getbootstrap.com/)
    * Bootstrap 4.5 css was used to create the selector and game board elements of the app with custom styles applied where necessary.
2. [JQuery 3.5:](https://jquery.com/)
    * JQuery methods variables and selectors are used with the goal of minimizing the length of the code.
3. [Google Fonts:](https://fonts.google.com/)
    * Google fonts were used to import the 'Cormorant SC' font into the style.css file which is used on all text elements of the app.
4. [Git:](https://git-scm.com/)
    * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
5. [GitHub:](https://github.com/)
    * GitHub was used to store the projects code after being pushed from Git.
7. [GitPod:](https://gitpod.io)
    * GitHut very own IDE was used to write all of the code for this app.
6. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    * Photoshop was used to create the app logo and the transparent background images for the faction icons, as well as for minor styling and size changes to them.
7. [Lucidchart:](https://lucid.app/users/login#/login)
    * Lucidchart was used to create both the *wireframes* shown above for the front end design as well as the [flowcharts](https://github.com/NikolasKotsikos/Warhammer40kTicTacToe/assets/diagrams/Flowchart-Logic.png) and [diagrams](https://github.com/NikolasKotsikos/Warhammer40kTicTacToe/assets/diagrams/Diagram-VictoryConditions.png) for the app's logic.



### Testing

The [W3C Markup Validator](https://validator.w3.org/) and [W3C CSS Validator](https://validator.w3.org/) Services were used to validate the HTML and CSS code respectively<br>
The Chrome Developer Tools console and JQuery debbuger function were used to debug the JavaScript/JQuery logic code.<br>
The HTML results produced some errors regarding the placement of h elements within button elements and the duplication of the ids for the .select buttons.<br>
As those were intentionally as such and the overall result works without issue -after consulting also with the tutor team over their importance- they are submited as they are.<br>
The CSS code passed with no errors and the JavaScript/JQuery script returns no console errors.<br>
The results are provided below:

*   [HTML Validation Results](https://github.com/NikolasKotsikos/NikolasKotsikos-OnlineCV/tree/master/testing/html)
*   [CSS Validation Results](https://github.com/NikolasKotsikos/NikolasKotsikos-OnlineCV/blob/master/testing/CSSResults.png)


#### Testing User Stories from User Experience (UX) Section

*   ##### First Time User Goals`

    1. I want to easily understand how to start the game.

        *  When starting the app, the user is greeted with a line of text instructing them to select one of the available factions. These appear in a location easily visible to the user on all viewport sizes. 
        *  The user is presented with a visually non-ambiguous navigation bar. From there the user can easily navigate to the individual page they want to visit.
       
    2. I want to know when if I've won.

        *  If the user or cpu have three boxes that match one of the winning combinations, the logic responds with an onscreen event. 
        *  If the player has won the winning boxes are highlighted green.

    3. I want to know if I've lost or drawn.

        * If the cpu has won the winning boxes are highlighted red.
        * The information line reports the loss, the score is not updated and the user is prompted to press restart to begin again.
        * If no more boxes are empty, the logic determines the result to be a draw, reports it on the information line and prompts the player to press restart to begin again.
       
-   ##### Returning User Goals

    1. I want to be able to play track my score from game to game.

        * Each time the user wins a game the score board is updated automatically.        
        * The score for a continuous session of consecutive games is logged on the score board.

    2. I want to be able to experience all available factions in one session.

        * The restart button lights up automatically after a new game is started.    
        * Pressing restart gives the user the option to select faction once again. 
        * The user can restart the game infinitelly and can experience all factions and backgrounds in once continuous session.
   
-   ##### Frequent User Goals

    1. I want the game to be fun.

        * Having the cpu take a random turn provides the app with a layer of unpredictability, and as tic tac toe is a [solved game](https://en.wikipedia.org/wiki/Solved_game) allows for various results.
        * That in turn helps each new game feel different, as randomly the cpu can actually contest, win or draw a game. As attested by users on both 

    2. I want to be notified of invalid moves.

         * The logic identifies when an occupied box is selected by the user and flashes it red for half a second. 
         * Simultaneously the information line displays the message invalid move, followed by a prompt for the user to select a different box.

    3. I want to play on my mobile and tablet.

         * The app is designed with a mobile first approach, featuring different layouts for desktop viewports.
         * The app is intuitive and easy to use on all mobile and tablet devices.
        

#### Further Testing

*   The website was tested on the latest versions of Google Chrome, Microsoft Edge, Safari and Opera browsers.
*   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone6, iPhoneX, and iPad Air.
*   Testing was done to ensure that all functions work correctly and repeatedly.
*   The app was posted on the [#Peer Code Review Channel](https://code-institute-room.slack.com/archives/CGWQJQKC5/p1601478689064200) in [Slack](https://slack.com/) and shared for community feedback on [Career Karma](https://careerkarma.com/discussions/projects/warhammer-40k-tic-tac-toe-604/), receiving overall positive UX reactions and useful feedback.
*   Friends and family members were "volunteered" to play test the game providing invaluable feedback.

#### Squashed Bugs

*   Fixed an issue where the user icon would be endlessly replicated on each click.
*   Fixed an issue where the cpu wouldn't take its turn.
*   Fixed a console error originating from the img element inside the faction select buttons being clickable.
*   Fixed an issue with the restart button becoming unresponsive after the first use.
*   Fixed an issue with the player turn being duplicated resulting in an invalid move flag.
*   Fixed an issue with the score not being updated past 1. 

#### Known Bugs
 
*   There are no known bugs at the time of submission.


### Deployment

#### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Logged in to GitHub and located the [GitHub Repository](https://github.com/NikolasKotsikos/Warhammer40kTicTacToe)
2. At the top of the Repository, located the "Settings" Button on the menu. 
3. Scrolled down the Settings page until "GitHub Pages" Section was located.
4. Under "Source", clicked the dropdown called "None" and selected "Master Branch".
5. The page automatically refreshed.
6. Scrolled back down through the page to locate the now published site [link](https://github.com/NikolasKotsikos/Warhammer40kTicTacToe/index.html) in the "GitHub Pages" section.

### How to install this project locally

To clone this project from GitHub:

1. Go to the [Project GitHub repository](https://github.com/NikolasKotsikos/Warhammer40kTicTacToe).
2. In the main Repository page, in the **<>Code** tab, click on the green **Code** button and select clone with HTTPS.
3. In the Clone with HTTPs section, copy the clone URL displayed. 
4. Open Git Bash in your local editor.
5. Change the current working directory to the location where you want the cloned directory to be created.
6. Type **git clone**, and then paste the URL you copied in Step 3 and press enter.
7. Your local clone will be created.



### Future versions

#### Roadmap

*  Multiplayer functionality.
*  Additional factions and colors.
*  A semi strategic cpu turn script.


### Credits

#### Code

*   General inspiration on how to resolve some of my functions was drawn from [this](https://www.geeksforgeeks.org/create-a-tic-tac-toe-game-using-jquery/) [Geeks for Geeks](https://www.geeksforgeeks.org/) article, with any ideas being modified for the current project.
*   [This]() 

#### Content

*   All content and code for the website was written by the developer.

#### Media

*   All image and name copyrights belong to [Games Workshop Limited](https://www.games-workshop.com/en-EU/Home) and were modified by the developer in [Photoshop](https://www.adobe.com/ie/products/photoshop.html).

#### Acknowledgements

*   My mentor [Aaron Sinnott](https://www.linkedin.com/in/aaronsinnott/) for his structured and focused guidance that pussed me past my coder's blocks!
*   The amazing [Code Institute](https://www.codeinstitute.net) tutor team, namely Igor and Miklos for helping me get around some annoying issues, and Cormac for helping me squash that pesky last bug! 
*   My wife [Lida Dimitriou](https://www.linkedin.com/in/lidadimitriou/) for her immense support and patience! <3 <3 <3
*   The [Career Karma](https://www.careerkarma.com) community for their support and feedback.
*   My fellow students on [Slack](https://slack.com/) for their support and fee
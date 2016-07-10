
//function "gameme" to run code for guessing game
function gameme() {

  var userName = "";
  while ((userName == "") && (userName != null)) {
  userName = prompt("What is your name?", "");
  }
  if ((userName != null) && (userName != "")) {
    alert("Very nice to meet you " +userName+ "! \nHere is my guessing game.");
  } else {
    alert("Okay, if you're not interested, then goodbye.");
  }
  /*Insert "if" statement code to enable system to stop if user hits "Cancel" button at any time during questioning.*/
  if (userName != null) {
      var count = 0;
      query ("Did Tom grow up in Portland, Oregon?  Yes or No. ", "  Correct, " +userName+ "!  Tom grew up in Seattle, Washington.", "  Wrong, " +userName+ "!  Tom didn't move to Portland until 1994!");
      query ("Did Tom attend Washington State University?  Yes or No. ", "  Correct, " +userName+ "! Tom went to the University of Washington. Go Huskies!!!", "  Arrgh! Wrong, " +userName+ "!, Tom is a UW Husky, not a WSU Cougar.");
      query ("Does Tom really want to work for another large technology company after he completes his Code 401 class? Yes or No. ", "  Correct, " +userName+ "! Tom wants to work for a small to mid-size software development company.", "  Wrong, " +userName+ "! Never ever again does Tom want to work for a large company.");

      //YES/NO guessing game with 3 questions.
      function query(question, posFeed, negFeed) {
        var userRsp = prompt(question);
        var areEqual = userRsp.toUpperCase();
        console.log(userRsp);
        console.log(areEqual);
        var ynQuest = '';
        if ((areEqual == "NO") || (areEqual == "N")) {
          console.log(areEqual);
          ynQuest = question + posFeed + '<br/>' + '<br/>';
          console.log(ynQuest);
          count ++;
        } else {
          ynQuest = question + negFeed + '<br/>' + '<br/>';
          console.log(ynQuest);
        }
        document.getElementById('scribe1').innerHTML += ynQuest;
      };

      //Numerical years worked guessing game, with 3 as correct answer.
      var correct = 3;
      yearguess ("For how many years did Tom work for Intel?", " Yes, you are correct! 3 years with Intel.", " Sorry,your guess is too high ... and Tom is not that crazy.", " Sorry, your guess is too low.");

      function yearguess(queryYears, corMsg, highMsg, lowMsg) {
        var userYearGuess = prompt(queryYears);
        //Establish 'if' 'else if' 'else' loop for query.
        if (userYearGuess > correct) {
          //User guesses number greater than 3 ... which is too high.
          //Write question & feedback to DOM for answer that is too high.
          document.getElementById('scribe2').innerHTML += queryYears.concat(highMsg);
        } else if (userYearGuess == correct) {
          //User guesses the answer of 3 ... which is correct.
          //Write question & feedback to DOM for correct answer.
          document.getElementById('scribe2').innerHTML += queryYears.concat(corMsg);
          // Add 1 point to score for correct answer.
          count ++;
        } else {
          //User guesses number less than 3 ... which is too low.
          //Write question & feedback to DOM for answer that is too low.
          document.getElementById('scribe2').innerHTML += queryYears.concat(lowMsg);
        }
      };

      //Lucky number guessing game with 5 iterations.
      alert("Now let's play a numbers guessing game. \nI'll give you 5 tries.");
      guessnum ("Guess my lucky number between 1 and 10.", " Correct ... my lucky number is 7.", " Wrong answer. Try again.", " Sorry, but you've used up your 5 tries.");

      function guessnum(queryNum, corNbrMsg, wrgNbrMsg, limit) {
        var number = prompt(queryNum);
        for (var guessTry = 1; guessTry < 5; guessTry++) {
          if (number != 7) {
            var number = prompt(wrgNbrMsg);
            document.getElementById('scribe4').innerHTML = queryNum.concat(limit);
          } else {
            document.getElementById('scribe4').innerHTML = queryNum.concat(corNbrMsg);
            count ++;
          break;
          }
        }
      };
    //tally up final score
    alert("Game over! ... check your final score below.")
    document.getElementById('scribe6').innerHTML += (userName+ " ... Your final score is " +count+ " points out of 5. \nThanks for playing.");
  }
};

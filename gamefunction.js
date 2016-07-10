
//function "gameMe" to run code for guessing game
function gameMe() {

/*Revised code for opening question to user to account for user not providing userName, or hitting "Cancel" button when asked for userName.*/
var userName = "";
//Establish greeting function.
while ((userName == "") && (userName != null)) {
//System continues to badger user for userName until a name is provided.
userName = prompt("What is your name?", "");
}
if ((userName != null) && (userName != "")) {
  //Opening greeting to user.
  alert("Very nice to meet you " +userName+ "! \nHere is my guessing game.");
  //System response if user hits "Cancel" button.
} else {
  //System responds and quits asking questions if user hits 'Cancel' button.
  alert("Okay, if you're not interested, then goodbye.");
}
/*Insert "if" statement code to enable system to stop if user hits "Cancel" button at any time during questioning.*/
if (userName != null) {
  //Initialize score counter at 0
  var Count = 0;
  //Set parameters for 1st question.
  query ("Did Tom grow up in Portland, Oregon?  Yes or No. ", "  Correct, " +userName+ "!  Tom grew up in Seattle, Washington.", "  Wrong, " +userName+ "!  Tom didn't move to Portland until 1994!");
  //Set parameters for 2nd question.
  query ("Did Tom attend Washington State University?  Yes or No. ", "  Correct, " +userName+ "! Tom went to the University of Washington. Go Huskies!!!", "  Arrgh! Wrong, " +userName+ "!, Tom is a UW Husky, not a WSU Cougar.");
  //Set parameters for 3rd question.
  query ("Does Tom really want to work for another large technology company after he completes his Code 401 class? Yes or No. ", "  Correct, " +userName+ "! Tom wants to work for a small to mid-size software development company.", "  Wrong, " +userName+ "! Never ever again does Tom want to work for a large company.");
  //Establish function 'query' to run code for Y/N guessing game questions.
  function query(question, posfeed, negfeed) {
  var userRsp = prompt(question);
  //set var to enable code to normalize userRsp as upper case regardless of response case
  var areEqual = userRsp.toUpperCase();
  console.log(userRsp);
  console.log(areEqual);
  //Establish variable 'ynquest' for Y/N question loop.
  var ynquest = '';
  //Establish 'if' 'else' loop for Y/N question loop.
  //areEqual = normalized userResp
  if ((areEqual == "NO") || (areEqual == "N")) {
    console.log(areEqual);
    // Question + feedback for correct answer.
    ynquest = question + posfeed + '<br/>' + '<br/>';
    console.log(ynquest);
    // Add 1 point to score for correct answer.
    Count ++;
  } else {
    // Question + feedback for wrong answer.
    ynquest = question + negfeed + '<br/>' + '<br/>';
    console.log(ynquest);
  }
  // Sequentially write questions & feedback to DOM without overwrite.
  document.getElementById('scribe1').innerHTML += ynquest;
  };
  //Numerical years worked guessing game, with 3 as correct answer.
  var correct = 3;
  //Set parameters for 'yearguess' function.
  yearguess ("For how many years did Tom work for Intel?", " Yes, you are correct! 3 years with Intel.", " Sorry,your guess is too high ... and Tom is not that crazy.", " Sorry, your guess is too low.");
  //Established function 'yearguess' for years worked guessing game.
  function yearguess(queryyears, cormsg, highmsg, lowmsg) {
  var userYearGuess = prompt(queryyears);
  //Establish 'if' 'else if' 'else' loop for query.
  if (userYearGuess > correct) {
    //User guesses number greater than 3 ... which is too high.
    //Write question & feedback to DOM for answer that is too high.
    document.getElementById('scribe2').innerHTML += queryyears.concat(highmsg);
  } else if (userYearGuess == correct) {
    //User guesses the answer of 3 ... which is correct.
    //Write question & feedback to DOM for correct answer.
    document.getElementById('scribe2').innerHTML += queryyears.concat(cormsg);
    // Add 1 point to score for correct answer.
    Count ++;
  } else {
    //User guesses number less than 3 ... which is too low.
    //Write question & feedback to DOM for answer that is too low.
    document.getElementById('scribe2').innerHTML += queryyears.concat(lowmsg);
  }
  };
  //Number guessing game with 5 iterations.
  alert("Now let's play a numbers guessing game. \nI'll give you 5 tries.");
  //Set parameters for 'guessnum' function
  guessnum ("Guess my lucky number between 1 and 10.", " Correct ... my lucky number is 7.", " Wrong answer. Try again.", " Sorry, but you've used up your 5 tries.");
  //Establish function 'guessnum' for number guessing game.
  function guessnum(querynum, cornbrmsg, wrgnbrmsg, limit) {
  var number = prompt(querynum);
  //Establish 'for' loop to enable maximum 5 guesses.
  for (var guesstry = 1; guesstry < 5; guesstry++) {
  if (number != 7) {
    //If user guess is not the number 7, then the loop will continue to prompt the user for another number guess until the guess limit is reached.
    var number = prompt(wrgnbrmsg);
    document.getElementById('scribe4').innerHTML = querynum.concat(limit);
  } else {
    //If user correctly guesses the number 7, then write question & feedback to DOM, and end the 'for' loop iterations.
    document.getElementById('scribe4').innerHTML = querynum.concat(cornbrmsg);
    // Add 1 point to score for correct answer.
    Count ++;
    break;
  }
  }
  }
  //tally up final score
  alert("Game over! ... check your final score below.")
  document.getElementById('scribe6').innerHTML += (userName+ " ... Your final score is " +Count+ " points out of 5. \nThanks for playing.");
}
};

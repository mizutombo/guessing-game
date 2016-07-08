

  //function "gameMe" to run code for guessing game
  function gameMe() {
  //initialize score counter at 0
  var Count = 0;
  //opening greeting to user
  var userName = prompt("What is your name?");
  alert("Hello " +userName+ "! Here is my guessing game.");
  //Set parameters for 1st question.
  query ("Did Tom grow up in Portland, Oregon?  Yes or No", "Correct!, " +userName+ ", Tom grew up in Seattle, Washington.", "Wrong " +userName+ ", Tom didn't move to Portland until 1994!");
  //Set parameters for 2nd question.
  query ("Did Tom attend Washington State University?  Yes or No", "Correct, " +userName+ "! Tom went to the University of Washington. Go Huskies!!!", "Arrgh! Wrong! No " +userName+ ", Tom is a UW Husky, not a WSU Cougar.");
  //Set parameters for 3rd question.
  query ("Does Tom really want to work for another large technology company after he completes his Code 401 class? Yes or No", "Correct!, " +userName+ ". Tom wants to work for a small to mid-size software development company.", userName+ " ... No! Never ever again does Tom want to work for a large company.");
  //Establish function 'query' to run code for Y/N guessing game questions.
  function query(question, posfeed, negfeed) {
  var userRsp = prompt(question);
  //set var to enable code to normalize userRsp as upper case regardless of response case
  var areEqual = userRsp.toUpperCase();
  console.log(userRsp);
  console.log(areEqual);
  //areEqual = normalized userResp
  if ((areEqual == "NO") || (areEqual == "N")) {
    console.log(areEqual);
    alert(posfeed);
    Count ++;
  } else {
    alert(negfeed);
  }
  };
  //Numerical years worked guessing game, with 3 as correct answer.
  var correct = 3;
  //Set parameters for 'yearguess' function.
  yearguess ("For how many years did Tom work for Intel?", "You are correct!", "Sorry,too high.", "Sorry, too low.");
  //Established function 'yearguess' for years worked guessing game.
  function yearguess(queryyears, cormsg, highmsg, lowmsg) {
  var userYearGuess = prompt(queryyears);
  if (userYearGuess > correct) {
    //User guesses number greater than 3 ... which is too high.
    alert(highmsg);
  } else if (userYearGuess == correct) {
    //User guesses the answer of 3 ... which is correct.
    alert(cormsg);
    Count ++;
  } else {
    //User guesses number less than 3 ... which is too low.
    alert(lowmsg);
  }
  };
  //Number guessing game with 5 iterations.
  alert("Now let's play a numbers guessing game. I'll give you 5 tries.");
  //Set parameters for 'guessnum' function
  guessnum ("Guess my lucky number between 1 and 10.", "Correct ... my lucky number is 7.",   "Wrong answer. Try again.");
  //Establish function 'guessnum' for number guessing game.
  function guessnum(querynum, cornbrmsg, wrgnbrmsg) {
  var number = prompt(querynum);
  for (var guesstry = 1; guesstry < 5; guesstry++) {
    //Established 'for' loop to enable 5 guesses.
  if (number != 7) {
    //If user guess is not the number 7, then the loop will continue to prompt for another number guess until the guess limit is reached.
    var number = prompt(wrgnbrmsg);
  } else {
    //If user correctly guesses the number 7, then announce correct response and end the 'for' loop iterations.
    alert(cornbrmsg);
    Count ++;
    break;
  }
  }
  }
  //tally up final score
  var finalScore = alert("Your final score is " +Count+ " points out of 5. Thanks for playing.");
  }

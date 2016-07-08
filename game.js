   /*
  Revised code for opening question to user to account for user not providing userName, or hitting "Cancel" button when asked for userName.
  */
  var userName = "";
  while ((userName == "") && (userName != null)) {
    console.log("System continues to badger user for userName until a name is provided.");
    userName = prompt("What is your name?", "");
  }
  if ((userName != null) && (userName != "")) {
    console.log("Opening greeting to user.");
    alert("Very nice to meet you " +userName+ "!" + " Try to answer these questions about Tom.");
  // System response if user hits "Cancel" button.
  } else {
    console.log("System responds and quits asking questions if user hits 'Cancel' button");
    alert("Okay, if you're not interested, then goodbye.");
  };
  /*
  Revised code for UserResponse1 thru userResponse3 questions to exercise Y/y/YES/yes and N/n/NO/no recognition functionality tests.
  Insert "if" statement code to enable system to stop if user hits "Cancel" button at any time during questioning.
  */
  if (userName != null) {
  // Question # 1 for user; YES or NO response.
    var userScore1 = "";
    var userResponse1 = prompt("Did Tom grow up in Portland, Oregon?  Yes or No");
    console.log("First YES or NO question to user. Correct response is NO or N.");
  if ((userResponse1.toUpperCase() == "NO") || (userResponse1.toUpperCase() == "N")) {
    console.log("User answer of NO or N is correct.");
    alert(userName+ ", that is correct! Tom grew up in Seattle, Washington.");
    userScore1 = 1;
  } else {
    console.log("User answer of YES or Y is incorrect.");
    alert("Wrong " +userName+ ", Tom didn't move to Portland until 1994!");
    userScore1 = 0;
  };
  // Question # 2 for user; YES or NO response.
  var userScore2 = "";
  var userResponse2 = prompt("Did Tom attend Washington State University?  Yes or No");
    console.log("Second YES or NO question to user. Correct response is NO or N.");
  if ((userResponse2.toUpperCase() == "YES") || (userResponse2.toUpperCase() == "Y")) {
    console.log("User answer of YES or Y is incorrect.");
    alert("Arrgh! Wrong! No " +userName+ ", Tom is a UW Husky, not a WSU Cougar.");
    userScore2 = 0;
  } else {
    console.log("User answer of NO or N is correct.");
    alert("You're right, " +userName+ "! Tom went to the University of Washington. Go Huskies!!!");
    userScore2 = 1;
  };
  // Question # 3 for user; YES or NO response.
    var userScore3 = "";
    var userResponse3 = prompt("Does Tom really want to work for another large technology company after he completes his Code 401 class?  Yes or No");
    console.log("Third YES or NO question to user. Correct response is NO or N.");
  if ((userResponse3.toUpperCase() == "YES") || (userResponse3.toUpperCase() == "Y")) {
    console.log("User answer of YES or Y is incorrect.");
    alert(userName+ " ... No! Never ever again does Tom want to work for a large company.");
    userScore3 = 0;
  } else {
    console.log("User answer of NO or N is correct.");
    alert("You got that right, " +userName+ ". Tom wants to work for a small to mid-size software development company.");
    userScore3 = 1;
  };
  // Question # 4 for user; requires numerical guess.
  var userScore4 = "";
  var correct = 3;
  var workYears = prompt("How many years did Tom work for Intel? Enter a number only ... no text.");
  console.log("Fourth question to user. Numerical guess, with 3 as correct answer.");
  if (workYears > 3) {
    console.log("User guesses number greater than 3 ... which is too high.");
    alert("Too high!");
    userScore4 = 0;
  } else if (Number(workYears) === correct) {
    console.log("User guesses the answer of 3 ... which is correct.");
    alert("Correct");
    userScore4 = 1;
  } else {
    console.log("User guesses number less than 3 ... which is too low.");
    alert("Too low!");
    userScore4 = 0;
  };
  var totalScore = (userScore1 + userScore2 + userScore3 + userScore4);
  console.log("totalScore is sum of user scrores for first 4 questions.");
  alert("You guessed " +totalScore+ " questions correct out of 4 questions.");

  // Question # 5 for user; number guessing game with iterations.
  alert("Let's play one more guessing game. I'll give you 5 tries.");
  console.log("First prompt is user's first guess.");
  var number = prompt("Guess my lucky number between 1 and 10.");
  var limit = 5;
  for (var count = 1; count <= limit; count++) {
    console.log("Established 'for' loop to enable 4 more guesses. Note that correct response is the number 7.");
  if (number != 7) {
    console.log("If user guess is not the number 7, then the loop will continue to prompt for another number guess until the guess limit is reached.");
    var number = prompt("Wrong. Try again.");
  } else {
    console.log("If user correctly guesses the number 7, then announce correct response and end the 'for' loop iterations.");
    alert("Correct ... my lucky number is 7.");
    count = limit;
  }
  }
  };

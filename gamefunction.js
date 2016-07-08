
  //var Count = 0;
  //var UserName = prompt("What is your name?");
  //alert("Hello " +userName+ "! Here is my guessing game.");

  function gameMe(question, corans, posfeed, negfeed) {
    var Count = 0;
    var userName = prompt("What is your name?");
    alert("Hello " +userName+ "! Here is my guessing game.");

    query ("Did Tom grow up in Portland, Oregon?  Yes or No", "No", "Correct!, " +userName+ ", Tom grew up in Seattle, Washington.", "Wrong " +userName+ ", Tom didn't move to Portland until 1994!");

    query ("Did Tom attend Washington State University?  Yes or No", "No", "Correct, " +userName+ "! Tom went to the University of Washington. Go Huskies!!!", "Arrgh! Wrong! No " +userName+ ", Tom is a UW Husky, not a WSU Cougar.");

    query ("Does Tom really want to work for another large technology company after he completes his Code 401 class? Yes or No", "No", "Correct!, " +userName+ ". Tom wants to work for a small to mid-size software development company.", userName+ " ... No! Never ever again does Tom want to work for a large company.");

  var finalScore = alert("Your final score is " +Count+ " points.");


  function query(question, corans, posfeed, negfeed) {
  var userRsp = prompt(question);
  var areEqual = userRsp.toUpperCase();
  console.log(userRsp);
  console.log(areEqual);
  if ((areEqual == "NO") || (areEqual == "N")) {
    console.log(areEqual);
    alert(posfeed);
    Count ++;
  } else {
    alert(negfeed);
  }
  }
  };

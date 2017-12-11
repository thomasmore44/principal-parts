/**
  *
  * Main Controller Object
  *
  */

var controller = {};

/**
  *
  * Initializing Function
  *
  */
controller.init = function() {
  controller.userSubmitQuiz();
}

  /**
    *
    * Listens for USER to click SUBMIT
    *
    */
controller.userSubmitQuiz = function() {
  var sbmt = helpers.getSubmitButton();
  sbmt.addEventListener('click', controller.getUserInput, false);
}
/**
  *
  * Listens for USER to click RESET VERB
  *
  */

controller.userResetQuiz = function() {
  var reset = helpers.getResetButton();
  reset.addEventListener('click', view.resetVerb, false);
}


/**
  *
  * Grabs the user's input from the quiz upon SUBMIT
  *
  */

controller.getUserInput = function() {

      var input1 = helpers.getFirstPP().value;
      var input2 = helpers.getSecondPP().value;
      var input3 = helpers.getThirdPP().value;
      var input4 = helpers.getFourthPP().value;
      var input5 = helpers.getFifthPP().value;
      var input6 = helpers.getSixthPP().value;
      var allInputs = [];
      allInputs.push(input1, input2, input3, input4, input5, input6);
      // console.log(allInputs);
      this.stuff = allInputs;
      // console.log(this.stuff);

      var answersArray = model.allAnswers;

      for (var i = 0, max = answersArray.length; i < max; i++) {

        var cleanInput = allInputs[i].trim();
        // console.log(cleanInput);
        if ( Array.isArray(answersArray[i]) ) {
          if ( answersArray[i].includes(cleanInput) ) {
            view.correctAnswer([i]);
              }
              else {
                view.wrongAnswer([i]);
              }
            }
            else {
              var checkedAnswer = (cleanInput === answersArray[i]);

              if (checkedAnswer === true) {
              view.correctAnswer([i]);
              // controller.addUserPoint();
              }
              else {
              view.wrongAnswer([i]);
              // controller.deleteUserPoint();
              }
            };
          };

          console.log("Correct: " + model.numCorrect);
          console.log("Wrong: " + model.numWrong);


    }

    /**
      *
      *  Functions for correct and incorrect answers.
      *
      */


    /**
      *
      * Adds to user's score... (when logged in...future feature??)
      *
      */

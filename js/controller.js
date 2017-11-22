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

          for (var i = 1, max = 6; i < max; i++) {

            var cleanInput = allInputs[i].trim();
            // if ("" === cleanInput) {
            //   return cleanInput = "empty";
            // }
            // if ("" === answersArray[i]) {
            //   return answersArray[i] = "empty";
            // }
            // console.log(cleanInput);
            var checkedAnswer = (cleanInput === answersArray[i]);

            if (checkedAnswer === true) {
              view.correctAnswer([i]);
            }
            else {
              view.wrongAnswer([i]);
            }
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

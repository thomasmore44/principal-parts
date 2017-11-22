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

      var answer1 = model.verb.FirstPP;
      var answer2 = model.verb.SecondPP;
      var answer3 = model.verb.ThirdPP;
      var answer4 = model.verb.FourthPP;
      var answer5 = model.verb.FifthPP;
      var answer6 = model.verb.SixthPP;
      var allAnswers = [];
      allAnswers.push( answer1, answer2, answer3, answer4, answer5, answer6 );
      this.allAnswers = allAnswers;
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

          var answersArray = controller.allAnswers;
          for (var i = 0, max = answersArray.length; i < max; i++) {

            var cleanInput = allInputs[i].trim();
            // console.log(cleanInput);
            var checkedAnswer = (cleanInput === answersArray[i]);

            if (checkedAnswer === true) {
              view.correctAnswer([i]);
            }
            else {
              view.wrongAnswer([i]);
            }
          };


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

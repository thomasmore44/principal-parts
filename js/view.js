/**
  *
  * Main View Object
  *
  */

  var view = {};


  view.init = function(){
        view.showVerb();
        var fieldSet = helpers.getFieldSet();
        // var FirstPP = helpers.getFirstPP();
  };


  /**
    *
    * Get English and Greek from  RandomVerb object
    *
    */

view.showVerb = function() {

    var english = model.verb.English;

    var fieldSet = helpers.createAnswerSpans();
    var quizBody = helpers.getQuizBody();

    quizBody.removeChild( fieldSet );
    quizBody.appendChild( fieldSet );

    var quizTitle = helpers.quizTitle();
    quizTitle.innerHTML = english;

};


/**
  *
  *  Functions for correct and incorrect answers.
  *
  */
view.correctAnswer = function(num) {
  var fieldSet = helpers.getFieldSet();
  if (num == 0) {
    model.numCorrect += 1;
    var FirstPP = helpers.getFirstPP().value;
    var label1 = helpers.getAllLabels()[num];
    var answerSpan1 = helpers.answerSpan1();

    answerSpan1.className = ' PrincPartCorrect';
    answerSpan1.innerHTML = FirstPP;
    fieldSet.removeChild( label1 );
    fieldSet.appendChild( answerSpan1 );

  } else if (num == 1) {
    model.numCorrect += 1;
    var SecondPP = helpers.getSecondPP().value;
    var label2 = helpers.getAllLabels()[0];
    var answerSpan2 = helpers.answerSpan2();

    answerSpan2.className = ' PrincPartCorrect';
    answerSpan2.innerHTML = SecondPP;
    fieldSet.removeChild( label2 );
    fieldSet.appendChild( answerSpan2 );

  } else if (num == 2) {
    model.numCorrect += 1;

    var ThirdPP = helpers.getThirdPP().value;
    var label3 = helpers.getAllLabels()[0];
    var answerSpan3 = helpers.answerSpan3();
    answerSpan3.classList.add( 'PrincPartCorrect' );
    answerSpan3.innerHTML = ThirdPP;
    fieldSet.removeChild( label3 );

    fieldSet.appendChild( answerSpan3 );
  } else if (num == 3) {
    model.numCorrect += 1;

    var FourthPP = helpers.getFourthPP().value;
    var label4 = helpers.getAllLabels()[0];
    var answerSpan4 = helpers.answerSpan4();
    answerSpan4.className = ' PrincPartCorrect';
    answerSpan4.innerHTML = FourthPP;
    fieldSet.removeChild( label4 );

    fieldSet.appendChild( answerSpan4 );

  } else if (num == 4) {
    model.numCorrect += 1;

    var FifthPP = helpers.getFifthPP().value;
    var label5 = helpers.getAllLabels()[0];
    var answerSpan5 = helpers.answerSpan5();
    answerSpan5.className = ' PrincPartCorrect';
    answerSpan5.innerHTML = FifthPP;
    fieldSet.removeChild( label5 );

    fieldSet.appendChild( answerSpan5 );

  } else if (num == 5) {
    model.numCorrect += 1;

    var SixthPP = helpers.getSixthPP().value;
    var label6 = helpers.getAllLabels()[0];
    var answerSpan6 = helpers.answerSpan6();
    answerSpan6.className = ' PrincPartCorrect';
    answerSpan6.innerHTML = SixthPP;
    fieldSet.removeChild( label6 );

    fieldSet.appendChild( answerSpan6 );
  }

};

// WRONG ANSWER Function

view.wrongAnswer = function(num) {
  var fieldSet = helpers.getFieldSet();
  if (num == 0) {
    model.numWrong += 1;
    var FirstPP = model.verb.FirstPP;
    if ( Array.isArray(FirstPP) ) {
      return FirstPP.join(", ");
    }
    var label1 = helpers.getAllLabels()[0];
    var answerSpan1 = helpers.answerSpan1();

    answerSpan1.className = ' PrincPartWrong';
    answerSpan1.innerHTML = model.verb.FirstPP;
    fieldSet.removeChild( label1 );
    fieldSet.appendChild( answerSpan1 );
  } else if (num == 1) {
    model.numWrong += 1;

    var SecondPP = model.verb.SecondPP;
    if ( Array.isArray(SecondPP) ) {
      return SecondPP.join(", ");
    }
    var label2 = helpers.getAllLabels()[0];
    var answerSpan2 = helpers.answerSpan2();

    answerSpan2.className = ' PrincPartWrong';
    answerSpan2.innerHTML = model.verb.SecondPP;
    fieldSet.removeChild( label2 );
    fieldSet.appendChild( answerSpan2 );
  } else if (num == 2) {
    model.numWrong += 1;
    var ThirdPP = model.verb.ThirdPP;
    if ( Array.isArray(ThirdPP) ) {
      return ThirdPP.join(", ");
    }
    var label3 = helpers.getAllLabels()[0];
    var answerSpan3 = helpers.answerSpan3();

    answerSpan3.className = ' PrincPartWrong';
    answerSpan3.innerHTML = model.verb.ThirdPP;
    fieldSet.removeChild( label3 );
    fieldSet.appendChild( answerSpan3 );
  } else if (num == 3) {
    model.numWrong += 1;

    var FourthPP = model.verb.FourthPP;
    if ( Array.isArray(FourthPP) ) {
      return FourthPP.join(", ");
    }
    var label4 = helpers.getAllLabels()[0];
    var answerSpan4 = helpers.answerSpan4();

    answerSpan4.className = ' PrincPartWrong';
    answerSpan4.innerHTML = FourthPP;
    fieldSet.removeChild( label4 );
    fieldSet.appendChild( answerSpan4 );
  } else if (num == 4) {
    model.numWrong += 1;

    var FifthPP = model.verb.FifthPP;
    if ( Array.isArray(FifthPP) ) {
      return FifthPP.join(", ");
    }
    var label5 = helpers.getAllLabels()[0];
    var answerSpan5 = helpers.answerSpan5();

    answerSpan5.className = ' PrincPartWrong';
    answerSpan5.innerHTML = FifthPP;
    fieldSet.removeChild( label5 );
    fieldSet.appendChild( answerSpan5 );
  } else if (num == 5) {
    model.numWrong += 1;

    var SixthPP = model.verb.SixthPP;
    if ( Array.isArray(SixthPP) ) {
      return SixthPP.join(", ");
    }
    var label6 = helpers.getAllLabels()[0];
    var answerSpan6 = helpers.answerSpan6();

    answerSpan6.className = ' PrincPartWrong';
    answerSpan6.innerHTML = SixthPP;
    fieldSet.removeChild( label6 );
    fieldSet.appendChild( answerSpan6 );
  }
};

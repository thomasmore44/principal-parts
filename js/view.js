/**
  *
  * Main View Object
  *
  */

  var view = {};


  view.init = function(){
        view.showVerb();
        var fieldSet = helpers.getFieldSet();
        var FirstPP = helpers.getFirstPP();
        // console.log(fieldSet.childNodes);
        // return randomVerb;
  };


  /**
    *
    * Get English and Greek from  RandomVerb object
    *
    */

view.showVerb = function() {
    var english = model.verb.English;

    var quizTitle = helpers.quizTitle();
    quizTitle.innerHTML = english;

};


/**
  *
  *  Functions for correct and incorrect answers.
  *
  */

view.correctAnswer = function(num) {
  //  console.log( num + " is absolutely correct!");
  var fieldSet = helpers.getFieldSet();
  if (num == 0) {
    var FirstPP = helpers.getFirstPP().value;
    var label1 = helpers.getAllLabels()[num];
    var answerSpan1 = helpers.answerSpan1();

    answerSpan1.className = ' PrincPartCorrect';
    // console.log(FirstPP);
    answerSpan1.innerHTML = FirstPP;
    fieldSet.removeChild( label1 );
    fieldSet.appendChild( answerSpan1 );

  } else if (num == 1) {


    var SecondPP = helpers.getSecondPP().value;
    var label2 = helpers.getAllLabels()[0];
    var answerSpan2 = helpers.answerSpan2();

    answerSpan2.className = ' PrincPartCorrect';
    // console.log(SecondPP);
    answerSpan2.innerHTML = SecondPP;
    fieldSet.removeChild( label2 );
    fieldSet.appendChild( answerSpan2 );

  } else if (num == 2) {

    // var fieldSet = helpers.getFieldSet();
    var ThirdPP = helpers.getThirdPP().value;
    var label3 = helpers.getAllLabels()[0];
    var answerSpan3 = helpers.answerSpan3();
    answerSpan3.className = ' PrincPartCorrect';
    // console.log(ThirdPP);
    answerSpan3.innerHTML = ThirdPP;
    fieldSet.removeChild( label3 );

    fieldSet.appendChild( answerSpan3 );
  } else if (num == 3) {

    // var fieldSet = helpers.getFieldSet();
    var FourthPP = helpers.getFourthPP().value;
    var label4 = helpers.getAllLabels()[0];
    var answerSpan4 = helpers.answerSpan4();
    answerSpan4.className = ' PrincPartCorrect';
    console.log(FourthPP);
    answerSpan4.innerHTML = FourthPP;
    fieldSet.removeChild( label4 );

    fieldSet.appendChild( answerSpan4 );

  } else if (num == 4) {
    // console.log("Correct Fifth Principal Part");
    var FifthPP = helpers.getFifthPP().value;
    var label5 = helpers.getAllLabels()[0];
    var answerSpan5 = helpers.answerSpan5();
    answerSpan5.className = ' PrincPartCorrect';
    console.log(FifthPP);
    answerSpan5.innerHTML = FifthPP;
    fieldSet.removeChild( label5 );

    fieldSet.appendChild( answerSpan5 );

  } else if (num == 5) {
    // console.log("Correct Sixth Principal Part");
    var SixthPP = helpers.getSixthPP().value;
    var label6 = helpers.getAllLabels()[0];
    var answerSpan6 = helpers.answerSpan6();
    answerSpan6.className = ' PrincPartCorrect';
    console.log(SixthPP);
    answerSpan6.innerHTML = SixthPP;
    fieldSet.removeChild( label6 );

    fieldSet.appendChild( answerSpan6 );
  }

};

// WRONG ANSWER Function

view.wrongAnswer = function(num) {
  if (num == 0) {
    // console.log("WRONG First Principal Part");
    var FirstPP = helpers.getFirstPP().value;
    var label1 = helpers.getAllLabels()[num];
    var answerSpan1 = helpers.answerSpan1();

    answerSpan1.className = ' PrincPartWrong';
    // console.log(FirstPP);
    answerSpan1.innerHTML = FirstPP;
    fieldSet.removeChild( label1 );
    fieldSet.appendChild( answerSpan1 );

    fieldSet.appendChild( answerSpan6 );
  } else if (num == 1) {
    console.log("WRONG Second Principal Part");
  } else if (num == 2) {
    console.log("WRONG Third Principal Part");
  } else if (num == 3) {
    console.log("WRONG Fourth Principal Part");
  } else if (num == 4) {
    console.log("WRONG Fifth Principal Part");
  } else if (num == 5) {
    console.log("WRONG Sixth Principal Part");
  }
};

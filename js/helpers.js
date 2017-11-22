/*
*
*  Helper functions
*/


var helpers = {};

  helpers.getFieldSet = function() {
    return document.getElementById( 'quiz-field' );
  }

  helpers.answerSpan1 = function() {
    var answerSpan1 = document.createElement( 'span' );
    answerSpan1.id = 'span-PP-1';
    return answerSpan1;
  }

  helpers.answerSpan2 = function() {
    var answerSpan2 = document.createElement( 'span' );
    answerSpan2.id = 'span-PP-2';
    return answerSpan2;
  }

  helpers.answerSpan3 = function() {
    var answerSpan3 = document.createElement( 'span' );
    answerSpan3.id = 'span-PP-3';
    return answerSpan3;
  }

  helpers.answerSpan4 = function() {
    var answerSpan4 = document.createElement( 'span' );
    answerSpan4.id = 'span-PP-4';
    return answerSpan4;
  }

  helpers.answerSpan5 = function() {
    var answerSpan5 = document.createElement( 'span' );
    answerSpan5.id = 'span-PP-5';
    return answerSpan5;
  }

  helpers.answerSpan6 = function() {
    var answerSpan6 = document.createElement( 'span' );
    answerSpan6.id = 'span-PP-6';
    return answerSpan6;
  }



  helpers.getAllLabels = function() {
    return document.getElementsByTagName( 'label' );
  }
  helpers.getAnswerSpans = function() {
    var answerSpan1 = document.createElement( 'span' ),
        answerPpan2 = document.createElement( 'span' ),
        answerSpan3 = document.createElement( 'span' ),
        answerSpan4 = document.createElement( 'span' ),
        answerSpan5 = document.createElement( 'span' ),
        answerSpan6 = document.createElement( 'span' );
    answerSpan1.id = 'span-PP-1';
    answerSpan2.id = 'span-PP-2';
    answerSpan3.id = 'span-PP-3';
    answerSpan4.id = 'span-PP-4';
    answerSpan5.id = 'span-PP-5';
    answerSpan6.id = 'span-PP-6';
    var fieldSet = helpers.getFieldSet();
    var spansDocFrag = document.createDocumentFragment();

    spansDocFrag.appendChild(answerSpan1);
    spansDocFrag.appendChild(answerSpan2);
    spansDocFrag.appendChild(answerSpan3);
    spansDocFrag.appendChild(answerSpan4);
    spansDocFrag.appendChild(answerSpan5);
    spansDocFrag.appendChild(answerSpan6);

    fieldSet.appendChild(spansDocFrag);

    return fieldSet;

  }
  helpers.getFirstPP = function() {
    return document.getElementById( '1stPP' );
  }
  helpers.getSecondPP = function() {
    return document.getElementById( '2ndPP' );
  }
  helpers.getThirdPP = function() {
    return document.getElementById( '3rdPP' );
  }
  helpers.getFourthPP = function() {
    return document.getElementById( '4thPP' );
  }
  helpers.getFifthPP = function() {
    return document.getElementById( '5thPP' );
  }
  helpers.getSixthPP = function() {
    return document.getElementById( '6thPP' );
  }

  helpers.quizTitle = function() {
    return document.getElementById('quiz-title');
  }

  helpers.getSubmitButton = function() {
    return document.getElementById('submit');
  }

  // helpers.getFieldSet = function() {
  //   return document.getElementById( 'verb_field' );
  // }

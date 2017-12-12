/*
*
*  Helper functions
*/
const helpers = {};

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

helpers.getInputs = function() {
  var userInputs = [];
  for (i = 1; i <= 6; i++) {
    var input = document.createElement( 'input' );
    input.id = "userInput" + i;
    userInputs[i] = input;
  }
  return userInputs;
}

helpers.createLabels = function() {
  var labels = [];
    for (i = 0; i <= 5; i++) {
      var label = document.createElement( 'label' );
      labels.push(label[i]);
    }
  return labels;
}

helpers.getAllLabels = function() {
  return document.getElementsByTagName( 'label' );
}

helpers.getQuizBody = function() {
  return document.getElementById( 'quiz-body' );
}

helpers.createAnswerSpans = function() {
  const answerSpan1 = document.createElement( 'span' ),
        answerSpan2 = document.createElement( 'span' ),
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

helpers.createInputSpans = function() {
  const input1 = document.createElement( 'input' ),
        input2 = document.createElement( 'input' ),
        input3 = document.createElement( 'input' ),
        input4 = document.createElement( 'input' ),
        input5 = document.createElement( 'input' ),
        input6 = document.createElement( 'input' );

  const label1 = document.createElement( 'label' ),
        label2 = document.createElement( 'label' ),
        label3 = document.createElement( 'label' ),
        label4 = document.createElement( 'label' ),
        label5 = document.createElement( 'label' ),
        label6 = document.createElement( 'label' );

  input1.id = '1stPP';
  input2.id = '2ndPP';
  input3.id = '3rdPP';
  input4.id = '4thPP';
  input5.id = '5thPP';
  input6.id = '6thPP';

  input1.type = 'text';
  input2.type = 'text';
  input3.type = 'text';
  input4.type = 'text';
  input5.type = 'text';
  input6.type = 'text';

  input1.placeholder = 'Present AMP';
  input2.placeholder = 'Future AM';
  input3.placeholder = 'Aorist AM';
  input4.placeholder = 'Perfect A';
  input5.placeholder = 'Perfect MP';
  input6.placeholder = 'Aorist P';

  label1.for = '1stPP';
  label2.for = '2ndPP';
  label3.for = '3rdPP';
  label4.for = '4thPP';
  label5.for = '5thPP';
  label6.for = '6thPP';


  label1.appendChild(input1);
  label2.appendChild(input2);
  label3.appendChild(input3);
  label4.appendChild(input4);
  label5.appendChild(input5);
  label6.appendChild(input6);



  const fieldSet = helpers.getFieldSet();
  var inputsDocFrag = document.createDocumentFragment();

  inputsDocFrag.appendChild(label1);
  inputsDocFrag.appendChild(label2);
  inputsDocFrag.appendChild(label3);
  inputsDocFrag.appendChild(label4);
  inputsDocFrag.appendChild(label5);
  inputsDocFrag.appendChild(label6);

  fieldSet.appendChild(inputsDocFrag);

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

helpers.getResetButton = function() {
  return document.getElementById('reset-verb');
}

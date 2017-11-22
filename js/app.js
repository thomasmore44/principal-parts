/**
*
*     The Main App Object
**/

var principalPartsQuiz = {

    init: function() {
      model.init();
      console.log(model.verb);
      controller.init();
      view.init();
      // console.log(helpers.get1stPP());
    }
  }


    principalPartsQuiz.init();


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
// const quizTitle = document.getElementById('quiz-title');

// function buildQuiz(){};

// function showResults(){};

//buildQuiz

function buildQuiz() {

  // console.log( jsonData );
  //a place to store HTML output
  // const output = [];

  //randomly select ONE verb to test
//   const randomVerb = verbs[(Math.floor(Math.random() * verbs.length))];
//
//   //Change UI verb
//   // console.log(randomVerb);
//   // console.log(quizTitle);
//   quizTitle.innerHTML = randomVerb.english;
//
//   verbs.forEach(
//     (label, greekPart) => {
//       // store the principal Parts
//       const principalParts = [];
//
//       // and for each principal part....
//       for (label in greekPart.greek){
//
//         // ...add a card to the place
//         principalParts.push(
//           `
//           <div class="ppart">
//             <span name="">${greekPart}</span>
//           </div>
//           `
//         );
//       console.log(principalParts);
//       }
//     }
//   );
//   quizContainer.innerHTML = principalParts.join('');
//
 }

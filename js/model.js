
/**
  *
  * Main model Object
  *
  */

  var model = {};


  model.init = function() {
      // model.updateLocalStore( jsonData );
      model.randomizeVerb();
      // return randomVerb;
  }

  /**
    *
    * Get a random verb from Local Storage
    *
    * @return randomVerb {array} an object containing
    * verb principal parts and the definition
    */

    model.randomizeVerb = function() {
      var verbHorde = model.getLocalStore();
      var randomVerb = verbHorde[Math.floor(Math.random()*verbHorde.length)];
      this.numCorrect = 0;
      this.numWrong = 0;
      this.verb = randomVerb;

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
    * Get Verbs from local storage
    *
    * @return verbs {array} an array of verb objects
    */

    model.getLocalStore = function() {
        return JSON.parse( localStorage.getItem( 'verbHorde' ) );
    };


  /**
    *
    * Save Verbs into local storage
    *
    * @param store {string} JSON string of data to store
    */

    model.updateLocalStore = function( data ) {
      localStorage.setItem( 'verbHorde', data );
    };

  /**
    *
    * Deletes data from local storage
    *
    */

    model.removeLocalStore = function() {
      localStorage.removeItem( 'verbHorde' );
      localStorage.removeItem( 'vanillaPress' );
    }

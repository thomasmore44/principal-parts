
/**
  *
  * Main model Object
  *
  */

  var model = {};


  model.init = function() {
      // model.updateLocalStore( jsonData );
      model.randomizeVerb();
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

      var english = this.verb.English;
      var answer1 = this.verb.FirstPP;
      var answer2 = this.verb.SecondPP;
      var answer3 = this.verb.ThirdPP;
      var answer4 = this.verb.FourthPP;
      var answer5 = this.verb.FifthPP;
      var answer6 = this.verb.SixthPP;
      var allAnswers = [];
      allAnswers.push( english, answer1, answer2, answer3, answer4, answer5, answer6 );
      this.allAnswers = allAnswers;
      console.log(allAnswers);
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


/**
  *
  * Main model Object
  *
  */

  var model = {};


  model.init = function() {
      // model.updateLocalStore( jsonData );
      return model.randomizeVerb();
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

      this.FirstPP = randomVerb.FirstPP;

      this.SecondPP = randomVerb.SecondPP;

      this.ThirdPP = randomVerb.ThirdPP;

      this.FourthPP = randomVerb.FourthPP;

      this.FifthPP = randomVerb.FifthPP;

      this.SixthPP = randomVerb.SixthPP;

      return randomVerb;
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

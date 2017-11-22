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

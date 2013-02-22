'use strict';

/* jasmine specs for controllers go here */

describe('MyCtrl1', function(){
  var myCtrl1;

  beforeEach(function(){
    myCtrl1 = new MyCtrl1();
  });


  it('should ....', function() {
    //spec body
  });
});


describe('MyCtrl2', function(){
  var myCtrl2;


  beforeEach(function(){
    myCtrl2 = new MyCtrl2();
  });


  it('should ....', function() {
    //spec body
  });
});


describe('MyApp controllers', function() {
 
  describe('PhoneListCtrl', function(){
 
    var scope, ctrl;
 
    beforeEach(function() {
      scope = {},
      ctrl = new PhoneListCtrl(scope);
    });
 

    it('should create "phones" model with 3 phones', function() {
      expect(scope.phones.length).toBe(3);
    });

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
 
  });

});


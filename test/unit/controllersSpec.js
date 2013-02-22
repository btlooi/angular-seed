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
 
    it('should create "phones" model with 3 phones', function() {
      var scope = {},
          ctrl = new PhoneListCtrl(scope);
 
      expect(scope.phones.length).toBe(3);
    });
  });
});


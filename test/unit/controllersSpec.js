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


describe('MyApp App', function() {
 
  describe('Phone list view', function() {
 
    beforeEach(function() {
      browser().navigateTo('../../app/index.html');
    });
 
 
    it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(3);
 
      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);
 
      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(2);
    });
  });
});

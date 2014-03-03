describe('User', function(){
  it("has a first_name", function(){
    (new User().get('first_name')).should
      .be.exactly("");
  });
  it("has a profile pic", function(){
    (new Monkey().get('avatar.url')).should
      .be.exactly("");
  });

});
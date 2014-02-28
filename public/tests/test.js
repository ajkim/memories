describe('Monkey', function(){
  it("has a default name", function(){
    (new Monkey().get('name')).should
      .be.exactly("");
  });
  it("has a default catchphrase", function(){
    (new Monkey().get('catchphrase')).should
      .be.exactly("ooh oohh ohhh");
  });
  it("maintains a name", function(){
    (new Monkey({name: "Bob"}).get('name')).should
      .be.exactly("Bob");
  });
});
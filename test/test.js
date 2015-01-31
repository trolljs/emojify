/* global describe, it */

describe('emojify', function () {
  beforeEach(function(done) {
    require('../src/');
    setTimeout(function() {
      done();
    }, 1000);
  });
  it('should put emojis everywhere', function () {
    var emojis = document.getElementsByClassName('emojify');
    expect( emojis.length ).toBeGreaterThan( 2 );
  });
});

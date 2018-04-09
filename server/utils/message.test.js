var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage',()=>{
  it('should generate correct message object',()=>{
    var from = 'Rahul';
    var text = 'Hello guys';
    var result = generateMessage(from,text);
    expect(typeof result.createdAt).toBe('number');
    expect(result).toInclude({
      from,
      text
    });
  });
});

describe('generateLocationMessage',()=>{
  it('should generate correct location object',()=>{
      var from = 'Admin';
      var latitude= 15;
      var longitude = 19;
      var url = `https://www.google.com/maps?q=15,19`;
      var message = generateLocationMessage(from, latitude, longitude);
      expect(message.createdAt).toBeA('number');
      expect(message).toInclude({
          from,
          url
      });
  });
});

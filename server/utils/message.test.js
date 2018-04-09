var expect = require('expect');

var {generateMessage} = require('./message.js');

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

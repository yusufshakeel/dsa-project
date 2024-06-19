const { message } = require('./index');

it('should print the greetings message', () => {
    expect(message()).toBe('Hello, World!');
});
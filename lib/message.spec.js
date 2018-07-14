const messages = require('./messages.js');

const program = {
  name: 'create-soda-app',
};

test('`missingProjectName` should return string with specify,example,Run and create-soda-app', () => {
  const result = messages.missingProjectName();

  const expectedWords = ['create-soda-app', 'specify', 'example', 'run'];

  expectedWords.forEach(word => {
    expect(result.toLowerCase().includes(word)).toBeTruthy();
  });
});

describe('`alreadyExists` should return string with ProjectName', () => {
  test('`alreadyExists` should return error if type is not correct', () => {
    expect(() =>
      messages
        .alreadyExists()
        .toThrow('Project name must be a string or number')
    );
  });

  test('`alreadyExists` should return string, arg = string', () => {
    const projectName = 'ProjectName';

    expect(() =>
      messages
        .alreadyExists(projectName)
        .toEqual(expect.stringContaining(alreadyExists(projectName)))
    );
  });

  test('`alreadyExists` should return string, arg = nubmer', () => {
    const projectName = 123;

    expect(() =>
      messages
        .alreadyExists(projectName)
        .toEqual(expect.stringContaining(alreadyExists(projectName)))
    );
  });
});

exports.checkProjectNameType = projectName => {
  if (typeof projectName !== 'string' && typeof projectName !== 'number') {
    throw new TypeError('Project name must be a string or number');
  }
};

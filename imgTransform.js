/**
 * imgTransform
 * 
 * Jest transform with static response so that we can use images in Jest tests.
 * See jest.config.ts
*/
module.exports = {
  process() {
    return { code: 'module.exports = {};' };
  },
  getCacheKey() {
    return 'imgTransform';
  },
};
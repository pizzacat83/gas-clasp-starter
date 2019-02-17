import { evalOnGAS } from './test-util';
declare const sampleFunc: Function;

describe('sampleFunc', () => {
  beforeAll(() => {
    /* it is recommended to extend timeout of jest
     * because `clasp run` often exceeds 5 seconds */
    jest.setTimeout(1000 * 20); // 20 seconds
  });

  it('returns string', async () => {
    const res = await evalOnGAS(function() {
      // be sure the code here is executable on GAS
      // for the same reason, you cannot use arrow function here
      return sampleFunc('https://www.example.com');
    });
    expect(typeof res).toBe('string');
  });
});

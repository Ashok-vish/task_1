import { PiiPipe } from './pii.pipe';

describe('PiiPipe', () => {
  it('create an instance', () => {
    const pipe = new PiiPipe();
    expect(pipe).toBeTruthy();
  });
});

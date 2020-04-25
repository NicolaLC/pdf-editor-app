import { SignatureToStringPipe } from './signature-to-string.pipe';

describe('SignatureToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new SignatureToStringPipe();
    expect(pipe).toBeTruthy();
  });
});

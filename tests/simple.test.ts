import { someUseful } from '@src';
import { output, output2 } from '@src/module/helper';

describe('simple-suite', () => {
  // @ts-ignore
  const t: number = '123';

  it('simple-test', async () => {
    someUseful();
    expect(0).toEqual(0);
  });

  it('output message', async () => {
    output('message');
  });

  it('output2 message', async () => {
    output2('message');
  });
});

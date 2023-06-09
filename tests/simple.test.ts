import { someUseful } from '@src';
import { output, output2 } from '@src/module/helper';

describe('simple-suite', () => {
  it('simple-test', async () => {
    someUseful();
  });

  it('output message', async () => {
    output('message');
  });

  it('output2 message', async () => {
    output2('message');
  });
});

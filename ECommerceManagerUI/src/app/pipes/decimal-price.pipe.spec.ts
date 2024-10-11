import { DecimalPricePipe } from './decimal-price.pipe';

describe('DecimalPricePipe', () => {
  it('create an instance', () => {
    const pipe = new DecimalPricePipe();
    expect(pipe).toBeTruthy();
  });
});

import { SortByNamePipe } from './filter-by-name.pipe';

describe('SortByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SortByNamePipe();
    expect(pipe).toBeTruthy();
  });
});

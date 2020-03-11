import { employee } from './employee.model';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new employee()).toBeTruthy();
  });
});

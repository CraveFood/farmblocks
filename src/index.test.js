import * as Modelsheet from './index';

describe('Modelsheet', () => {
  it('should have exports', () => expect(Modelsheet).toBeDefined());

  it('should not do undefined exports', () => {
    Object.keys(Modelsheet).forEach(exportKey => expect(Modelsheet[exportKey]).toBeDefined());
  });
});

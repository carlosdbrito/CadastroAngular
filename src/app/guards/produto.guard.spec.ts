import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ProdutoGuard } from './produto.guard';

describe('produtoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => ProdutoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

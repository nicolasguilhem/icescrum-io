import { TestBed, inject } from '@angular/core/testing';

import { IceScrumDAOService } from './ice-scrum-dao.service';

describe('IceScrumDAOService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IceScrumDAOService]
    });
  });

  it('should be created', inject([IceScrumDAOService], (service: IceScrumDAOService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ButtonGroupsService } from './button-groups.service';

describe('ButtonGroupsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ButtonGroupsService]
    });
  });

  it('should be created', inject([ButtonGroupsService], (service: ButtonGroupsService) => {
    expect(service).toBeTruthy();
  }));
});

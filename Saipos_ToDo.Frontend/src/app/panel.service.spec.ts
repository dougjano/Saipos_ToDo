import { TestBed } from '@angular/core/testing';

import { PanelService } from './panel.service';

import { ContentEditDirective } from './directives/common/content-edit.directive';

describe('PanelService', () => {
  let service: PanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations : [ContentEditDirective]});
    service = TestBed.inject(PanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

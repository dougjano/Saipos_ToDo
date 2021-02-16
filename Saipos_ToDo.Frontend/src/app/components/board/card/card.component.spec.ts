import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import {Card} from '../../model/card/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContentEditDirective } from 'src/app/directives/common/content-edit.directive';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ,
        ContentEditDirective ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = new Card('1', 'title', 'description', 'owner', 'email')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have header', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4.card-title').textContent).toContain('header');
    expect(compiled.querySelector('h6').textContent).toContain('summary');

  });

});

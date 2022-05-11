import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question} from './question.component';

describe('QuestionComponent', () => {
  let component: Question;
  let fixture: ComponentFixture<Question>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

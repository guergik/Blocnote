import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListWriterComponent } from './note-list-writer.component';

describe('NoteListWriterComponent', () => {
  let component: NoteListWriterComponent;
  let fixture: ComponentFixture<NoteListWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteListWriterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteListWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {
  Component,
  OnInit,
  NgModule,
  Output,
  EventEmitter,
  ViewChild,
  Input,
} from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';

export interface Student {
  name: string;
  email: string;
  assignature: string;
  schedule: string;
  codeId: number;
}

const DATA_STUDENT: Student[] = [];

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {
  student: Student;
  @ViewChild('table') table: MatTable<any>;
  udgForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    email: ['', Validators.required],
    assignature: ['', Validators.required],
    schedule: ['', Validators.required],
    codeId: [, Validators.required],
  });
  @Input()
  displayedColumns: string[] = ['name', 'assignature', 'schedule', 'code'];
  dataSource = DATA_STUDENT;

  assignatures = ['Math', 'History', 'Chemistry', 'English', 'POO'];

  schedules = [
    '12:00 p.m. - 13:55 p.m.',
    '14:00 p.m. - 15:55 p.m.',
    '16:00 p.m. - 17:55 p.m.',
    '18:00 p.m. - 19:55 p.m.',
    '20:00 p.m. - 21:55 p.m.',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.udgForm.setValue;
    this.dataSource.push(this.udgForm.value);
    console.log(this.dataSource);
    this.updateView();
  }

  updateView() {
    this.table.renderRows();
  }
}

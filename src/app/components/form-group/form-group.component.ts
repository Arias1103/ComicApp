import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {
  udgForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    email: ['', Validators.required],
    assignature: ['', Validators.required],
    schedule: ['', Validators.required],
    comments: [''],
  });

  assignatures = ['Math', 'History', 'Chemistry', 'English', 'POO'];

  schedules = [
    '12:00 p.m. - 13:55 p.m.',
    '14:00 p.m. - 15:55 p.m.',
    '16:00 p.m. - 17:55 p.m.',
    '18:00 p.m. - 19:55 p.m.',
    '20:00 p.m. - 21:55 p.m.',
  ];

  getudgForm() {}
  studentsList = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.udgForm.setValue;
    const signedUp = this.studentsList.push(this.udgForm.value);
    console.log(this.udgForm.value);
    console.log(signedUp);
    console.log(this.studentsList);
  }
}

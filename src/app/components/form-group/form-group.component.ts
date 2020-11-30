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
    '12:00 - 13:55',
    '14:00 - 15:55',
    '16:00 - 17:55',
    '18:00 - 19:55',
    '20:00 - 21:55',
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

import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@ng-stack/forms';

/** @title Form field with error messages */
@Component({
  selector: 'form-field-error-example',
  templateUrl: 'form-field-error-example.html',
  styleUrls: ['form-field-error-example.css'],
})
export class FormFieldErrorExample {
  form: FormGroup<{ name: string }>;
  fb = new FormBuilder();

  constructor() {
    this.form = this.fb.group<{ name: string }>({
      name: ['', Validators.required],
    });

    // add this to display the error state immediately
    // this.form.markAllAsTouched();
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

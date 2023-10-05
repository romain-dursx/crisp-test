import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {Crisp} from "crisp-sdk-web";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const data = this.form.value;
    Crisp.setTokenId('16dd7cff-520c-4ce7-83b7-390e9217c562');
    Crisp.user.setEmail(data.email);
    Crisp.user.setPhone('0637757690');
    Crisp.user.setNickname('Romain Test');
    Crisp.session.setData({
      accountKey: '633c337d-c7f2-4b05-a214-54da98f3bbe9',
      userId: '16dd7cff-520c-4ce7-83b7-390e9217c562',
    });
    Crisp.session.reset(false);
    Crisp.chat.close();
    Crisp.chat.hide();
    this.router.navigate(['/home']);
  }

}

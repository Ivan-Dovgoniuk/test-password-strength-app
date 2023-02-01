import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  password:string = '';

  getPassword(password:string){
    this.password = password;
  }

  formGroup = new FormGroup({
    password: new FormControl('')
});
}

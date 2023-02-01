import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strength-password-sections',
  templateUrl: './strength-password-sections.component.html',
  styleUrls: ['./strength-password-sections.component.scss']
})
export class StrengthPasswordSectionsComponent {

  color:string = 'grey'
  
  @Input() password:string;
           

}

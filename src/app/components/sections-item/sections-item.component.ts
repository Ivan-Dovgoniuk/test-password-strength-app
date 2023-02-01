import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sections-item',
  templateUrl: './sections-item.component.html',
  styleUrls: ['./sections-item.component.scss']
})
export class SectionsItemComponent {

  @Input() color:string;
  @Input() password:string;
  @Input() sectionNumber:number;

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent {

  @Input() title: string = '';
}

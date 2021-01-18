import { Component } from '@angular/core';
import { Record } from './record.model';
import { Page } from './page.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'archivist';
  pages = [new Page('../assets/pages-1.png'), new Page('../assets/pages-2.png')];
  record: Record = new Record(123444, "Test Record", this.pages);
}

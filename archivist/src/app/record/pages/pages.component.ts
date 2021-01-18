import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../../page.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @Input() page: Page;
  constructor() { }

  ngOnInit(): void {
  }

}

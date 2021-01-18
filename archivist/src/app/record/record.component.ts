import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../record.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  @Input() record: Record;
  
  constructor() {
  }

  ngOnInit(): void {
  }

}

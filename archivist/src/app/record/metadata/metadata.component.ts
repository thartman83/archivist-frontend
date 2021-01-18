import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../../record.model';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit {
  @Input() record: Record;
  
  constructor() { }

  ngOnInit(): void {
  }

}

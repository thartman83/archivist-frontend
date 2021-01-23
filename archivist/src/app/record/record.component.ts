import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../record.model';
import { Page } from '../page.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  @Input() record: Record;
  records: Record[] = [ 
    new Record(123444, "Test Record",
	       [new Page('../assets/pages-1.png'),
		new Page('../assets/pages-2.png')])
  ];
  
  constructor(private route: ActivatedRoute) {    
  }

  ngOnInit(): void {
    this.record = this.records[this.route.snapshot.params['recordId']];

    this.route.params
      .subscribe(
	(params: Params) => {
	  this.record = this.records[params['recordId']];
	}
      );    
  }
}

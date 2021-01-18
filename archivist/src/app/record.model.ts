import { Page } from './page.model';
import { Tag } from './tag.model';

export class Record {
  public recordId: number;
  public name: string;
  public createDate: string;
  public modifiedDate: string;
  public createdBy: string;
  public modifiedBy: string;
  public pages: Page[];
  public tags: Tag[];

  public constructor(recordId: number, name: string, pages: Page[]) {
    this.recordId = recordId;
    this.name = name;
    this.pages = pages;
  }
}

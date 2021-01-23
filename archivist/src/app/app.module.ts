import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecordComponent } from './record/record.component';
import { MetadataComponent } from './record/metadata/metadata.component';
import { PagesComponent } from './record/pages/pages.component';
import { AddRecordComponent } from './add-record/add-record.component';

const appRoute: Routes = [
//  { path: 'home' },
  { path: 'record/:recordId', component: RecordComponent },
  { path: 'add'   , component: AddRecordComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecordComponent,
    MetadataComponent,
    PagesComponent,
    AddRecordComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

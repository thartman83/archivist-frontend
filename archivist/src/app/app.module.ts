import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecordComponent } from './record/record.component';
import { MetadataComponent } from './record/metadata/metadata.component';
import { PagesComponent } from './record/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecordComponent,
    MetadataComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

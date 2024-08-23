import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddRecordComponent } from './add-record/add-record.component';
import { DisplayRecordComponent } from './display-record/display-record.component';
import { EditRecordComponent } from './edit-record/edit-record.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    DisplayRecordComponent,
    EditRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

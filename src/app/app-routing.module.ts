import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './add-record/add-record.component';
import { DisplayRecordComponent } from './display-record/display-record.component';
import { EditRecordComponent } from './edit-record/edit-record.component';

const routes: Routes = [
  { path: 'add-record', component: AddRecordComponent },
  { path: 'display', component: DisplayRecordComponent },
  { path: 'edit-record', component: EditRecordComponent },
  { path: '', component: AddRecordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

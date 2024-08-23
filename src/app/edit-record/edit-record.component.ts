import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.scss']
})
export class EditRecordComponent implements OnInit {

  constructor(private service: ServiceService, private routes: Router) {

  }

  data = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  }
  ngOnInit() {
    this.data.id = this.service.Editdata.id
    this.data.firstName = this.service.Editdata.firstName
    this.data.lastName = this.service.Editdata.lastName
    this.data.email = this.service.Editdata.email
    this.data.phoneNumber = this.service.Editdata.phoneNumber
  }
  Back() {
    this.routes.navigate(['/display'])
  }
  Update() {
    this.service.updateRecord(this.data)
    this.routes.navigate(['/display'])
  }
}

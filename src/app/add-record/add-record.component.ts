import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent {


  index: any
  constructor(private service: ServiceService,private routes:Router) {

  }

  data = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  }

  showRecordsPage() {
    this.routes.navigate(['/display'])
  }
  updateIndes() {
    this.index = this.service.getSize() + 1
  }
  save() {
    const form = document.getElementById('recordForm') as HTMLFormElement | null;
    this.updateIndes();
    this.data.id = this.index;
    this.service.saveRecord(this.data);
    if (form) {
      form.reset();
    }
  }

}

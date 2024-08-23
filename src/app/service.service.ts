import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  Editdata = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  }

  saveRecord(data: any) {
    const recordsString = localStorage.getItem('records');
    const records = recordsString ? JSON.parse(recordsString) : [];
    records.push(data);
    localStorage.setItem('records', JSON.stringify(records));
  }

  getSize() {
    const userDataString = localStorage.getItem('records');
    const userDataArray = userDataString ? JSON.parse(userDataString) : [];
    const size = userDataArray.length;
    return size;
  }

  getRecord() {
    const recordsString = localStorage.getItem('records');
    const records = recordsString ? JSON.parse(recordsString) : [];
    return records;
  }

  deleteRecord(id: any) {
    const recordsString = localStorage.getItem('records');
    const records = recordsString ? JSON.parse(recordsString) : [];
    const updatedRecords = records.filter((record: any) => record.id !== id);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
  }

  duplicateRecord(id: any) {
    const recordsString = localStorage.getItem('records');
    const records = recordsString ? JSON.parse(recordsString) : [];
    const recordToDuplicate = records.find((record: any) => record.id === id);
    if (recordToDuplicate) {
      const duplicatedRecord = { ...recordToDuplicate, id: this.getSize() + 1 };
      records.push(duplicatedRecord);
      localStorage.setItem('records', JSON.stringify(records));
    }
  }

  EditRecord(id: any) {
    const recordsString = localStorage.getItem('records');
    const records = recordsString ? JSON.parse(recordsString) : [];
    const fetch = records.find((record: any) => record.id === id);
    console.log(fetch)
    if (fetch) {
      this.Editdata.id = fetch.id
      this.Editdata.firstName = fetch.firstName
      this.Editdata.lastName = fetch.lastName
      this.Editdata.email = fetch.email
      this.Editdata.phoneNumber = fetch.phoneNumber
    }
  }

  updateRecord(data: any) {
    const recordsString = localStorage.getItem('records');
    const records = recordsString ? JSON.parse(recordsString) : [];
    const index = records.findIndex((record: any) => record.id === data.id);
    if (index !== -1) {
      records[index] = { ...records[index], ...data };
      localStorage.setItem('records', JSON.stringify(records));
    } else {
      console.error('Record not found');
    }
  }


}

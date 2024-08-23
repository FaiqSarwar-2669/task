import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-record',
  templateUrl: './display-record.component.html',
  styleUrls: ['./display-record.component.scss']
})
export class DisplayRecordComponent implements OnInit {

  dataList: any
  currentPage: number = 1;
  itemsPerPage: number = 5;
  paginatedData: any[] = [];
  searchTerm: string = '';
  noRecordsFound: boolean = true
  constructor(private service: ServiceService, private routes: Router) {

  }

  searchRecords() {
    this.dataList = this.dataList.filter((item: any) =>
      item.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.phoneNumber.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.updatePaginatedData();
    if(this.searchTerm.trim() === ''){
      this.ngOnInit()
      this.noRecordsFound = true
    }else if(this.dataList.length === 0){
      this.noRecordsFound = false
    }
    
  }

  showAddPage() {
    this.routes.navigate([''])
  }

  getMinValue(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.dataList.length);
  }

  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.dataList.slice(startIndex, endIndex);
  }

  ngOnInit() {
    this.dataList = this.service.getRecord();
    this.updatePaginatedData();
    console.log(this.dataList)
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

  totalPages(): number {
    return Math.ceil(this.dataList.length / this.itemsPerPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }

  editRecord(id: any) {
    this.service.EditRecord(id)
    this.routes.navigate(['/edit-record'])
  }
  deleteRecord(id: any) {
    this.service.deleteRecord(id)
    this.ngOnInit()
    this.updatePaginatedData();
  }
  duplicateRecord(id: any) {
    this.service.duplicateRecord(id)
    this.ngOnInit()
    this.updatePaginatedData();
  }
}

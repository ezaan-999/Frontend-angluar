import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-packing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-packing.html',
  styleUrls: ['./create-packing.css']
})
export class CreatePacking {
  istrue = false;
  isedit = false;

  name = '';
  code = 421;
  packQty = 0;
  stdPackQty = 0;
  packsize = 0;
  remarks = '';
  active = false;
  editIndex: number | null = null;

  @Output() saveData = new EventEmitter<any>();

  showpopup() {
    this.istrue = true;
    this.editIndex = null;
    this.isedit = false;
  }

  closepopup() {
    this.istrue = false;
  }

  editdata(data: any, index: number) {
    this.name = data.name;
    this.code = data.code;
    this.packQty = data.packQty;
    this.stdPackQty = data.stdPackQty;
    this.packsize = data.packsize;
    this.remarks = data.remarks;
    this.active = data.active === 'Yes';
    this.editIndex = index;
    this.istrue = true;
    this.isedit = true;
  }

  save() {
    if (!this.name || !this.packQty || !this.stdPackQty || !this.packsize || !this.remarks) {
      alert('Please Fill In All Fields');
      return;
    }

    const newEntry = {
      name: this.name,
      code: this.code,
      packQty: this.packQty,
      stdPackQty: this.stdPackQty,
      packsize: this.packsize,
      remarks: this.remarks,
      active: this.active ? 'Yes' : 'No',
      index: this.editIndex
    };

    this.saveData.emit(newEntry);
    this.closepopup();

    this.name = '';
    this.code = 421;
    this.packQty = 0;
    this.stdPackQty = 0;
    this.packsize = 0;
    this.remarks = '';
    this.active = false;
    this.editIndex = null;
  }
  update() {
    if (!this.name || !this.packQty || !this.stdPackQty || !this.packsize || !this.remarks) {
      alert('Please Fill In All Fields');
      return;
    }

    const updatedEntry = {
      name: this.name,
      code: this.code,
      packQty: this.packQty,
      stdPackQty: this.stdPackQty,
      packsize: this.packsize,
      remarks: this.remarks,
      active: this.active ? 'Yes' : 'No',
      index: this.editIndex
    };

    this.saveData.emit(updatedEntry); 
    this.closepopup();

  
    this.name = '';
    this.code = 421;
    this.packQty = 0;
    this.stdPackQty = 0;
    this.packsize = 0;
    this.remarks = '';
    this.active = false;
    this.isedit = false;
    this.editIndex = null;
  }
}
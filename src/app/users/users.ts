import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePacking } from '../create-packing/create-packing';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, CreatePacking],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})

export class Users {
  @ViewChild(CreatePacking) createPacking!: CreatePacking;
  activeMenuIndex: number | null = null;



  get packings() {
    const stored = localStorage.getItem('packings');
    return stored ? JSON.parse(stored) : [];
  }

  set packings(value: any[]) {
    localStorage.setItem('packings', JSON.stringify(value));
  }

  createpacking() {
    this.createPacking.showpopup();
  }

  addNewPacking(entry: any) {
    const data = this.packings;
    if (entry.index !== null) {
      data[entry.index] = entry;
    } else {
      data.push(entry);
    }
    this.packings = data;
  }

  dotsmenu(index: number) {
    this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
  }

  editbutton(index: number) {
    const pack = this.packings[index];
    this.createPacking.editdata(pack, index);
  }

  printbutton(index: number) {
    alert('Data Printed!');
  }

  deletebutton(index: number) {
    const confirmDelete = window.confirm('Are You Sure You Want To Delete This Row?');
    if (confirmDelete) {
      const data = this.packings;
      data.splice(index, 1);
      this.packings = data;
      alert('Deleted Successfully');
    }
  }
}
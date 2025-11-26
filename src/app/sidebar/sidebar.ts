import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Add } from '../add/add';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
  imports: [RouterModule]
})
export class SidebarComponent { }

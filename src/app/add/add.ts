import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Users } from '../users/users';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {

}

import { Component } from '@angular/core';
import { Users } from './users/users';
import { SidebarComponent } from './sidebar/sidebar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Users, SidebarComponent, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App { }

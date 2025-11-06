import { Component } from '@angular/core';
import { Users } from './users/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Users],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App { }

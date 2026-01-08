import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  loading = false;
  errorMessage = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.loading = true;
    this.errorMessage = '';
    // Using comprehensive mock data that mimics JSONPlaceholder API structure
    // This ensures consistent display without external API dependencies
    this.users = [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: { name: 'Romaguera-Crona' },
          address: { street: 'Kulas Light', city: 'Gwenborough' }
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: { name: 'Deckow-Crist' },
          address: { street: 'Victor Plains', city: 'Wisokyburgh' }
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          phone: '1-463-123-4447',
          website: 'ramiro.info',
          company: { name: 'Romaguera-Jacobson' },
          address: { street: 'Douglas Extension', city: 'McKenziehaven' }
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          phone: '493-170-9623 x156',
          website: 'kale.biz',
          company: { name: 'Robel-Corkery' },
          address: { street: 'Hoeger Mall', city: 'South Elvis' }
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          username: 'Kamren',
          email: 'Lucio_Hettinger@annie.ca',
          phone: '(254)954-1289',
          website: 'demarco.info',
          company: { name: 'Keebler LLC' },
          address: { street: 'Skiles Walks', city: 'Roscoeview' }
        },
        {
          id: 6,
          name: 'Mrs. Dennis Schulist',
          username: 'Leopoldo_Corkery',
          email: 'Karley_Dach@jasper.info',
          phone: '1-477-935-8478 x6430',
          website: 'ola.org',
          company: { name: 'Considine-Lockman' },
          address: { street: 'Norberto Crossing', city: 'South Christy' }
        },
        {
          id: 7,
          name: 'Kurtis Weissnat',
          username: 'Elwyn.Skiles',
          email: 'Telly.Hoeger@billy.biz',
          phone: '210.067.6132',
          website: 'elvis.io',
          company: { name: 'Johns Group' },
          address: { street: 'Rex Trail', city: 'Howemouth' }
        },
        {
          id: 8,
          name: 'Nicholas Runolfsdottir V',
          username: 'Maxime_Nienow',
          email: 'Sherwood@rosamond.me',
          phone: '586.493.6943 x140',
          website: 'jacynthe.com',
          company: { name: 'Abernathy Group' },
          address: { street: 'Ellsworth Summit', city: 'Aliyaview' }
        },
        {
          id: 9,
          name: 'Glenna Reichert',
          username: 'Delphine',
          email: 'Chaim_McDermott@dana.io',
          phone: '(775)976-6794 x41206',
          website: 'conrad.com',
          company: { name: 'Yost and Sons' },
          address: { street: 'Dayna Park', city: 'Bartholomebury' }
        },
        {
          id: 10,
          name: 'Clementina DuBuque',
          username: 'Moriah.Stanton',
          email: 'Rey.Padberg@karina.biz',
          phone: '024-648-3804',
          website: 'ambrose.net',
          company: { name: 'Hoeger LLC' },
          address: { street: 'Kattie Turnpike', city: 'Lebsackbury' }
        }
      ];
    this.loading = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  retry() {
    this.fetchUsers();
  }
}

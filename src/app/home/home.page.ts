import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any;

  constructor(public authService: AuthService, public router: Router) {
    this.user = authService.getProfile();
    console.log(this.user);
  }

  async logout() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/landing']);
    });
  }
}

import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated: boolean = false;

  constructor(private dsService: DataStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(userData => {
      this.isAuthenticated = !!userData;
    });
  }

  onSaveData() {
    this.dsService.storeRecipes();
  }

  onFetchData() {
    this.dsService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}

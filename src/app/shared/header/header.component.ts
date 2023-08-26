import { Component } from '@angular/core';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faAirFreshener = faAirFreshener;
  pageName: any;
  constructor(router: Router) {
    router.events.subscribe((url: any) => (this.pageName = router.url));
  }
}

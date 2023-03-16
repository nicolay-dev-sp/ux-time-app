import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {

  private isWeb = true;

  hideStatusBar = async () => {
    await StatusBar.hide();
  };

  constructor(private router: Router) { }

  ngOnInit() {
    !this.isWeb ? this.hideStatusBar(): '';
  }


  moveToEdit() {
    this.router.navigate(['edit']);
  }

}

import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    !this.isWeb ? this.hideStatusBar(): '';
  }

}

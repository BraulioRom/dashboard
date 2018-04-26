import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})
export class SettingsComponent implements OnInit {

  constructor( public _settings: SettingsService) { }

  ngOnInit() {
    this.fixCheck();
  }

  changeTheme( theme: string , link: any) {

    this.setCheck(link);
    this._settings.setTheme(theme);

  }

  setCheck(link: any) {

    let selectors: any = document.getElementsByClassName('selector');

    for ( let ref of selectors ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  fixCheck() {
    let selectors: any = document.getElementsByClassName('selector');
    for ( let ref of selectors ) {
      if ( ref.getAttribute('data-theme') === this._settings.settings.theme ){
        ref.classList.add('working');
        break;
      }
    }
  }

}

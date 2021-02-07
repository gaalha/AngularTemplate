import { Component, OnInit } from '@angular/core';

import gitInfo from '~root/git-version.json';
import { CONSTANTS } from '~utils/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public currentTagVersion = 'v0.0.0';

  public currentHash = '';

  public readonly APP_NAME = CONSTANTS?.APP_NAME;

  public readonly VENDOR_NAME = CONSTANTS?.VENDOR_NAME;

  public readonly VENDOR_URL = CONSTANTS?.VENDOR_URL;

  constructor() { }

  ngOnInit() {
    this.currentTagVersion = gitInfo?.tag;
    this.currentHash = gitInfo?.hash;
  }

}

import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '~utils/constants';

import {SecurityService} from '~providers/security.service';
import {Menu} from '~models/menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public readonly APP_NAME = CONSTANTS.APP_NAME;

  public menuData: Menu[] = [];

  constructor(
    private security: SecurityService,
  ) { }

  ngOnInit() {
    this.security.getMenuByUserRoles(1).subscribe(
      data => this.menuData = data.data
    );
  }

}

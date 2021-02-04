import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  public sidebarMenuOpened = true;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  // toggleMenuSidebar() {
  //   if (this.sidebarMenuOpened) {
  //     this.renderer.removeClass(document.body, 'sidebar-collapse');
  //     this.renderer.addClass(document.body, 'sidebar-open');
  //     this.sidebarMenuOpened = false;
  //   } else {
  //     this.renderer.removeClass(document.body, 'sidebar-open');
  //     this.renderer.addClass(document.body, 'sidebar-collapse');
  //     this.sidebarMenuOpened = true;
  //   }
  // }

}

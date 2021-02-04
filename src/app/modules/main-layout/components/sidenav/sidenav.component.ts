import {
  Component,
  OnInit, AfterViewInit, ViewChild, Output, EventEmitter,
} from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  @ViewChild('mainSidebar', { static: false }) mainSidebar;

  @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();

  public menuList = [
    {
      id: 1,
      title: 'Dashboard',
      link: '/',
      icon: 'fas fa-tachometer-alt',
    },
    {
      id: 1,
      title: 'Seguridad',
      link: '/security',
      icon: 'fas fa-lock',
      childs: [
        {
          id: 1,
          title: 'Administrar usuarios',
          link: '/admin/users',
          icon: null,
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  /**
   * Componente para los items 'li' del sidenav.
   */

  @Input() id = 0;

  @Input() title = '';

  @Input() link = '';

  @Input() icon = 'far fa-circle';

  @Input() hasChild = false;

  @Input() isChild = false;

  constructor() { }

  ngOnInit() {
  }

}

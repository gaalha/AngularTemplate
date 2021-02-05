import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

  /**
   * El titulo aparece en grande a la derecha.
   */
  @Input() title = 'Especifique un titulo';

  /**
   * Este parametro es pcional.
   *
   * El formato de la lista debe ser:
   * [{title: 'Home', link: ''}, {title: 'Dashboard', link: '/'}]
   *
   */
  @Input() items = [];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}

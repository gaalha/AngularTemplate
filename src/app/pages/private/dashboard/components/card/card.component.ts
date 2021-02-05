import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /**
   * Colores disponibles:
   * - Azul claro: bg-info
   * - Verde: bg-success
   * - Amarillo: bg-warning
   * - Rojo: bg-danger
   * - Azul neon: bg-primary
   */
  @Input() color = 'bg-info';

  @Input() count = 0;

  @Input() title = '';

  @Input() icon = 'ion ion-pie-graph';

  @Input() url;

  constructor() { }

  ngOnInit() {
  }

}

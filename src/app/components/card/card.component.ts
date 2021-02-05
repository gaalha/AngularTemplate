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

  @Input() title = 'Agregar titulo';

  /**
   * Se usan iconos de Fontawesome 5.
   * Tambien se pueden usar iconos como "Ionicons"
   */
  @Input() icon = 'fas fa-chart-pie';

  @Input() footerText = 'Más información';

  @Input() footerUrl;

  constructor() { }

  ngOnInit() {
  }

}

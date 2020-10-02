import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EngineerModel } from '../../models/engeneer.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() engeneer: EngineerModel;
  @Output() view = new EventEmitter<EngineerModel>();
  @Output() share = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}

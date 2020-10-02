import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { EngineerModel } from '../../models/engeneer.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-item-detail-container',
  templateUrl: './item-detail-container.component.html',
  styleUrls: ['./item-detail-container.component.scss']
})
export class ItemDetailContainerComponent implements OnInit {
  engineer: EngineerModel;

  engineer$: Observable<EngineerModel>;
  constructor(
    private service: DashboardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.paramMap.pipe(
    //   concatMap(params => {
    //     const id = params.get('id');
    //     return this.service.getById(Number(id));
    //   }),
    // ).subscribe(engineer => {
    //   this.engineer = engineer;
    // });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.engineer$ = this.service.getById(Number(id));
    });
  }


  
}

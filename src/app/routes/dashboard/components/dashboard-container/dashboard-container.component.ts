import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { EngineerModel } from '../../models/engeneer.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  datas: EngineerModel[];
  searchTerm: string;
  searchChange$ = new Subject<string>();
  constructor(
    private service: DashboardService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshData();

    this.searchChange$.pipe(
      distinctUntilChanged(),
      debounceTime(400),
    ).subscribe(_ => {
      this.refreshData();
    });
  }

  private refreshData(): void {
    this.service.getAll(this.searchTerm).subscribe(datas => {
      this.datas = datas;
      console.log(this.datas);
    });
  }

  onSearchChange(searchTerm: string): void {
    this.searchChange$.next(searchTerm);
  }

  onViewClick(engineer: EngineerModel): void {
    this.router.navigate(['/dashboard', engineer.id]);
  }
}

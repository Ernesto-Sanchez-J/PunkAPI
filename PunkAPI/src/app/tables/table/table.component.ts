import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DataService } from 'src/app/services/data.service';
import { IBeer } from './interfaces/ibeer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource: MatTableDataSource<IBeer>;

  count = 26;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dataService: DataService) { }

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'image_url',
    'abv',
    'ibu',
    'tag',
  ];

  async ngOnInit() {
    const data = await this.dataService.getBeers();
    this.dataSource = new MatTableDataSource(data);

    // this.dataService.sort = this.sort;
    this.sort.direction = 'asc';
    this.sort.active = this.displayedColumns[0];
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getTableBeers(){
    return await this.dataService.getBeers();
  }

  async addBeer(){
    this.dataSource = new MatTableDataSource(await this.dataService.getBeersCount(this.count++));
    this.dataSource.sort = this.sort;
    this.sort.direction = 'asc';
    this.sort.active = this.displayedColumns[0];
  }
}


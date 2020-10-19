import { Component, OnInit, ViewChild, HostListener, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements OnInit {

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective
  elements: any = [];
  previous: any = [];
  headElements = ['ID', 'Name', "Delete"];
  heroNames: string = "";
  heroes: Hero[];

  constructor(private heroService: HeroService,private cdRef: ChangeDetectorRef) { }
  // On initialization get heroes
  ngOnInit() {
    this.getHeroes();
 }

  ngAfterViewInit() {
    // Setup our Table Pagination
    this.mdbTable.setDataSource([]);
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.refresh();
  }

  refresh() {
  //  this.mdbTable.setDataSource(this.heroes);
    this.cdRef.detectChanges();
  }
  // Awaits for the Observable to emit the array of heroes
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        console.log(this.heroes);
        this.elements = this.heroes;
        this.mdbTable.setDataSource([...this.heroes]);
        this.cdRef.markForCheck();
      });
  }
  // add a hero using the heroService, and await it to
  // emit the new list of heroes from the service
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    console.log(this.heroNames);
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.mdbTable.setDataSource(this.heroes);
        this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
      });
  }
  // delete the hero
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    console.log(this.heroes);
    this.heroService.deleteHero(hero).subscribe(()=>{
      this.refresh();
      this.cdRef.markForCheck();
      this.mdbTable.setDataSource(this.heroes);
    });
  }

}

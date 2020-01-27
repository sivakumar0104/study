import { Component, OnInit } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  albums: any;

  constructor(
    private testservice: TestServiceService,
  ) { }

  ngOnInit() {
    this.albums = this.testservice.getAlbums();
  }

}

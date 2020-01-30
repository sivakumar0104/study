import { Component, OnInit } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  albums: any;
  test_data: any;
  view_data: any;
  show_list: boolean;
  show_form: boolean;

  constructor(
    private testservice: TestServiceService,
  ) { }

  ngOnInit() {
    this.show_list = true;
    this.albums = this.testservice.getAlbums();
  }

  view_particular_data(data: any) : any
  {
    this.show_form = true;
    this.show_list = false;
    // data.test_param = 'sivakumar';
    this.view_data = this.testservice.view_employee(data);
  }


}

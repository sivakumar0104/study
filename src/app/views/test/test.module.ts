import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { TestRoutingModule } from './test-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [Page1Component],
  imports: [
    CommonModule,
    TestRoutingModule,
    // HttpClientModule
  ]
})
export class TestModule { }

import { NgModule } from '@angular/core';
import { Page1Component } from './page1.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'page1',
    component: Page1Component,
    data: {
      title: 'page1'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }

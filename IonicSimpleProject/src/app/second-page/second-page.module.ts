import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SecondPagePage } from './second-page.page';
import { SecondPageServiceService } from './second-page-service.service';

const routes: Routes = [
  {
    path: '',
    component: SecondPagePage
  },
  {
    path: ':param1',
    component: SecondPagePage
  },
  {
    path: ':param1/:param2',
    component: SecondPagePage
  },
  { path: 'test-page/',
    loadChildren: './test-page/test-page.module#TestPagePageModule'
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SecondPagePage],
  providers: [SecondPageServiceService]
})
export class SecondPagePageModule {}

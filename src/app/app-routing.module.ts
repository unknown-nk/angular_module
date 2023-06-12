import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './main/table/table.component';
import { HomeComponent } from './main/home/home.component';
import { CalculatorComponent } from './main/calculator/calculator.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

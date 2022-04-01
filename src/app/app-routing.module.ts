import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestComponentComponent } from './my-test-component/my-test-component.component';

const routes: Routes = [
  {
    path: 'test',
    component: MyTestComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

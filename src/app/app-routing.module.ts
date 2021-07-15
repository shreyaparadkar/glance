import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanComponent } from './scan/scan.component';
import {InfoComponent} from './info/info.component';

const routes: Routes = [
  { path: '', component: InfoComponent},
  { path: 'scan', component: ScanComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

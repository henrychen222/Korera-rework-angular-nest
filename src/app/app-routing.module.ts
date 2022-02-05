import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResourceComponent} from './containers/resource/resource.component';
import {ProjectComponent} from './containers/project/project.component';

const routes: Routes = [
  {path: 'resource', component: ResourceComponent},
  {path: 'project', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

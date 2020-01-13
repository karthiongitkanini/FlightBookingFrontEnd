import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageWithIconsComponent } from './homepage-with-icons/homepage-with-icons.component';
import { SearchPageComponent } from './search-page/search-page.component';


const routes: Routes = [
          { path: 'homeicons', component: HomepageWithIconsComponent, data: { animation: 'isLeft' } },
          // { path: 'Home', component: SearchPageComponent, data: { animation: 'isLeft' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoreNewsComponent } from './pages/more-news/more-news.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mas-noticias',
    component: MoreNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

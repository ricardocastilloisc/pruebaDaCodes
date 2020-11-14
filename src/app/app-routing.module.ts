import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedModule } from './pages/featured/featured.module';
import { GamesModule } from './pages/games/games.module';
import { HomeComponent } from './pages/home/home.component';
import { TeamsModule } from './pages/teams/teams.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: 'teams',
    loadChildren: () => TeamsModule,
  },
  {
    path: 'featured',
    loadChildren: () => FeaturedModule,
  },
  {
    path: 'games',
    loadChildren: () => GamesModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

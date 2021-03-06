import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserFormComponent} from './user-form/user-form.component';
import {AboutComponent} from './about/about.component';
import {UserComponent} from './user/user.component';
import { AuthGuard } from './core/auth-guard';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: UserFormComponent, },
  { path: 'about', component: AboutComponent },
  { path: 'user', component:UserComponent , canActivate: [AuthGuard]},
  { path: 'notes', loadChildren:()=> import('./note/note.module').then(m=>m.NotesModule),canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

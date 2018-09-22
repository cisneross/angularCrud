import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAuthorComponent } from './new-author/new-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { EditAuthorsComponent } from './edit-authors/edit-authors.component';

const routes: Routes = [
  {path: 'new', component:NewAuthorComponent},
  {path: '', component:AllAuthorsComponent},
  {path: 'edit/:id', component:EditAuthorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

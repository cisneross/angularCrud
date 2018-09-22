import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { EditAuthorsComponent } from './edit-authors/edit-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    NewAuthorComponent,
    AllAuthorsComponent,
    EditAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

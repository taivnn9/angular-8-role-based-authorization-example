import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// used to create fake backend
import { fakeBackendProvider, TruncatePipe } from './_helpers';

import { AppComponent } from './app.component';
//import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { QuanTriComponent } from './quan-tri/quan-tri.component'
import { QuanTriRoutingModule } from './quan-tri/quan-tri-routing';
import { AppRoutingModule } from './app.routing';
import { ToastrModule } from 'ngx-toastr';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    EditorModule
  ],
  declarations: [
    TruncatePipe,
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    QuanTriComponent,
  ],
  entryComponents: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

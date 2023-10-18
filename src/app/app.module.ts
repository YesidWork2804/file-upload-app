// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa el módulo HttpClientModule

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/FileUploadComponent';

@NgModule({
  declarations: [AppComponent, FileUploadComponent],
  imports: [
    BrowserModule,
    HttpClientModule, // Agrega HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

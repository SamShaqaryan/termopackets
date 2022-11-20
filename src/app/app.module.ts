import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './layouts/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AssortmentComponent } from './pages/assortment/assortment.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    AssortmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

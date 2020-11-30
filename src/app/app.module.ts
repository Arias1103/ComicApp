import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//routes
import { APP_ROUTING } from './app.routes';

//Services
import { HeroesService } from './services/heroes.service';

// components
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    SearcherComponent,
    CardHeroComponent,
    FormGroupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    APP_ROUTING,
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { InputComponent } from './components/input/input.component';
import { StrengthPasswordSectionsComponent } from './components/strength-password-sections/strength-password-sections.component';
import { SectionsItemComponent } from './components/sections-item/sections-item.component';



@NgModule({
  declarations: [
    AppComponent,
    FilterColorPipe,
    InputComponent,
    StrengthPasswordSectionsComponent,
    SectionsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

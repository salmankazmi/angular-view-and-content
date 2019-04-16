import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CheckboxModule } from 'primeng/checkbox';
import {SplitButtonModule} from 'primeng/splitbutton';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([], {}), CheckboxModule, SplitButtonModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

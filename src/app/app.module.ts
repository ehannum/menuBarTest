import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonGroupsService } from './button-groups.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ButtonGroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

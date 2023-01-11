import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClientAccountsComponent } from './client-accounts/client-accounts.component';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { RouterModule } from '@angular/router';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import { DeveloperProfileComponent } from './developer-profile/developer-profile.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ClientAccountsComponent,
    ClientsPageComponent,
    AccountTransactionsComponent,
    DeveloperProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

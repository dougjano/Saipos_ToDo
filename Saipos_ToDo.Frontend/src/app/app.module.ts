import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { PanelService } from './panel.service';
import { BoardComponent } from './components/board/board/board.component';
import { ListComponent } from './components/board/list/list.component';
import { CardComponent } from './components/board/card/card.component';

import { ContentEditDirective } from 'src/app/directives/common/content-edit.directive';
import { ContextMenuComponent } from './components/common/context-menu/context-menu.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthMaterialModule } from './components/auth-dialog/auth-material-module';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MessageDialogComponent } from './components/message-dialog/message-dialog.component';

const appRoutes: Routes =[
  {path: '', component: HomeComponent}  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    CardComponent,
    ContentEditDirective,
    ContextMenuComponent,
    BoardComponent,
    AuthDialogComponent,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    AuthMaterialModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [BoardComponent, AuthDialogComponent, MessageDialogComponent],
  providers: [PanelService, { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  bootstrap: [AppComponent, BoardComponent],
})
export class AppModule { }

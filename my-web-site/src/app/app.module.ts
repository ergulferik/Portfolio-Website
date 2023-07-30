import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule,DxTemplateModule,DxBulletModule } from 'devextreme-angular';
import { DxTreeListModule } from 'devextreme-angular';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HeaderComponenet} from './header/header.component'
import { CursorAnimationComponent} from './cursor-animation/cursor-animation.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import {AppsComponent} from "./apps/apps.component"
import { ReferencesComponenet } from './references/references.component';
import { AnimationComponentComponent } from './animation-component/animation-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MainComponent,
    ContactComponent,
    AdminComponent,
    AppsComponent,
    ReferencesComponenet,
    HeaderComponenet,
    AnimationComponentComponent,
    CursorAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxTreeListModule,
    DxBulletModule,
    MatExpansionModule,
    MatTableModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

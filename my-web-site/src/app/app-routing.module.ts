import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AppsComponent } from './apps/apps.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AppService } from './app.services';
import { Card } from './cards.model';
import { Subscription } from 'rxjs';
import { ReferencesComponenet } from './references/references.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'references', component: ReferencesComponenet}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AtrakcjeWPoblizuComponent} from "./atrakcje-w-poblizu/atrakcje-w-poblizu.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {ONasComponent} from "./o-nas/o-nas.component";
import {PfronComponent} from "./pfron/pfron.component";
import {TurnusyRehabilitacyjneComponent} from "./turnusy-rehabilitacyjne/turnusy-rehabilitacyjne.component";
import {ZabiegiRehabilitacyjneComponent} from "./zabiegi-rehabilitacyjne/zabiegi-rehabilitacyjne.component";
import {HomeComponent} from "./home/home.component";


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'atrakcje-w-poblizu',
    component: AtrakcjeWPoblizuComponent
  },
  {
    path: 'kontakt',
    component: KontaktComponent
  },
  {
    path: 'o-nas',
    component: ONasComponent
  },
  {
    path: 'pfron',
    component: PfronComponent
  },
  {
    path: 'turnusy-rehabilitacyjne',
    component: TurnusyRehabilitacyjneComponent
  },
  {
    path: 'zabiegi-rehabilitacyjne',
    component: ZabiegiRehabilitacyjneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

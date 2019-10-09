import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { TalkDetailComponent } from "./talk-detail/talk-detail.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "talk/:room/:index", component: TalkDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {}

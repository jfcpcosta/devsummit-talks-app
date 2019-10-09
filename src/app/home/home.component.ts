import { Component, OnInit } from "@angular/core";
import { TalksService } from "../services/talks.service";
import { Talk } from "../models/talk";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    selectedRoom: number;
    talks: Talk[] = [];

    constructor(
        private talksService: TalksService,
        private routerExtensions: RouterExtensions
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.talksService
            .getTalks(1)
            .subscribe(room => (this.talks = room.talks));
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        this.selectedRoom = args.newIndex + 1;
        this.talks = [];
        this.talksService
            .getTalks(this.selectedRoom)
            .subscribe(room => (this.talks = room.talks));
    }

    onItemTap(args: ItemEventData) {
        console.log(
            `Index: ${args.index}; View: ${args.view} ; Item: ${
                this.talks[args.index]
            }`
        );
        this.routerExtensions.navigate([
            "/home/talk",
            this.selectedRoom,
            args.index
        ]);
    }
}

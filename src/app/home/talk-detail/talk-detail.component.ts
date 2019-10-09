import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TalksService } from "../../services/talks.service";
import { Talk } from "../../models/talk";

@Component({
    selector: "TalkDetail",
    templateUrl: "./talk-detail.component.html"
})
export class TalkDetailComponent implements OnInit {
    talk: Talk;

    constructor(
        private route: ActivatedRoute,
        private talksService: TalksService
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(data => {
            const room = parseInt(data.get("room"));
            const index = parseInt(data.get("index"));

            this.talksService.getTalks(room).subscribe(room => {
                this.talk = room.talks[index];
                console.log(this.talk.name);
            });
        });
    }
}

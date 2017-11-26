import { LinksService } from './links.service';
import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { AddLinkComponent } from "../add-link/add-link.component";
import { EditLinkComponent } from '../edit-link/edit-link.component';
import { Subject } from 'rxjs/Subject';
import { LinkService } from '../add-link/link.service';

export const dialogs = [AddLinkComponent, EditLinkComponent];
const dialogsMap = {
    'add-link': AddLinkComponent,
    'edit-link': EditLinkComponent,
};

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

    public links = [];

    page: number = 1;

    total: number = null;

    dialogRef: MatDialogRef<any>;

    constructor(public dialog: MatDialog,
                private linksService: LinksService,
                private linkService: LinkService) {
    }

    ngOnInit() {
        this.loadLinks();
    }

    loadLinks() {
        this.linksService.showLinks()
            .subscribe(links => {
                this.links = links;
                this.total = links.length;
            })
    }


    deleteLink(link) {
        if (confirm("Are you sure you want to delete this link?")) {
            this.linkService.deleteLink(link.id).subscribe(
                value => {
                    this.updateLinks();
                },
                error => {
                    this.updateLinks();
                });
        }
    }

    updateLinks(): void {
        this.linksService.showLinks().subscribe(data => {
            this.links = data;
            this.total = data.length;
        });
    }


    open(key, link = false) {
        this.dialogRef = this.dialog.open(dialogsMap[key]);
        if (link) {
            this.dialogRef.componentInstance.link = link;
        }
        const subject = new Subject();
        this.dialogRef.afterClosed().subscribe(result => {
            this.links = this.dialogRef.componentInstance.links;
            this.total = this.links.length;
            this.dialogRef = null;
            subject.next();

        });
    }

}

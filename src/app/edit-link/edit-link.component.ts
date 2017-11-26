import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { LinkService } from '../add-link/link.service';
import { LinksService } from '../links/links.service';

@Component({
    selector: 'app-edit-link',
    templateUrl: './edit-link.component.html',
    styleUrls: ['./edit-link.component.scss']
})
export class EditLinkComponent implements OnInit {

    editLinkForm: FormGroup;

    link = null;

    private anyErrors: boolean;

    constructor(public dialogRef: MatDialogRef<any>,
                private fb: FormBuilder,
                private linkService: LinkService,
                private linksService: LinksService) {

    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.link = this.dialogRef.componentInstance.link;
        this.editLinkForm = this.fb.group({
            id: [this.link.id, []],
            title: [this.link.title, Validators.required],
            url: [this.link.url, Validators.required],
            is_private: [this.link.is_private]
        });
    }

    updateLink(): void {
        const formModel = this.editLinkForm.value;

        if (this.editLinkForm.valid) {
            this.linkService.updateLink(this.link.id, formModel).subscribe(
                value => {
                    this.closeModal();
                },
                error => {
                    this.anyErrors = true;
                    this.closeModal();
                });
        }
    }

    cancel(): void {
        this.editLinkForm.reset();
        this.closeModal();
    }

    closeModal(): void {
        this.linksService.showLinks().subscribe(data => {
            this.dialogRef.componentInstance.links = data;
            this.dialogRef.close();
        });
    }

}

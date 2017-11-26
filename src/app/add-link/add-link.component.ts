import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Link } from './link.model';
import { LinkService } from './link.service';
import { LinksService } from '../links/links.service';
@Component({
  selector: 'add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {

  addLinkForm: FormGroup;

    private anyErrors: boolean;

  constructor(
      public dialogRef: MatDialogRef<any>,
      private fb: FormBuilder,
      private linkService: LinkService,
      private linksService: LinksService,
  ) {

  }

  ngOnInit() {
      this.addLinkForm = this.fb.group({
          title: ['', Validators.required ],
          url: ['', Validators.required ],
          is_private: ['1' ]
      });
  }

  cancel(): void {
      this.addLinkForm.reset();
      this.closeModal();
  }

  addLink(): void {
      const formModel = this.addLinkForm.value;
      if (this.addLinkForm.valid) {
          this.linkService.createLink(formModel).subscribe(
              value => {
                  this.closeModal();
              },
              error => {
                  this.anyErrors = true;
                  this.closeModal();
              });
      }
  }

  closeModal(): void {
      this.linksService.showLinks().subscribe(data => {
          this.dialogRef.componentInstance.links = data;
          this.dialogRef.close();
      });

  }

}

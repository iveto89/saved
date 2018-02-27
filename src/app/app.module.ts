import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { dialogs, LinksComponent } from './links/links.component';
import { FooterComponent } from './footer/footer.component';

import { MatDialogModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AddLinkComponent } from './add-link/add-link.component';
import { LinkService } from './add-link/link.service';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { LinksService } from './links/links.service';
import { SafePipeModule } from 'safe-pipe';
import { EditLinkComponent } from './edit-link/edit-link.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        AppComponent,
        LinksComponent,
        FooterComponent,
        AddLinkComponent,
        EditLinkComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        ReactiveFormsModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'My-Xsrf-Cookie',
            headerName: 'My-Xsrf-Header',
        }),
        SafePipeModule,
        NgxPaginationModule
    ],
    exports: [],
    providers: [
        LinkService,
        LinksService
    ],
    bootstrap: [AppComponent],
    entryComponents: dialogs,
})
export class AppModule {
}

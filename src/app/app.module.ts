import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	IgxButtonModule,
	IgxIconModule,
	IgxLayoutModule,
	IgxNavigationDrawerModule,
	IgxRadioModule,
	IgxRippleModule,
	IgxSwitchModule,
	IgxToggleModule,
	IgxCardModule,
	IgxCalendarModule
} from 'igniteui-angular';
import { PrincipalComponent } from './views/principal/principal.component';
@NgModule({
    declarations: [
        AppComponent,
        PrincipalComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        IgxButtonModule,
        IgxIconModule,
        IgxLayoutModule,
        IgxNavigationDrawerModule,
        IgxRippleModule,
        IgxSwitchModule,
        IgxToggleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

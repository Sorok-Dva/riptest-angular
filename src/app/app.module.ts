import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowIpComponent } from './tools/show-ip/show-ip.component';
import { ShowDateTimeComponent } from './tools/show-datetime/show-datetime.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ShowIpComponent,
		ShowDateTimeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,

		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatMenuModule,

		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'fr' }
	],
	bootstrap: [AppComponent],
})
export class AppModule {}

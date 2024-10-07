import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
    {path: '', component: ListComponent},
];


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {enableTracing: true}),
        FormsModule,
    ], 
    declarations: [
        AppComponent,
        ListComponent,
    ],
    providers: [
        provideAnimationsAsync(),
    ],
        
    bootstrap: [
        AppComponent,
    ],
    exports: [RouterModule],
})
export class AppModule{}
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, VERSION } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Drag & Drop in Angular 10";

  todos = [
    {
      name: "Angular",
      category: "Web Development"
    },
    {
      name: "Flexbox",
      category: "Web Development"
    },
    {
      name: "iOS",
      category: "App Development"
    },
    {
      name: "Java",
      category: "Software development"
    }
  ];

  completed = [
    {
      name: "Android",
      category: "Mobile Development"
    },
    {
      name: "MongoDB",
      category: "Databases"
    },
    {
      name: "ARKit",
      category: "Augmented Reality"
    },
    {
      name: "React",
      category: "Web Development"
    }
  ];

  //onDrop(event: CdkDragDrop<string[]>) {
  onDrop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

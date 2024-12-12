import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-drag-and-drop',
    standalone: true,
    imports: [CommonModule, DragDropModule],
    templateUrl: './drag-and-drop.component.html',
    styleUrl: './drag-and-drop.component.scss'
})
export class DragAndDropComponent {
    items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-star-rating',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './star-rating.component.html',
    styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
    stars: Array<{ id: number, selected: boolean }> = [
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
        { id: 5, selected: false }
    ];

    /**
     * 
     * @param starId 
     * @memberof StarRatingComponent
     * Iterate over stars array
     * If the id of the star in scope is equal to the star id passed to the function, show star as selected
     * If the id of the star in scope is less than the star id passed to the function, show the star as selected
     * Else if the id of the star in scope is greater than the id passed to the function, show the star as unselected
     */
    onStarSelected(starId: number) {
        this.stars.map(star => {
            if (star.id === starId || star.id < starId) {
                star.selected = true;
            } else if (star.id > starId) {
                star.selected = false;
            }
        });
    }

}

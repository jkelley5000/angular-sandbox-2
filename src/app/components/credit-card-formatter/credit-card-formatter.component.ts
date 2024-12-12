import { Component } from '@angular/core';
import { SharedModule } from '../../common/modules/shared/shared.module';
import { CcFormatPipe } from './cc-formatter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-credit-card-formatter',
    standalone: true,
    imports: [CommonModule, FormsModule, SharedModule],
    templateUrl: './credit-card-formatter.component.html',
    styleUrl: './credit-card-formatter.component.scss'
})
export class CreditCardFormatterComponent {
    ccInputModel: string = '';

    constructor(private ccFormatterPipe: CcFormatPipe) { }

    onCcInputChange(event: any) {
        let ccNumber = event.target.value;
        console.log(ccNumber.length);
        if (ccNumber.length > 3) {
            this.ccInputModel = this.ccFormatterPipe.transform(ccNumber);
        }
    }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CcFormatPipe } from '../../../components/credit-card-formatter/cc-formatter.pipe';



@NgModule({
    declarations: [CcFormatPipe],
    imports: [
        CommonModule
    ],
    providers: [CcFormatPipe]
})
export class SharedModule { }

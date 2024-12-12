import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cc-format'
})
export class CcFormatPipe implements PipeTransform {
    /**
     * 
     * @param ccNumber 
     * Removes any non numberical characters
     * Identifies groupings of 4 characters and joins them each with a space
     * Removes any characters that exceed the max character limit
     * @returns formattedCcNumber
     */
    transform(ccNumber: string) {
        let formattedCcNumber;
        ccNumber = ccNumber.replace(/\D/g, "");
        formattedCcNumber = ccNumber.match(/.{1,4}/g)?.join(" ") || "";
        formattedCcNumber = formattedCcNumber.substring(0, 19);

        return formattedCcNumber;
    }
}
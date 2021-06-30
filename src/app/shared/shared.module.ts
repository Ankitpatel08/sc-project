import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropDownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { placeholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        placeholderDirective,
        DropDownDirective
    ],
    imports: [CommonModule],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        placeholderDirective,
        DropDownDirective,
        CommonModule
    ]
})
export class SharedModule {

}
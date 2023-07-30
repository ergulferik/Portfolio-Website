import { Component } from "@angular/core";
import { Location } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
  })
export class HeaderComponenet{
    isOnReferences = true;
    isOnApps=true;
    currentPage =""
    
    constructor(private location: Location) {
        this.currentPage = this.location.path().replace("/","");
      }

    onMouseEnter(link: string) {
   
        if ("references" === link && this.currentPage==="references") {
          this.isOnReferences = true;
        }
        else if (this.currentPage==="references" && "references" !== link){
            this.isOnReferences=false;
        }
        else if(this.currentPage==="apps" && "apps"===link){
            this.isOnApps = true;
        }
        else if(this.currentPage==="apps" && "apps"!==link){
            this.isOnApps = false;
        }
      }
    
      onMouseLeave(link: string) {
        this.isOnApps=true;
        this.isOnReferences=true;
      }

    
}
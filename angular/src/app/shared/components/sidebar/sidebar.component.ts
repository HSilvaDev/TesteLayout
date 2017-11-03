import { Component } from '@angular/core';
import {} from 'angular2-localstorage/LocalStorageEmitter'

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive = false;
    showMenu = '';
    pushRightClass: string = 'float-left';
    
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    teste(){
       const body = document.querySelector('body');
        if (!body.classList.toggle("menu-on-top"))
        {
            body.classList.toggle("minified");
            body.classList.toggle("hidden-menu");
            document.querySelector('html').classList.remove("hidden-menu-mobile-lock");

           
        }
    }
}

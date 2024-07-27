import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public searchTerm : string='';

  constructor(public service:UserService ,public services:AdminService){

  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    this.service.search.next(this.searchTerm);
  }

}

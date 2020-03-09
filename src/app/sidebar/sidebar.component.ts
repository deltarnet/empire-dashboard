import { Component, OnInit } from '@angular/core';

export interface StatusData {
  project: string;
  
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  retrieved_data : StatusData[] = [
   
     {
        project: "POLLSTER",
    },
    {
        project: "CHESS",
    }
];

  constructor() { }

  ngOnInit() {
  }

}

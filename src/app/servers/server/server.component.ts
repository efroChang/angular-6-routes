import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() 
  {
    // [KEY] Use Resolver Guard
    this.route.data.subscribe(
      ( data: Data ) => {
        this.server = data['server'];   // [KEY]: From ServerResolver
      }
    )


    // const id = +this.route.snapshot.params['id'];  // Retrieve from URL, "+" converts id to number

    // this.server = this.serversService.getServer( id );

    // // For within the page id changes...
    // this.route.params.subscribe(
    //   ( params: Params ) => {
    //     this.server = this.serversService.getServer( +params['id'] ); // "+" converts id to number
    //   }
    // )
  }

  onEdit()
  {
    this.router.navigate( 
      [ 'edit' ],
      { 
        relativeTo: this.route,
        queryParamsHandling: 'preserve'       // To preserve the URL
      }
    )
  }

}

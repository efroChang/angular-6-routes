import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy 
{
  user: {id: number, name: string};

  paramsSubscription: Subscription;

  constructor( private route: ActivatedRoute ) { }    // [KEY]

  ngOnInit() 
  {
    // For the initial URL hit
    this.user = 
    {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    // [KEY]: params is an Observable, which handles asynchromous calls
    // For the link within the component
    this.paramsSubscription = this.route.params
      .subscribe
      (
        ( params: Params ) => 
        {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      )
  }

  ngOnDestroy()
  {
    this.paramsSubscription.unsubscribe();
  }

}

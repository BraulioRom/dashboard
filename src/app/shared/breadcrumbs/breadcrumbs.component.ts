import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  label: string = '';
  constructor(
    private router: Router,
    public _title: Title,
    public meta: Meta
  ) {
    this.getDataRoute()
    .subscribe( data => {
      this.label = data.title;
      _title.setTitle(this.label);

      let metatag: MetaDefinition = {
        name: 'description',
        content: this.label
      };

      this.meta.updateTag( metatag );
    });
   }

   getDataRoute() {
    return this.router.events
            .filter( event => event instanceof ActivationEnd && event.snapshot.firstChild === null )
            .map((event: ActivationEnd) => event.snapshot.data);
   }

  ngOnInit() {
  }

}

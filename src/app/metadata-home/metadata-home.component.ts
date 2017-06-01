import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-metadata-home',
  templateUrl: './metadata-home.component.html',
  styleUrls: ['./metadata-home.component.sass']
})
export class MetadataHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

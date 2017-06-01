import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-metadata-diff',
  templateUrl: './metadata-diff.component.html',
  styleUrls: ['./metadata-diff.component.sass']
})
export class MetadataDiffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

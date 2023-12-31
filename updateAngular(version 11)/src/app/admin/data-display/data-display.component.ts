import { DisplayDataService } from "./../../../services/displayData.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-display",
  templateUrl: "./data-display.component.html",
  styleUrls: ["./data-display.component.css"],
})
export class DataDisplayComponent implements OnInit {
  dataReceived: any[];
  constructor(private service: DisplayDataService) {}

  ngOnInit() {
    this.service.getAlldata().subscribe((data) => {
      this.dataReceived = data;
    });
  }
}

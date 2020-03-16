import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ContactInfo } from "src/app/_models/contactInfo";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  @Input() contactInfo: ContactInfo;
  @Output() closeForm = new EventEmitter();
  contactInfOpened = false;
  constructor() {}

  ngOnInit() {
    console.log("contact ", this.contactInfo);
  }

  openContactInfo() {
    this.contactInfOpened = !this.contactInfOpened;
  }

  close() {
    this.closeForm.next();
  }
  infoFromContact(e) {
    // this.contact = e;
    console.log(" contact ", e);
    this.contactInfo = e;
  }
}

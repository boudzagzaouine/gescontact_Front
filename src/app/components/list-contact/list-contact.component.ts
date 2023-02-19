import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { collectionGroup } from '@firebase/firestore';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  contacts: Contact[] = [];
  error: any;
  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => {
        this.contacts=contacts
        console.log(contacts)
      });
  }
}

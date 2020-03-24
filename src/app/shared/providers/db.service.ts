import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeType } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  cardCollectionName = 'cards';
  cardCollectionSnapshotChanges: DocumentChangeType[] = ['added', 'removed', 'modified'];

  constructor(private store: AngularFirestore) { }

  get Cards$() {
    this.cardCollectionSnapshotChanges;
    return this.store.collection(this.cardCollectionName).snapshotChanges(this.cardCollectionSnapshotChanges);
  }
}

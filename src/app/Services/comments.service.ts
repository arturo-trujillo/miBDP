import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentsCol: AngularFirestoreCollection<any>
  comments:Observable<any>

  constructor(private afs: AngularFirestore) {
    this.commentsCol = afs.collection<any>('comments');
    this.comments = this.commentsCol.valueChanges();
   }
}

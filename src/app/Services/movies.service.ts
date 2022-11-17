import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movieCol: AngularFirestoreCollection<any>;
  movies: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.movieCol = afs.collection<any>('movies');
    this.movies = this.movieCol.valueChanges();
  }

}

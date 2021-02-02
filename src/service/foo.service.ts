import { Foo } from './../model/Foo';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooService {
  private fooApi: string = 'http://localhost:8080/api/foo';

  constructor(private http: HttpClient) {}

  public addFoo(foo: Foo): Observable<any> {
    return this.http.post(this.fooApi, foo);
  }

  public deleteFoo(foo: Foo): Observable<any> {
    return this.http.delete(this.fooApi + '/' + foo.id);
  }

  public loadFoos(): Observable<Foo[]> {
    return this.http.get<Foo[]>(this.fooApi);
  }
}

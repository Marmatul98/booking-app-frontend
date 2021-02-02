import { Foo } from './../../../model/Foo';
import { FooService } from './../../../service/foo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})
export class FooComponent implements OnInit {
  private _foos: Foo[] = [];

  public fooForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(
    private fooService: FooService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadFoos();
  }

  public onSubmit(): void {
    if (this.fooForm.valid) {
      this.fooService
        .addFoo(new Foo(this.fooForm.get('name')?.value))
        .subscribe(() => this.loadFoos());
    } else {
      console.warn('Form is invalid');
    }
  }

  public deleteFoo(foo: Foo): void {
    if (confirm('Delete foo named ' + foo.name)) {
      this.fooService.deleteFoo(foo).subscribe(() => this.loadFoos());
    }
  }

  public loadFoos(): void {
    this.fooService.loadFoos().subscribe((data: Foo[]) => {
      this._foos = data;
    });
  }

  public get foos(): Foo[] {
    return this._foos;
  }
}

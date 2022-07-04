import { BookModel } from './model/book';
import { BookService } from './product-list.component.service';
import { Component, OnInit } from '@angular/core';

// ============================================== //
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  // ============================================== //
  constructor(private bookService: BookService) {}
  // ============================================== //
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((response) => {
      this.livros = response;
      console.log(this.livros);
    });
  }
  // ============================================== //
  livros: BookModel[] = [];
}

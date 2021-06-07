# Unsubscribe Subscriptions

Recently I stumbled above an elegant way to unsubscribe to subscriptions in angular components.

Until today, I used the following pattern...

```ts
    private subscriptions: Subscription[] = [];

    constructor(private booksService: BookService) { }

    ngOnInit() {
        this.subscriptions.push(
            this.booksService.getBooks()
            .pipe(
               filter(books => books.length > 0),
               takeUntil(this.ngUnsubscribe)
            )
            .subscribe(books => console.log(books));
        )
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub =>  sub.unsubscribe())
    }
```

This has the advantage, that you have to store every subscription in the subscriptions array.

The following approach provides way more flexibility but with less readability...

```ts
    private ngUnsubscribe

    constructor(private booksService: BookService) { }

    ngOnInit() {
        this.booksService.getBooks()
            .pipe(
               filter(books => books.length > 0),
               takeUntil(this.ngUnsubscribe)
            )
            .subscribe(books => console.log(books));
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
```

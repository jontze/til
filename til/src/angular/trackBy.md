# # NgFor Loops and TrackBy

If you handle large arrays with ngFor and want to edit, remove or add new entries it can impact the performance badly due to expensive DOM manipulations.

To prevent that angular has the possibility to add a `trackBy` function to the ngFor directive. This function has the index and the current item as arguments and should return a unique identifier to track the old item to the new item. This identifier could for example be an unique `id`, `name` or even the position (`index`) in the array.

This will have a positive effect on the performance, since Angular now only has to re-render the changed or added elements and not the whole array.

**Here is an example**

```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Permission</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let user of allUsers; trackBy: identifyByName">
      <td>user.name</td>
      <td>user.permission</td>
    </tr>
  </tbody>
</table>
```

```ts
identifyByName(index: number, item: User): string {
  return item.name
}
```

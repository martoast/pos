# pos

> My impeccable Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

TODO LIST
[X] Create NUXT App
[X] set up default layout page
[X] In the default layout, Add Routing drawer
[X] Create a page component for every food category
[X] Enable routing to pages using drawer in layout
[X] The Menu Page components render the default layout
[] In each Menu component, create a JSON object of each food. (food,price,ID)
[X] Add a new navigation drawer to the default layout
[X] Use new drawer to route to a new page called Settings
[X] Create settings folder that will contain all the settings pages
[X] Create each settings page
[X] Create new layout called Settings following the XD model for the settings page
[X] Ability to route to each page
[X] Make page forms following the XD model
[X] In Settings/Users, the user should click the card and be routed to a dynamic page of User/\_id
[X] Order Queue layout with routing on the 3 tabs
[X] use a card for each order and have a button on it to route to it's details
[X] receibt preview card on right navigation drawer
[X]Create rigth nevigation drawer to use to receipt
[X] add card and from to the right drawer
[X] emitt and event from the food menu when an item is clicked
[X] v-model the total amount in the layout from the emitted event

IM trying to emmit a single object which contains the item and its modifiers and a new data property Total which is the sum
of the

[{
id: item.id,
name: item.name,
price: item.price,
FoodModifiers: [{
id: modifier.id,
name: modifier.name,
price: modifier.price
}]
}]

for item in items {
for modifier in item.FoodModifiers {
return item.price +
}
}

right now im emmiting 2 objects and then concatinating the 2 lists in MainReceibt
thats why I get them showing up as all the items first

have 2 different states in the store, one with everything and another of just the object that will be sent to the receipt

the food component sets the baseitem and the ItemAddOn component pushes the selected modifiers to an array and then we set that array in the store for FoodModifiers.

The ItemAddOn Component emmits an array of the selected modifiers, However the Food Component listening to that is setting the data
in a in the created lifcycle and therefore it is not receiving the modifiers array

gonna switch back to having the checkout button be the switch for a modal

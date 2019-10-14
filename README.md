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

I need to find a way to emmit the item.price or item.name from MenuItems

The way im imagining it is that the default layout will have 4 things: the top tool bar, 2 left navbars for navigation
and 1 permanent right nav bar with a card on it being updated from the menu components

@click.stop="dialog = true"

to put the drawer on the modal I would need to make the modal its own component so that it can render it's own layout with
the fixed drawer

What is the out put and what is the input???

What im trying to do is handle the sum of the modifiers added to the item seperatly

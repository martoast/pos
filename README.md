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

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

TODO LIST
[X] Create Settings page
[X] find vue template to use for settings
[] add dashboard
[] integrate the free vue dashboard in vuetify
[] search bar autocompleted for each page

trying to figure out if I should be creating a seperate page component for each of the settings
OR
should I conditionally render a card that is updated by a computed property

Think I should have a seperate page for each because they dont share the same form.

use the keword "multiple" on the food menu if you want to select more than 1 item. It returns a boolian

How do I do it with components intead of a bunch of pages?

In the layout, instead of navigating :to a page

we can have an v-on click so that when the item list in the navigation drawer is clicked,
it updates a boolian property in the state of that component

that way when the switch if off, the component doesnt render and when it's ON
the component renders.

Only one can be ON at a time

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
[] In Settings/Users, the user should click the card and be routed to a dynamic page of User/\_id
[] receibt preview card on right navigation drawer?
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

\*\*Check the react code that the dude made me a collaborator of on github

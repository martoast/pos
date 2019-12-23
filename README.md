# pos

> This project is an MVP for a POS SAAS

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

I want to have a state with an empty email and empty menuitems array

when the user account is created, mutate the state so email is set

in MenuConfig make a getter get the value of email to use to set Menu in DB

cant edit items
menu wont load on initial hard refresh
edit modal in menuconfig table loads first and last item in MENUITEMS

if I add a drinks food type to a created item, the Food type wont show on register Food menu view

the reason why the modal is not working is because it is currently in a v-for in MENUITEMS which means it is
creatign a modal for each item in MENUITEMS. I need to have the modal outside of the v-for of the data table,

BUT how do I access that data of the object that was clicked on in the table?

I think I need to vmodel into local data properties that are getting that items data

Create a getter that will take in the item ID as dependancy and use it to filter through the MenuITems array and only return the object that contains that ID

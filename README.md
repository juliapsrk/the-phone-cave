# The Phone Cave

## Client

### Pages

- Home - / - Display list of phones + single phone model details (as component)

### Services

- listPhones - issue GET to '/phone/list' list phones
- loadPhone - issue a GET to '/phone/:id' Load details on a single phone

<!-- Additionally:

- editPhone - issues PATCH to '/phone/:id' - Edit single phone
- deletePhone - issues DELETE to '/phone:/id' Delete single phone
- createPhone - issues POST to '/phone' Creates single phone
- phoneSearch - issues GET to '/phone/search' - Allows user to search for phones -->

## Server

### Models

<!-- Phone

- name: String, required
- manufacturer: String, required
- description: String, required
- color: String, required
- price: Number, min 0, required
- imageFileName: String, required
- screen: String, required
- processor: String, required
- ram: Number, min: 0, required -->

### Request Handlers

- GET - '/phones' - displays all phones (use phones.json as datasource)
- GET - '/phones/:id' - displays single phone's details

## Wishlist

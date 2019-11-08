# Wishapedia

![Team name and logo](https://res.cloudinary.com/du4z2ezqn/image/upload/v1573167209/20191107_164805_zysckp.jpg)

## Project Description
Are you tired of getting socks, snuggies or gift cards during the holidays or your birthday?  Wishapedia is your go-to app to make a wish list for your special occasion.  You can build a wish list and give grandma a link to your favorite items on your favorite e-commerce websites.

Wishapedia is a full CRUD app with Authentication.  Registered users can create a wish list, add items to your wish list, update items in your with list and delete items from your wish list.  You can then share this list to your friends and family who can only view your wish list.

## Feature List 

###MVP
* User Auth(Login/Register)
* User creates a Wishlist
* User adds items to wishlist
* User deletes items from wishlist
* User Edits items on wishlist
* Homepage which lists HOT items 

###Post-MVP:
* Animations
* Mobile Friendly
* User can add more Wishlists
* User can change background color/image of wishlist page
* User can move items from one wishlist to another

## Entity Relationship Diagram

![Wishapedia ERD](https://res.cloudinary.com/du4z2ezqn/image/upload/v1573179390/Wishapedia-ERD_wrrcsm.png)

##API Endpoint Documentation

|Endpoint|Purpose|
|---|---|
|/users|for User - Read Index and Create|
|/users/:userId|for User - Read Show, Update, and Delete|
|/users/:userId/wishlists|for Wishlist- Read Index and Create |
|/users/:userId/wishlists/:wishlistId|for Wishlist - Read Show, Update, and Delete |
|/users/:userId/wishlists/:wishlistId/items|for Item - Read Index and Create |
|/users/:userId/wishlists/:wishlistId/items/:itemId|for Item - Read Show, Update, and Delete |

## Wireframes

### Landing Page
![Wishapedia landing page](https://res.cloudinary.com/du4z2ezqn/image/upload/v1573179349/landing_page_qc0pln.png)

### Main Page
![Wishapedia main page](https://res.cloudinary.com/du4z2ezqn/image/upload/v1573179349/main_page_sekobm.png)


## Component Heirarchy

```
<App>
  <Header>
  <Main>
    <registerFom>
    <loginForm>
    <userPage>
      <wishLIst>
        <createWishList>
        <updateWishList>
        <deleteWishlist>
      <items>
        <createItems>
        <updateItems>
        <deleteItems>
  <Footer>
```


## Dependencies

### Front-End Dependencies
* React
* Axios
* React-Router

###Back-End Dependencies
* Express
* Express-Router
* NPM
* Nodemon
* Sequelize
* Cors
* Body-Parser
* pg
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

![Wishapedia ERD](https://res.cloudinary.com/du4z2ezqn/image/upload/v1573774762/wishapedia-ERD-v2_isaewu.png)

## API Endpoint Documentation

|Endpoint|Purpose|
|---|---|
|/auth/register|for User registration|
|/auth/login|for User login|
|/auth/verify|for User verify|
|/wishlists|for Wishlist- Read Index and Create |
|/wishlists/:wishlistId|for Wishlist - Read Show, Update, and Delete |
|/wishlists/:wishlistId/items|for Item - Read Index and Create |
|/wishlists/:wishlistId/items/:itemId|for Item - Read Show, Update, and Delete |

## Wireframes

### Landing Page
![Wishapedia landing page](https://res.cloudinary.com/du4z2ezqn/image/upload/v1573179349/landing_page_qc0pln.png)

### Main Page
![Wishapedia main page](https://res.cloudinary.com/du4z2ezqn/image/upload/v1573179349/main_page_sekobm.png)


## Component Heirarchy

```
<App>
  <Main>
    <RegisterFom>
    <LoginForm>
      <WishlistContainer>
        <WishlistList>
        <CreateWishlist>
        <UpdateWishlist>
        <SingleWishlist>
      <ItemContainer>
        <ItemList>
        <CreateItem>
        <UpdateItem>
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
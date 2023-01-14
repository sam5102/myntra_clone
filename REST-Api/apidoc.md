# api for all product categories
> http://localhost:9500/categories

# api for all products list
> http://localhost:9500/products

`
* Page 2
# product data wrt to product category
> http://localhost:9500/products?categoryId=Gadgets

# filter on basis of category + brand
> http://localhost:9500/products/Fashion?brand=Roadster

//# filter on basis of category + price

# filter on basis of category + size
> http://localhost:9500/products/HouseHold?size=Onesize

# filter on basis of category + size + color
> http://localhost:9500/products/Fashion?size=L&color=Grey

//# filter on basis of category + product rating

* Page 3
# Details of the product
> http://localhost:9500/product_details/2

# Add product to wishlist
> http://localhost:9500/addToWishlist

# List of wishlist products
> http://localhost:9500/myWishList/charu23@gmail.com

# Place Order
> http://localhost:9500/placeOrder

* Page 4
# List of all orders
> http://localhost:9500/viewOrder

# List of all orders wrt to mail
> http://localhost:9500/viewOrder?email=sam@gmail.com

# Update the order
> http://localhost:9500/updateOrder/1

# Delete the order
> http://localhost:9500/deleteOrder/63c15521ad5746bd90cb176f
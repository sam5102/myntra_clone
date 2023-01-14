db.category.insert(
      [
      {
        "id": 1,
        "category": "Fashion",
        "rating": "4.5"
      },
      {
        "id": 2,
        "category": "Body Care",
        "rating": "3.5"
      },
      {
        "id": 3,
        "category": "HouseHold",
        "rating": "3.0"
      },
      {
        "id": 4,
        "category": "Decoration & Lighting",
        "rating": "2.5"
      },
      {
        "id": 5,
        "category": "Gadgets",
        "rating": "2.5"
      }
    ]
  )

  //for query api
  db.collection.find({category: "Gadgets"})
  db.collection.find({category: "Gadgets", product_rating:"4.6"})

  //mongodb+srv://test:test123@cluster0.lofuhf0.mongodb.net/?retryWrites=true&w=majority
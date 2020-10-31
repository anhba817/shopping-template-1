const sideMenuItems = [
  {
    label: "Fruits & Vegetables",
    value: 'fruits-and-vegetables',
    children: [
      { label: "Fruits", value: "fruits" },
      { label: "Vegetables", value: "vegetables"},
    ],
  },
  {
    label: "Meat & Fish",
    value: 'meat-and-fish',
    children: [
      { label: "Fresh Fish", value: "fish"},
      { label: "Meat", value: "meat"},
    ],
  },
  {
    label: "Snacks",
    value: 'snacks',
    children: [
      { label: "Biscuits", value: "biscuits"},
      { label: "Chocolates", value: "chocolates"},
      { label: "Crisps", value: "crisps"},
      { label: "Noodles", value: "noodles"},
      { label: "Nuts", value: "nuts"},
      { label: "Pasta", value: "pasta"},
      { label: "Sauce", value: "sauce"},
      { label: "Soup", value: "soup"},
    ],
  },
  {
    label: "Pet Care",
    value: 'pet-care',
    children: [
      { label: "Cat Food", value: "cat_food"},
      { label: "Dog Food", value: "dog_food"},
      { label: "Kitten Food", value: "kitten_food"},
      { label: "Pet Accessories", value: "pet_accessories"},
    ],
  },
  {
    label: "Dairy",
    value: 'dairy',
    children: [
      { label: "Butter", value: "butter"},
      { label: "Egg", value: "egg"},
      { label: "Milk", value: "milk"},
      { label: "Milk Cream", value: "milk_cream"},
      { label: "Powder Milk", value: "powder_milk"},
      { label: "Yogourt", value: "yogourt"},
    ],
  },
  {
    label: "Home Cleaning",
    value: 'home-cleaning',
    children: [
      { label: "Air Fresher", value: "air_fresher"},
      { label: "Cleaning Products", value: "cleaning_product"},
      { label: "Dishwasher", value: "dishwasher"},
      { label: "Kitchen Accessories", value: "kitchen_accessories"},
      { label: "Laundry", value: "laundry"},
      { label: "Pest Control", value: "pest_control"},
    ],
  },
  {
    label: "Cooking",
    value: 'cooking',
    children: [
      { label: "Oil", value: "oil"},
      { label: "Rice", value: "rice"},
      { label: "Salt & Sugar", value: "salt_and_sugar"},
      { label: "Spices", value: "spices"},
    ],
  },
  {
    label: "Breakfast",
    value: 'breakfast',
    children: [
      { label: "Bread", value: "bread"},
      { label: "Cereal", value: "cereal"},
      { label: "Honey", value: "honey"},
      { label: "Mayonnaise", value: "mayonnaise"},
      { label: "Jam", value: "jam"},
      { label: "Oats", value: "oats"},
    ],
  },
];

export {
  sideMenuItems,
}
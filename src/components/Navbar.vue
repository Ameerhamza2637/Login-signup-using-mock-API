<template>
    <nav class="navbar">
      <div class="navbar-left">
        <h1>{{ title }}</h1>
      </div>
      <div class="navbar-right">
      <select v-model="selectedCategory">
        <option value="">All Products</option>
        <option value="">Smart Phones</option>
        <option value="">Laptop</option>
        <option value="">Fragrances</option>
        <option value="">Skin Care</option>
        <option value="">Groceries</option>
        <option value="">Home Decoration</option>
        <option value="">Furniture</option>
        <option value="">Tops</option>
        <option value="">womens-dresses</option>
        <option value="">womens-shoes</option>
        <option value="">mens-shirts</option>
        <option value="">mens-shoes</option>
        <option value="">mens-watches</option>
        <option value="">womens-watches</option>
        <option value="">womens-bags</option>
        <option value="">womens-jewellery</option>
        <option value="">sunglasses</option>
        <option value="">automotive</option>
        <option value="">motorcycle</option>
        <option value="">lighting</option>
        <option v-for="category in categories" :key="category.id" :value="category.name">{{ category.name }}</option>
      </select>
    </div>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      categories: Array
    },
    data()
    {
        return {
        selectedCategory: '', // Store the selected category here
    };
  },
  };
  </script>
  
  <style scoped>
 /* Navbar styles for larger screens */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #000000;
  color: #fff;
}

.navbar h1 {
  font-size: 24px;
  margin: 0;
}

.navbar select {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
}

/* Navbar styles for smaller screens (e.g., mobile) */
@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px; /* Adjust padding as needed for mobile layout */
  }

  .navbar h1 {
    font-size: 20px; /* Reduce font size for smaller screens */
    margin-bottom: 10px; /* Add space below title */
  }

  .navbar select {
    width: 100%; /* Make the dropdown full-width */
    margin-top: 10px; /* Add space above the dropdown */
  }
}

  </style>
  
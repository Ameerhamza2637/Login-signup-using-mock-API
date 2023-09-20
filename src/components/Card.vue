<template>
    <div class="card">
      <div class="card-details">
        <center><p style="background-color: rgb(184, 71, 71); color: rgb(255, 255, 255);">{{ id }}</p></center>
            <h3>{{ title }}</h3>
            <img :src="thumbnail" :alt="productimages">
            <p>{{ description }}</p>
            <p>price: {{ price }} $</p>
            <p>discount: {{ discountPercentage }}%</p>
            <p>Rating: {{ rating }}</p>
            <p>Stock: {{ stock }}</p>
            <p>Brand: {{ brand }}</p>
            <p>Category: {{ category }}</p>
      </div>
      <div class="card-actions">
        <button @click="del">Delete</button>
      </div>
    </div>
</template>
  
<script>

export default
{
    props: {
    id:Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category:String,
    thumbnail :Image
  },
  name: "Card",

methods: {
    del() {
      // Use JavaScript to hide the card by setting its display style to "none"
      const card = this.$el; // Get the DOM element of the card
      card.style.display = "none";
    }
  }
};
  </script>
  
  <style scoped>
  .card {
    width: 300px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    background-color: #fff;
  }
  
  .card img {
    width: 100%;
    max-height: 200px;
  }
  
  .card h3 {
    font-size: 18px;
    margin: 10px 0;
  }
  
  .card p {
    font-size: 14px;
    color: #666;
  }
  
  .card-actions {
    text-align: right;
    margin-top: 10px;
  }
  
  button {
    background-color: #f00;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  
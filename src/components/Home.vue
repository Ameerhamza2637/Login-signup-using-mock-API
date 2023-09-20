<template>
    <div>
        <Navbar :title="websiteTitle" :categories="categories" @categoryChanged="onCategoryChanged" />
        <div class="card-container">
        <Card v-for="product in fetch.products" 
            :id="product.id" 
            :title="product.title" 
            :description="product.description" 
            :price="product.price" 
            :discountPercentage="product.discountPercentage" 
            :thumbnail="product.thumbnail" 
            :rating ="product.rating " 
            :stock="product.stock" 
            :brand="product.brand" 
            :category="product.category" 
            :key="product.id"/>
        </div>
        <div class="action-buttons">
            <button>Add Product</button>
            <button style="background-color: rgb(41, 233, 41);">Update Product</button>
            <button style="background-color: rgb(255, 25, 25);">Delete Product</button>
        </div>
        
  </div>
</template>
  
<script>
  import Navbar from "@/components/Navbar.vue"; // Import the Navbar component
  import Card from "@/components/Card.vue"
  
  export default
  {
    components:
    {
      Navbar, // Register the Navbar component
      Card
    },
    data()
    {
      return {
        websiteTitle: "Programmer Bazar",
        fetch: [],
        selectedCategory: "",
        };
    },
//     computed: {
//     categories() {
//       // Extract unique categories from products
//       if (this.fetch && this.fetch.products) {
//       // Extract unique categories from products
//       const uniqueCategories = Array.from(
//         new Set(this.fetch.products.map((product) => product.category))
//       );
//       return ["All Products", ...uniqueCategories];
//     }
//       return ["All Products"];
//     },
//     filteredProducts() {
//       // Filter products based on selected category
//       if (this.selectedCategory === "All Products") {
//         return this.fetch.products;
//       } else {
//         return this.fetch.products.filter(
//           (product) => product.category === this.selectedCategory
//         );
//       }
//     },
//   },
    mounted()
    {
        // Fetch products when the component is mounted
        this.fetchProducts();
    },
    methods:
    {
        async fetchProducts()
        {
            try 
            {
                const response = await fetch('https://dummyjson.com/products')
                if (!response.ok) {
                // Handle non-2xx HTTP response status codes here
                console.error('HTTP error:', response.status);
            }

            const data = await response.json();
            this.fetch=data;
            console.log(this.fetch.products);
            // Handle the response data as needed
            } catch (error)
            {
                // Handle other types of errors, e.g., network issues
                console.error('Error:', error);
            }
        },
        onCategoryChanged(newCategory) {
      this.selectedCategory = newCategory;
    },
    }
};
</script>
  
<style scoped>
h1
{
  font-size: 24px;
}

select
{
    padding: 5px;
}

.card-container
{
    display: flex;
    flex-wrap: wrap;
    
}

.action-buttons
{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
}

button
{
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
}
</style>
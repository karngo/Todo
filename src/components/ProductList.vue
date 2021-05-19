<template>
     <div id="product-list">
        <h2>This is the product list</h2>
        <ul>
            <li v-for="product in products" :key="product.name">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>
        <ul>
            <li v-for="product in saleList" :key="product.name">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>

        <button class='red' @click="lowerPrice">Lower Price</button>
    </div>
</template>
<script>
export default {
    name: 'ProductList',
    computed: {
        products(){
            return this.$store.state.productList
        },
        saleList(){
            return this.$store.getters.saleProducts
        }
    },
    methods: {
        lowerPrice(){
            this.$store.dispatch('priceReducer')
        }
    }
    
}
</script>
<style scoped>
#product-list{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>>
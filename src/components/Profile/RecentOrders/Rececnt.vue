<template>
<div  >
    <h2 class="ml-7 mb-6" >Recent Orders:</h2>
    <v-row justify="start" class="mx-5" >
        <v-col cols="3" v-for="i in this.UserOrders.UserOrders " :key="i.data().Productid" >
            <Card :data="i.data()"  />
        </v-col>
    </v-row>
</div>
</template>

<script>
import Card from "./OrderCard"
import {mapState, mapActions} from "vuex"
export default {
    components:{
        Card
    },
    computed:{
        ...mapState(["UserOrders"])
    },
    async mounted(){
        await this.GetUserOrders()
        console.log("end")
        console.log(this.UserOrders.UserOrders[0].data())
    },
    methods:{
        ...mapActions(["GetUserOrders"])
    }

}
</script>

<style>

</style>
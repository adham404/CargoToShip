<template>
<div>
    <v-data-table
    :headers="OrderHeaders"
    :items="OrderData"
    @click:row="ShowMyOrder"
    ></v-data-table>
        <v-dialog v-model="dialog" max-width="600px" transition="dialog-bottom-transition">
        <v-card>
        <v-text>Your Order {{OrderObj.OrderName}} Details are: </v-text>
        <v-card-actions class="justify-end">
            <v-btn
            text
            @click="dialog=!dialog"
            >Close</v-btn>
            <v-btn
            text
            >Buy</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</div>

</template>

<script>
export default {
    data()
    {
        return{
            OrderHeaders:[
            {
                text:"Type",
                align: 'start',
                value:"OrderType" 
            },
            {
                text:"Name/Description",
                value:"OrderName",                 
            },
            {
                text:"ContactInfo",
                value:"ContactInfo" 
            },
            {
                text:"Expiry",
                value:"Expired" 
            },
            {
                text:"Order Date",
                value:"OrderDate" 
            } 
            ],
            OrderData:[
            {
                OrderType:"Cargo",
                OrderName:"X",
                ContactInfo:"01+xxxxxxxx",
                Expired:false,
                OrderDate:"DD-MM-YYYY"
            },
            {
                OrderType:"Ship",
                OrderName:"Y",
                ContactInfo:"01+xxxxxxxx",
                Expired:true,
                OrderDate:"DD-MM-YYYY"
            },

            ],
            dialog:true,
            OrderObj:""
        }
    },
    methods:{
        ShowMyOrder(value)
        {
            this.dialog = true
            this.OrderObj = value
        }
    }
}
</script>

<style>

</style>
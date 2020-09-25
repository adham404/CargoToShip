<template>
    <div id="contaner">

            <div id="fff" >
                <div id="flex">
                    <creditcardinputdata v-if="show"></creditcardinputdata>
                </div>
            </div>



    </div>
</template>

<script>
    import creditcardinputdata from "./creditcardinputdata";
    import firebase from 'firebase' ;
    export default {
        components: {
            creditcardinputdata,
            

        },
        name: "confirmorder",
        data(){
            return {
                show : true,

                idata : {
                    name : null,
                    email : null,
                    addres : null,
                    country : null,
                    city : null,
                    zipcode : null,
                    cardname : null,
                    cardnumber : null,
                    cardexpdate : null ,
                    cardcvv : null ,
                    termsandcond : null,
                },
                orderid : 41814841841,
                objectid : "841848441",
                userid : 844848484,

            }
    },
        methods: {
            sendnow() {

                firebase.database().ref('Orders/' + this.orderid ).set({
                    OrderID: this.orderid,
                    ObjectID :this.objectid,
                    UserID :this.userid,

                });

                 }
        }
    }
</script>

<style scoped >
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


    #555{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
    }

    #confirmorder1{

        cursor: pointer;
        /*!*margin-top: 2vw;*!*/
        font-weight: bold;
        font-size: 1.2vw;
        background-color: #039be5;
        border-radius: 2vw;
        padding: 0.4vw 1vw 0.4vw 1vw;
        text-align: center;
        width: 11vw;
        margin-left: 70%;
        margin-right: 0;


    }
    .paymenttext{
        text-decoration: none;
        color: black;
    }
    a{
        text-decoration: none;
    }
    #contaner{
        /*position: absolute;*/
        display: flex;
        flex-direction: column;
        font-family: Roboto ;
        width: 77vw;
        height: 40.4vw;
        background-color: #ECEFF1;
        margin: auto;
        border-radius: 2vw;
        box-shadow: 0px 3px 6px rgba(0,0,0,16%);

    }
    .paymenttype{
        display: flex;
        justify-content: center;
    }
    .paymentmathed{
        cursor: pointer;
        font-size: 1.3vw;
        border: lightgray 0.1vw solid;
        box-shadow: 0vw 0.2vw 0.4vw rgba(0,0,0,16%) ;
        border-radius: 1vw;
        width: 8vw;
        text-align: center;
        height: 5vw;
        margin-right: 2vw;

        margin-top: 2vw;
    }
    .paymentlogo{
        width: 2.1vw;
        margin-top: 0.4vw;
    }
    #flex{
        display: flex;

        justify-content: space-evenly;
        padding: 2vw 4vw 0vw 4vw ;

    }
    #abs{
        position: absolute;
    }
    #finalcard{
        padding-right: 0;
        margin-right:0 ;
        border-right: none;
    }
    .card{
        width: 23vw ;
        padding-right: 1vw ;
        margin-right: 1vw;
        border-right: black solid 1px ;
    }


</style>
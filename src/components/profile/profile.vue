<template>
    <div id="contaner" class="profilecontaner">
        <div id="profileheader" ><img src="@/assets/1071625.png"> <div>{{user.name}}</div></div>
        <div class="profiledata">
            <div id="userdata">
                <div class="userdetails" >
                    <div class="userdataheader">Email: </div>
                    <div class="userdatatext"> {{user.email}}</div>
                    <img v-on:click="edit('email')" class="userdataedit" src="@/assets/editicon.svg">
                </div>
                <div class="userdetails" >
                    <div class="userdataheader">Phone:</div>
                    <div class="userdatatext"> {{user.phone}}</div>
                    <img v-on:click="edit('phone')" class="userdataedit" src="@/assets/editicon.svg">
                </div>
                <div class="userdetails" >
                    <div class="userdataheader">Country:</div>
                    <div class="userdatatext"> {{user.country}}</div>
                    <img v-on:click="edit('country')" class="userdataedit" src="@/assets/editicon.svg">
                </div>
                <div v-on:click="edit('password')" id="changepassword" >Change Password</div>
            </div>
            <div id="cridetcardinfo" >
                <div class="cridetcardinfocontaner" >
                    <img id="cridetcardlogo"  src="@/assets/creditcardicon.svg">
                    <div class="userdataheader">Credit Card Info: </div>

                </div>
                <div id="cridetcardflex">
                    <div>
                        <div class="carddatatext">
                            <div class="userdataheader">Card Name:</div>
                            <div class="userdatatext"> {{user.cardname}}</div>
                        </div>
                        <div class="carddatatext">
                            <div class="userdataheader">Card Number:</div>
                            <div class="userdatatext"> {{user.cardnumber}}</div>
                        </div>
                    </div>

                    <img id="deleticon" src="@/assets/romoveicon.svg">
                </div>
                <div id="addnewcard">
                    <img src="@/assets/plus.svg">
                    <div>Add New Card</div>
                </div>

            </div>
            <div id="editdata" v-if="editdata.edit" >
                <div class="editdatafilde">
                    <div class="edittitle" >Enter Password</div>
                    <input type="password" value="password" v-model="editdata.password">
                </div>
                <div class="editdatafilde">
                    <div class="edittitle">Enter New {{editdata.change}}</div>
                    <input :type="editdata.datatype" >
                </div>
                <div id="saveedit" v-on:click="save"  > Save</div>
            </div>
        </div>
        <div id="recentorders">
            <div id="recentordertitle">Recent Order:</div>
            <div id="recentordersview" >
                <div class="order" >
                    <div id="orderheader" >
                        <img src="@/assets/shipicon.svg">
                        <div>Ship Name</div>
                    </div>
                    <hr>
                    <div id="ordercontanct" >
                        <div>Phone: 010000000</div>
                        <div>Email: email@example.com</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "profile",
        data:()=>{
            return{
                user : {
                    name : 'john Smith',
                    email : 'email@example.com',
                    phone : '0100000000',
                    country : 'egypt',
                    cardnumber : 'xxxxxxxxxxxx45454',
                    cardname : 'john visa'

                },
                editdata :{
                    password : null ,
                    change : null,
                    newvalue : null,
                    datatype : null,
                    edit : false ,
                }
            }
        },
        methods :{
            edit(p){
               this.editdata.change = p ;
               this.editdata.edit = true;
               if(p == 'country'){
                   this.editdata.datatype = 'text';

               }else if(p == 'phone'){
                   this.editdata.datatype = 'number';
               }
               else {
                   this.editdata.datatype = p ;
               }
            },
            save(){
                this.editdata.edit = false ;
            }
        }
    }
</script>

<style scoped>
    hr{
        margin: 0;
        padding: 0;
        border-top: 0.1vw black solid;
    }
    #contaner{
        font-family: Roboto ;
        width: 77vw;
        height: 40.4vw;
        background-color: #ECEFF1;
        margin: auto;
        border-radius: 3vw;
        box-shadow: 0px 3px 6px rgba(0,0,0,16%);

    }
    #deleticon{
        width: 1.8vw;
        cursor: pointer;
    }
    #ordercontanct{
        margin-left: 2vw;
        font-size: 1w;
        margin-top: 1.2vw;
    }
    #ordercontanct div{
        margin-bottom: 1.2vw;
        font-size: 1vw;
        padding: 0;
        margin-top: 0;
    }
    #recentordertitle{
        font-size: 1.4vw;
        margin-left: 1.5vw;
        margin-top: 1vw;
    }
    #recentordersview{
        margin-left: 2vw;
        margin-top: 1vw;
    }
    .order{
        width: 22vw;
        box-shadow: rgba(0,0,0,16%) 0px 3px 6px;
        border-radius: 2vw;
        height: 11vw;
        margin-left: 1.5vw;
    }
    #orderheader{
        display: flex;
        align-items: center;
        font-size: 1.3vw;
    }
    #orderheader img{
        margin-left: 1vw;
        margin-right: 1vw;
        width: 1.6vw;
    }
    #editdata{
        display: flex;
        flex-direction: column;
        margin-left: 2vw;
        margin-top: 2vw;
        width: 22vw;
        box-shadow: rgba(0,0,0,16%) 0px 3px 6px;
        align-items: center;
        justify-content: center;
        border-radius: 3vw;

    }
    .editdatafilde{
        margin-bottom: 1.5vw;
    }
    .editdatafilde div{
        font-size: 1.2vw;
    }
    .editdatafilde input{
        width: 15w;
        border: #707070 1px solid;
        border-radius: 0.7vw;
        box-shadow: rgba(0,0,0,16%) 0px 3px 6px;
        height: 2vw;
        padding-left: 1vw;
    }
    #saveedit{
        border: none;
        background-color:#06457C ;
        font-size: 1.4vw;
        color: #ECEFF1;
        border-radius: 1vw;
        width: 8vw;
        height: 2vw;
        cursor: pointer;
        text-align: center;
        margin-bottom: 1vw;

    }
    .profiledata{
        display: flex;
        justify-content: space-around;

    }
    #profileheader{
        font-size: 1.4vw;
        border-radius: 3vw 3vw 0 0;
        z-index: inherit;
        display: flex;
        align-items: center;
        height: 7vw ;
        background-color: #06457C ;

    }
    #profileheader img{
        height: 5vw;
        margin-left: 1vw;
    }
    #profileheader div{
        color: #ECEFF1;
        margin-left: 2vw;
        font-family: Roboto;


    }
    .userdetails{
        display: flex;
        font-size: 1.2vw;
        margin-bottom: 1.8vw;
        align-items: center;
    }
    .userdataheader{
        font-weight: bold;
        margin-right: 0.5vw;
    }
    #userdata{
        margin-left: 2vw;
        margin-top: 2vw;

    }
    .userdataedit{
        width: 1.1vw;
        cursor: pointer;
    }
    .userdatatext{
        margin-right: 1vw;
        font-size: 1.3vw;
    }
    #changepassword{
        cursor: pointer;
        font-size: 1.2vw;
        background-color: #06457C ;
        color: #ECEFF1;
        width: 14vw;
        border-radius: 2vw;
        text-align: center;
        font-weight: bold;
        height: 2vw;
        padding-top: 0.4vw;
    }
    #cridetcardinfo{
        margin-left: 2vw;
        margin-top: 2vw;
    }
    #cridetcardlogo{
        margin-right: 0.4vw;
        height: 2.5vw;
    }
    .cridetcardinfocontaner{
        display: flex;
        font-size: 1.2vw;
        margin-bottom: 0.5vw;
        align-items: center;
    }
    .carddatatext{
        margin-bottom: 1vw;
        font-size: 1.2vw;
        margin-left: 2.5vw;
        display: flex;


    }
    #cridetcardflex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1vw;
    }
    #addnewcard{
        margin-left: 2vw;
        display: flex;
        text-align: center;
        align-items: center;
        border-radius: 1vw;
        box-shadow: 0vw 0.2vw 0.4vw rgba(0,0,0,16%) ;
        padding: 0.2vw;
        width: 11vw;
        cursor: pointer;

    }
    #addnewcard div{
        font-size: 1.2vw;
    }
    #addnewcard img{
        width: 1.7vw;
        margin: 0.2vw 0.5vw 0.2vw 0.3vw;
    }

</style>
<template>
    <div>
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

                <div v-on:click="edit('password')" id="changepassword" >Change Password</div>
            </div>


            <div id="editdata" v-if="editdata.edit" >
                <div class="editdatafilde">
                    <div class="edittitle" >Enter Password</div>
                    <input type="password" value="password" v-model="editdata.password">
                    <span class="errormass"  v-if="passrequirederor">Required</span>
                </div>
                <div class="editdatafilde">
                    <div class="edittitle">Enter New {{editdata.change}}</div>
                    <input :type="editdata.datatype" v-model="editdata.newvalue"  >
                    <div class="errormass" id="emailerro" v-if="emaileror">Invalid Email</div>
                    <span class="errormass" id="requereror" v-if="requirederor">Required</span>
                </div>
                <button type="submit" id="saveedit" v-on:click="save"  > Save</button>
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
                    <div class="line" id="orderline"></div>
                    <div id="ordercontanct" >
                        <div>Phone: 010000000</div>
                        <div>Email: email@example.com</div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    </div>

</template>

<script>

    import firebase from 'firebase'
    export default {
        name: "profile",
        data:()=>{
            return{
                mycards : null,
                datad : null ,
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
                },
                savechanges : false,
                emaileror :false,
                requirederor : false,
                passrequirederor : false,
                recentordersid : new Array(),

            }
        },
        mounted() {
            let self = this
            let userdata = firebase.auth().currentUser
            self.getcards();
            if (userdata){
                self.user.email = userdata.email
                var userId = firebase.auth().currentUser.uid;
                firebase.database().ref('/Users/' + userId).once('value').then(function(snapshot) {
                    console.log(snapshot.val())
                    self.datad = snapshot.val()
                    self.user.name = `${snapshot.val().FirstName} ${snapshot.val().LastName}`
                    self.user.phone = snapshot.val().Phone
                    // ...
                });
                let orders = firebase.database().ref('/Orders').orderByChild( '/UserID').equalTo(userdata.uid).limitToLast(3)
                orders.once('value').then(function(snapshot){
                    snapshot.forEach(function(child){
                        const post = child.val();
                        self.recentordersid.push(post.ObjectID)
                        console.log(self.recentordersid)

                    })
                    console.log(self.recentordersid)
                    console.log(self.recentordersid.length)
                    let i ;
                    let shipdataoo
                    for ( i=0;i < self.recentordersid.length ;i++){
                        console.log('ppp')
                        if (self.recentordersid[i][0]=='s'){
                            firebase.database().ref('/Ships/' + self.recentordersid[i]).once('value').then(function(snapshot) {
                                console.log(snapshot.val())
                                 shipdataoo = {
                                    type : 'ship',
                                    shipid : snapshot.val().ShipID,
                                    contacts : snapshot.val().ContactInfo
                                }
                            });

                        }else if(self.recentordersid[i][0]=='c'){
                            firebase.database().ref('/Cargo/' + self.recentordersid[i]).once('value').then(function(snapshot) {
                                console.log(snapshot.val())
                                 shipdataoo = {
                                    type : 'Cargo',
                                    shipid : snapshot.val().CargoID,
                                    contacts : snapshot.val().ContactInfo
                                }
                            });

                        }
                    console.log(shipdataoo)


                    }
                });


            }
        },
        methods :{
            async getcards(){
                var user = await  firebase.auth().currentUser;
                if(user){
                    let userId =  await user.uid
                    await firebase.database().ref(`paymentdata/${userId}/paymentmethods/`).once('value').then(async (snapshot)=>{
                            console.log(snapshot.val());
                            this.mycards = await snapshot.val()

                        }
                    )
                }
            },
            edit(p){
                this.editdata.password = '';
                this.editdata.newvalue = '';
                this.requirederor = false;
                this.emaileror =false;
               this.editdata.change = p ;
               this.editdata.edit = true;
               if(p == 'phone'){
                   this.editdata.datatype = "number";
                   this.editdata.newvalue = '';
               }
               else {
                   this.editdata.datatype = p ;
                   this.editdata.newvalue = '';

               }
            },
            save(){
                if (this.editdata.change == 'email'){
                    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if(re.test(this.editdata.newvalue)){
                        this.savechanges = true;
                        this.emaileror = false;
                        this.changeemail()
                    }else {
                        this.emaileror = true ;
                        this.savechanges = false;

                    }



                }else {
                    var dd = this.editdata.newvalue
                    if (dd.length == 0 ){
                        this.requirederor =true;
                    }else {
                        this.savechanges = true;
                    }
                }
                if (this.editdata.password.length <1){
                    this.savechanges =false
                    this.passrequirederor = true
                }else {

                    this.savechanges =true
                    this.passrequirederor = false

                }
                if (this.savechanges){
                    this.editdata.edit=false;
                }
                if (this.editdata.change == 'phone' ){
                    if (dd.length == 0 ){
                        this.requirederor =true;
                    }else {
                        this.savechanges = true;
                        this.changephone()

                    }

                }
                if (this.editdata.change == 'password' ){
                    if (dd.length == 0 ){
                        this.requirederor =true;
                    }else {
                        this.savechanges = true;
                        this.changepassword()

                    }

                }
            },
            changeemail(){
                console.log(this.editdata.newvalue)
                var userId = firebase.auth().currentUser.uid;
                var user = firebase.auth().currentUser;
                var credentials = firebase.auth.EmailAuthProvider.credential(user.email, this.editdata.password);
                user.reauthenticateWithCredential(credentials).then(function () {
                    console.log("re-auth done successfully");
                }).catch(function (e) {
                    console.log(e)
                });
                // firebase.auth().signInWithEmailAndPassword(user.email, this.editdata.password).catch(function(error) {
                //     // Handle Errors here.
                //     console.log(error);
                //     // ...
                // });
                user.updateEmail(this.editdata.newvalue).then(function() {
                    // Update successful.
                    console.log('updated')
                    console.log(user.email)
                    console.log(this.editdata.newvalue)
                }).catch(function(error) {
                    // An error happened.
                    console.log(error)
                });
                firebase.database().ref('Users/' + userId ).update({
                    Email: this.editdata.newvalue,
                });
            },
            changepassword(){
                var user = firebase.auth().currentUser;
                var credentials = firebase.auth.EmailAuthProvider.credential(user.email, this.editdata.password);
                user.reauthenticateWithCredential(credentials).then(function () {
                    console.log("re-auth done successfully");
                }).catch(function (e) {
                    console.log(e)
                });

                user.updatePassword(this.editdata.newvalue).then(function() {
                    // Update successful.
                    console.log('updated')
                }).catch(function(error) {
                    // An error happened.
                    console.log(error)
                });
            },
            changephone(){
                var userId = firebase.auth().currentUser.uid;
                firebase.database().ref('Users/' + userId ).update({
                    Phone: this.editdata.newvalue,

                });

            },

        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Quicksand&family=Raleway&display=swap');
    #cardscontaner{
        height: 11vw;
        overflow: auto;
        box-shadow: 0px 3px 6px rgba(0,0,0,16%);
        padding: 0.5vw ;
        border-radius: 0.5vw;
    }
    .lineb{
        border-bottom: 0.1vw #707070 solid;
    }
    .line{
        border-bottom: 0.1vw black solid;
        margin-top: 0.3vw;
    }
    .errormass{
        font-size: 1vw;
        color: red;
        margin-right: 8vw;
    }
    hr{
        margin: 0;
        padding: 0;
        border-top: 0.1vw black solid;
    }
    #contaner{
        font-family: Roboto ;
        width: 100%;
        height: 100%;
        background-color: #ECEFF1;
        margin: auto;
        border-radius: 1vw;
        box-shadow: 0px 3px 6px rgba(0,0,0,16%);
        position: relative;

    }
    #deleticon{
        width: 1.8vw;
        cursor: pointer;
        margin-right: 1vw;
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
        font-weight: bold;
        margin-left: 1.5vw;
        margin-top: 1vw;
        font-family: 'Raleway', sans-serif;
    }
    #recentorders{
        margin-top: 2vw;
        padding-bottom: 3vw;
     }
    #recentordersview{
        margin-left: 2vw;
        margin-top: 1vw;
    }
    .order{
        width: 22.2vw;
        box-shadow: rgba(0,0,0,16%) 0px 3px 6px;
        border-radius: 1.5vw;
        height: 11.3vw;
        margin-left: 1.5vw;
    }
    #orderheader{
        padding-top: 0.5vw;
        display: flex;
        align-items: center;
        font-size: 1.3vw;
        font-family: 'Raleway', sans-serif;
    }
    #ordercontanct{
        font-family: "Roboto", sans-serif;
        margin-top: 1.7vw;
    }
    #orderline{
        margin-top: 0.5vw;
        border-bottom: 0.01vw #D3CDCD solid;
    }
    #ordercontanct div{
        margin-bottom: 1.6vw;
    }
    #orderheader img{
        margin-left: 1vw;
        margin-right: 1vw;
        width: 1.6vw;
    }
    #editdata{
        display: flex;
        flex-direction: column;
       align-items: center;
        height: 13vw;
        margin-left: 30vw;
        width: 22vw;
        box-shadow: rgba(0,0,0,16%) 0px 3px 6px;
        border-radius: 1.7vw;

    }
    .editdatafilde{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 4.5vw;
        margin-bottom: 0.5vw;
    }
    .editdatafilde div{
        font-size: 1.2vw;
    }
    .editdatafilde input{
        outline: none;
        width: 19vw;
        font-size: 1.1vw;
        border: #707070 0.1vw solid;
        border-radius: 0.7vw;
        box-shadow: rgba(0,0,0,16%) 0px 3px 6px;
        height: 2.2vw;
        padding-left: 1vw;
    }
    #saveedit{
        outline: none;
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
        justify-content: start;

    }
    #profileheader{
        font-family: 'Montserrat', sans-serif;
        font-size: 1.4vw;
        border-radius: 1vw 1vw 0 0;
        z-index: inherit;
        display: flex;
        align-items: center;
        height: 7.1vw ;
        background-color: #0E153A ;
        margin-bottom: 2vw;

    }
    #profileheader img{
        height: 5vw;
        margin-left: 1vw;
    }
    #profileheader div{
        color: #ECEFF1;
        margin-left: 2vw;
        font-family: 'Montserrat', sans-serif;


    }
    .userdetails{
        display: flex;
        font-size: 1vw;
        margin-bottom: 1.8vw;
        align-items: center;
        font-family: 'Quicksand', sans-serif;
    }
    .userdataheader{
        font-size: 1.25vw;
        margin-right: 0.5vw;
    }
    #userdata{
        margin-left: 8vw;

    }
    .userdataedit{
        width: 1.1vw;
        cursor: pointer;
    }
    .userdatatext{
        font-size: 1vw;
        margin-right: 1vw;
    }
    #changepassword{
        cursor: pointer;
        font-size: 1.1vw;
        font-family: 'Raleway', sans-serif;
        background-color: #0E153A ;
        color: #ECEFF1;
        font-weight: bolder;
        width: 12.6vw;
        border-radius: 2vw;
        text-align: center;
        height: 2.1vw;
        padding-top: 0.4vw;
        margin-top: 5vw;
    }
    #cridetcardinfo{
        margin-left: 8vw;
        width: 30vw;
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
        margin-bottom: 0.1vw;
        font-size: 1.2vw;
        margin-left: 2.5vw;
        display: flex;


    }
    #cridetcardflex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1vw;
        border-radius: 0.5vw;
        box-shadow: rgba(0,0,0,16%) 0px 3px 6px;
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
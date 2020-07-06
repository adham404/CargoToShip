<template>
    <div id="contaner">
        <button class="buttoncontrol" v-on:click="signupnewuser">signin</button><br>
        <button class="buttoncontrol" v-on:click="signinnewuser">login</button><br>
        <button class="buttoncontrol" v-on:click="getuserdata">getdata</button><br>
        <button class="buttoncontrol" v-on:click="addship">addship</button><br>
        <button class="buttoncontrol" v-on:click="addcargo">addcargo</button><br>
        <button class="buttoncontrol" v-on:click="signout">logout</button><br>
        <button class="buttoncontrol" v-on:click="whatisthedate">date</button><br>
    </div>
</template>

<script>
    import firebase from 'firebase' ;
    export default {
        name: "control",
        methods:{
            signupnewuser(){
                let email = 'user4@cargotoship.com';
                let password = '123456789'
                let phone = '0020100100100'
                let firstname = 'Marwan'
                let lastname = 'Mohamed'
                firebase.auth().createUserWithEmailAndPassword(email, password ).then(function(res) {
                    try {
                        console.log(res.user.uid);
                        firebase.database().ref('Users/' + res.user.uid).set({
                            UserID : res.user.uid,
                            FirstName : firstname,
                            LastName : lastname,
                            Email : email,
                            Phone : phone,
                            DateOfLogin : new Date().toString(),

                        })
                        alert('signup done')

                    }catch (e) {
                        console.log(e)
                    }

                    // ...
                });

            },
            signinnewuser(){
                let email = 'user4@cargotoship.com';
                let password = '123456789'
                firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                    // Handle Errors here.
                    console.log(error);
                    // ...
                });
                alert('signin done sucssful');
            },
            getuserdata(){
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                        console.log(user)
                    } else {
                        // User is signed out.
                        // ...
                        console.log('please signin first')
                    }
                });
                var userId = firebase.auth().currentUser.uid;
                return firebase.database().ref('/Users/' + userId).once('value').then(function(snapshot) {
                   console.log(snapshot.val())
                    // ...
                });
            },
            signout(){
                let user = firebase.auth().currentUser ;
                if (user){
                    firebase.auth().signOut().then(function(){
                        console.log('sign out successful');
                    }).catch(function(error) {
                        console.log(error)
                    });
                }
            },
            whatisthedate(){
                console.log(new Date().toString())
                console.log(Math.floor((Math.random() * 100) + 1))
            },
            addcargo(){
                let user = firebase.auth().currentUser
                let id = Math.floor((Math.random() * 100) + 1)
                firebase.database().ref('Cargo/' + `c${id}` ).set({
                    CargoID :`c${id}`,
                    CargoType : 'CargoType1',
                    DangerousGoods : false,
                    CargoQuantity : 'CargoQuantity1',
                    LoadingPort : 'LoadingPort',
                    DischargingPort : 'DischargingPort1',
                    Availability : 'Availability1',
                    Freight : 'Freight1',
                    ContactInfo : 'ContactInfo1',
                    UserID : user.uid,
                })
                // firebase.database().ref('DangerousGoods/' + `c${id}` ).set({
                //     CargoID : `c${id}`,
                //     Corrosive : 'Corrosive',
                //     DangerousWhenWet : 'DangerousWhenWet',
                //     Explosive : 'Explosive',
                //     FlammableGas : 'FlammableGas',
                //     FlammableLiquid : 'FlammableLiquid',
                //     FlammableSolid : 'FlammableSolid',
                //     InfectiousSubstance : 'InfectiousSubstance',
                //     MarinePollutant : 'MarinePollutant',
                //     Miscellaneous : 'Miscellaneous',
                //     NonflammableCompressedGas : 'NonflammableCompressedGas',
                //     OrganicPeroxide : 'OrganicPeroxide',
                //     OxidizingAgent : 'OxidizingAgent',
                //     Radioactive : 'Radioactive',
                //     SpontaneouslyCombustible : 'SpontaneouslyCombustible',
                //     ToxicGas : 'ToxicGas',
                //
                // })

                console.log('cargoadded')
            },
            addship(){
                let user = firebase.auth().currentUser
                let id = `s${Math.floor((Math.random() * 100) + 1)}${Math.floor((Math.random() * 100) + 1)}`
                firebase.database().ref('Ships/' + id ).set({
                    CargoID :id,
                    CargoType : 'CargoType1',
                    DangerousGoods : false,
                    CargoQuantity : 'CargoQuantity1',
                    LoadingPort : 'LoadingPort',
                    DischargingPort : 'DischargingPort1',
                    Availability : 'Availability1',
                    Freight : 'Freight1',
                    ContactInfo : 'ContactInfo1',
                    UserID : user.uid,
                })

            }
        }
    }
</script>

<style scoped>
    #contaner{
        /*position: absolute;*/
        display: flex;
        align-items: center;
        flex-direction: column;
        font-family: Roboto ;
        width: 77vw;
        height: 40.4vw;
        background-color: #ECEFF1;
        margin: auto;
        border-radius: 2vw;
        box-shadow: 0px 3px 6px rgba(0,0,0,16%);

    }
    .buttoncontrol{
        width: 12vw;
        background-color: #039be5;
        padding-top:0.5vw ;
        padding-bottom:0.5vw ;
        padding-bottom:0.5vw ;
        border-radius: 0.5vw;
        font-size: 1.2vw;
        margin-top: 1vw;
    }

</style>
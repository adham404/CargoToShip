<template>
    <div id="flexcontaner1">
        <div class="card" id="billingaddress" >
<!--            <div id="mycardstitle">My Cards</div>-->
            <div id="mycardcontaner" v-if="mycrads" >
                <div class="mycridetcard" v-for="card in mycrads" v-bind:key="card.id">
                    <input type="radio" name="paymentmated" :value="card.id" v-model="chossedcard"  v-on:input="printtt">
                    <img class="mycardlogo" v-if="card.card.brand === 'visa'" src="@/assets/mycardvisa.svg">
                    <img class="mycardlogo"  v-if="card.card.brand ==='mastercard'" src="@/assets/mycardmaster.svg">
                    <img class="mycardlogo"  v-if="card.card.brand !='mastercard' && card.card.brand != 'visa'" src="@/assets/mycardsun.svg">
                    <div class="mycardtext" >**** **** **** {{card.card.last4}}</div>
                    <div id="mycardtext">{{card.card.exp_month}}/{{card.card.exp_year}}</div>
                </div>
            </div>
            <div id="cargopricetitle">The Price</div>
            <div class="cargoprice">{{price}}$</div>
            <slot></slot>


            <div id="555"><div id="confirmorder1" v-on:click="paymony" >Confirm Order</div></div>
        </div>

        <div class="card" id="card info" >
            <div class="flexheader"><div class="number"></div>
                <div class="titel">Card details</div>
            </div>
            <div class="hr1"></div>

            <div>
                <div class="inputdata" >
                    <p>Name on card</p>
                    <input type="text" value="card name"  v-model="idata.name" >
                </div>
               <div >
                   <div id="card-element" ></div>
               </div>
                <div class="inputdata" >
                    <p>Address</p>
                    <input type="text" value="Address"  v-model="idata.addres" >
                </div>
                <div class="inputdata" >

                </div>
                <div class="flex">
                    <div id="smallinput" class="inputdata" >
                        <p>City</p>
                        <input type="text"  value="City"  v-model="idata.city" >
                    </div>
                    <div id="smallinput"  class="inputdata" >
                        <p>Country</p>
                        <select id="country" name="country" v-model="idata.country">
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia, Plurinational State of</option>
                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, the Democratic Republic of the</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands (Malvinas)</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">Heard Island and McDonald Islands</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran, Islamic Republic of</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">Korea, Democratic People's Republic of</option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Lao People's Democratic Republic</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia, Federated States of</option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestinian Territory, Occupied</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Réunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin (French part)</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">Sint Maarten (Dutch part)</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">South Georgia and the South Sandwich Islands</option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">Taiwan, Province of China</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania, United Republic of</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">United States Minor Outlying Islands</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela, Bolivarian Republic of</option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                        </select>
                    </div>

                </div>
                <div id="confirmorder1" v-on:click="addcard" >Add card</div>
                <div class="inputdata" v-if="error">
                    <div id="error">{{errormassage}}</div>
                </div>

            </div>
        </div>

        <div id="lodding" v-if="lodding" ></div>
    </div>
</template>

<script>
    import firebase from "firebase"
    let stripe = window.Stripe('pk_test_51GxIWeC7X3YpNau3ctZKcMgsMjexF4GBs9aFmF0O6NDacFWfonAXZ3txdVQpTs15iDJ7rQH2G3uk5YQGMcTN4ExJ00MLwC9DVY');
    var elements = stripe.elements();
    var style = {
        base: {

            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "6vw",
            height : '11vw',
            margin : '0',
            padding : '0',
            "::placeholder": {
                color: "#aab7c4",
                height : '10vw',
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    };

    var card = elements.create("card", { style: style });
    export default {
        name: "creditcardinputdata",
        data(){
            return {
                mycrads : null,
                chossedcard : null,
                idata : {
                    name : null,
                    addres : null,
                    country : null,
                    city : null,
                    zipcode : null,
                    termsandcond : null,
                },
                price : 6,
                error :false,
                errormassage : null,
                lodding :false ,
            }
        },
        async mounted() {
            let self = this ;
            await card.mount("#card-element");
            self.getcards()

        },
        methods:{
            async getcards(){
                var user = await  firebase.auth().currentUser;
                if(user){
                    let userId =  await user.uid
                    await firebase.database().ref(`paymentdata/${userId}/paymentmethods/`).once('value').then(async (snapshot)=>{
                            console.log(snapshot.val());
                            this.mycrads = await snapshot.val()

                        }
                    )
                }
            },
            printtt(){
                setTimeout(()=>{console.log(this.chossedcard)},100)

            },
            async addcard(){
                var user = await firebase.auth().currentUser;
                var userId = await firebase.auth().currentUser.uid;
                let clintsecret ;

                if (user){
                    this.lodding =true ;
                    // User is signed in.
                    await firebase.database().ref('StripeCustomers/' + user.uid).once('value').then(  function(snapsho) {
                        console.log(snapsho.val())
                        clintsecret =   snapsho.val().setup_secret
                    });
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    const { setupIntent, error }= await stripe.confirmCardSetup(
                        clintsecret,
                        {
                            payment_method: {
                                card: card,
                                billing_details: {
                                    name: this.idata.name,
                                    address: {
                                        city: this.idata.city,
                                        country: this.idata.country,
                                        line1 : this.idata.addres,
                                        postal_code : this.idata.zipcode,
                                    }

                                },
                            },
                        }
                    );

                    if (error) {
                        this.showerror(error.message)
                        console.log(error)
                        return;
                    }

                    const addnewcard = await firebase.functions().httpsCallable('addPaymentMethodDetailsCall');
                    await  addnewcard({paymentMethodId:setupIntent.payment_method,userid:userId}).then(res=>{
                        console.log(res.data)
                        // CardID = res.data
                    });
                    this.getcards();
                    this.lodding = false ;
                }

            },
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          async paymony(){

              var user = await firebase.auth().currentUser;
              var userId = await firebase.auth().currentUser.uid;

              if (user) {
                  this.lodding = true ;
                  const  currency = 'usd'
                  let datacall ;
                  const data =  {
                      payment_method: await this.chossedcard,
                      currency,
                      amount: 500,
                      status: 'new',
                  };
                  const paymony = await firebase.functions().httpsCallable('addPaymentcall');
                  const res = await paymony({paymentdata : data , userid :userId });
                  console.log(res.data)
                  datacall= await res.data;
                  if (datacall.next_action){
                      if(datacall.next_action.type === "use_stripe_sdk" ){
                         await stripe.confirmCardPayment(datacall.client_secret).then(async function(data) {
                              if (data.error) {
                                  console.log("Your card was not authenticated, please try again");
                              }else if (data.paymentIntent){

                                  const update = await firebase.functions().httpsCallable('updatepayment');
                                  const resalt = await update({paymentid:datacall.id});
                                  console.log(resalt.data)
                                  await firebase.database().ref(`paymentdata/${userId}/payments/${resalt.data.id}`).set(resalt.data);



                              }
                          });
                      }



                  }
              } else {
                  this.showerror("Please Login First")
              }
              await alert("Payment Done ")
              this.lodding = false ;

          },
            showerror(error){
              this.error = true;
              this.errormassage = error;
                setTimeout(()=>{this.error = false;},3000)
            },
        },
    }
</script>

<style scoped>
    #mycardcontaner{
        overflow: auto;
        height: 16vw;
    }
    #mycardstitle{
        font-size: 1.2vw;
    }
    .mycridetcard{
        margin-right: 1vw;
        margin-left: 1vw;
        font-size: 1.2vw;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-shadow: 0vw 0.2vw 0.4vw rgba(0,0,0,16%) ;
        padding: 0.6vw 0 0.6vw 0;
        border-radius: 0.5vw;
        margin-bottom: 0.7vw;
    }
    .mycardlogo{
        width: 2.5vw;
    }
    .mycridetcard input{
        width: 1.2vw;
        height: 1.2vw;
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
        /*margin-left: 70%;*/
       margin-left: 12vw;
        margin-top: 1vw;
    }

    #lodding{
        position: absolute;
        top: 30%;
        right:40%;
        border: 1.5vw solid #f3f3f3;
        border-radius: 50%;
        border-top:1.5vw solid #3498db;
        width: 10vw;
        height: 10vw;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
    }

    /* Safari */
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    #error{
        color: #fa755a ;
        font-size: 1.3vw;
    }
    #card-element{
        margin-top: 0.5vw;
        margin-bottom: 0.5vw;



    }
    #smallinput{
        flex: 0 0 auto ;
    }
    #smallinput select{
        width: 12vw ;
    }

    #inputcheckbox{
        height: 1.5vw;
        width: 1.5vw;
        margin: 0;
        border-radius: 0px;
    }
    #flexcontaner1{
        display: flex;
        position: relative;
        width: 100%;
        justify-content: space-around;

    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    .flex{
        display: flex;
        justify-content: space-between;
    }
    #flex{
        display: flex;
        padding: 2vw 4vw 2vw 4vw ;

    }
    .card{
        width: 25vw ;
        padding-right: 1vw ;
        margin-right: 1vw;
        height: 27vw;
    }
    #billingaddress{
        width: 30vw;
    }
    .flexheader{
        display: flex;
        justify-content: left;
        align-items: center;

    }
    .number{
        font-size: 2vw;
        padding-right: 0.5vw ;
    }
    .titel{
        font-size: 1.5vw;
    }
    .hr1{
        margin: 0.5vw 0vw 0.5vw 0vw;
        border-top: 0.2vw gray solid;

    }
    .inputdata{
        display: flex;
        flex-direction: column;
        padding-bottom: 0.8vw ;
    }
    .inputdata p{
        font-size: 1.2vw;
    }
    .inputdata input{
        font-size: 1.2vw;
        border-radius: 0.5vw;
        margin: 0.5vw 0vw 0vw 0vw;
        outline: none;
        height: 2vw;
        border: none;
        box-shadow: 0vw 0.2vw 0.4vw rgba(0,0,0,16%) ;
    }
    .inputdata select{
        font-size: 1.2vw;
        border-radius: 0.5vw;
        margin: 0.5vw 0vw 0vw 0vw;
        outline: none;
        height: 2.2vw;
        border: none;
        box-shadow: 0vw 0.2vw 0.4vw rgba(0,0,0,16%) ;
    }
    .flex input{
        width: 10.2vw;
    }
    .termscard{
        font-size: 1.3vw;
    }
    .cargoprice{
        width: 100%;
        text-align: center;
        font-size: 4vw;
        color: darkblue;

    }
    #cargopricetitle{
        width: 100%;
        text-align: center;
        font-size: 2vw;
    }


</style>
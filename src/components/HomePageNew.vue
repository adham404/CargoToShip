<template lang="html">
  <div class="app">
    <nav>
  <ul class="navbar-nav">
      <router-link :to="{ name: '', params: {} }">
        <li class="nav-item">
            <svg id="WhiteAccount" xmlns="http://www.w3.org/2000/svg" width="37.368" height="37.368" viewBox="0 0 37.368 37.368">
              <path id="Icon_material-account-circle" data-name="Icon material-account-circle" d="M21.684,3A18.684,18.684,0,1,0,40.368,21.684,18.691,18.691,0,0,0,21.684,3Zm0,5.605a5.605,5.605,0,1,1-5.605,5.605A5.6,5.6,0,0,1,21.684,8.605Zm0,26.531a13.453,13.453,0,0,1-11.21-6.016c.056-3.718,7.474-5.755,11.21-5.755,3.718,0,11.154,2.037,11.21,5.755a13.453,13.453,0,0,1-11.21,6.016Z" transform="translate(-3 -3)" fill="#fff"/>
            </svg>
            <span class="Link-text" style="margin-bottom:8px">Account</span>
        </li>
      </router-link>

      <router-link :to="{ name: '', params: {} }">
        <li class="nav-item">
          <svg id="YourShips" xmlns="http://www.w3.org/2000/svg" width="29" height="25.637" viewBox="0 0 29 25.637">
            <path id="Path_3" data-name="Path 3" d="M9.586,50.541a39.85,39.85,0,0,1-6.943,2.908V48.306a1.209,1.209,0,0,1,.529-1l1.981-1.347a1.423,1.423,0,0,1,.68-.209h3.18V43.877h3.579V45.75h2.742a.806.806,0,0,1,.806.806v1.114A51.055,51.055,0,0,0,9.586,50.541Zm-.573-8.514V43h3.579v-.972a.9.9,0,0,0-.9-.9H9.915A.9.9,0,0,0,9.013,42.027ZM6.935,39.192a1.846,1.846,0,0,0,.725-.148,1.357,1.357,0,0,0,1.559.505c0,.025-.008.049-.008.075a.863.863,0,1,0,.863-.863h0A1.39,1.39,0,0,0,8.787,36.84c-.026,0-.049.006-.075.008a1.849,1.849,0,1,0-1.778,2.345Zm18.13,18.13a.809.809,0,0,0,0,.895l1.067,1.6a.841.841,0,0,1-.764,1.305L1.631,59.257a1.519,1.519,0,0,1-1.35-1.131A7.623,7.623,0,0,1,0,56.3c0-1.239.5-1.47,1.517-1.713,9.111-2.174,11.616-7.414,26.818-8.272a.631.631,0,0,1,.66.715A27.135,27.135,0,0,1,25.065,57.322ZM23.9,53.406a.4.4,0,1,0-.806,0,1.381,1.381,0,0,1-.981,1.317V51.945a.918.918,0,1,0-.806,0v2.775a1.381,1.381,0,0,1-.981-1.317.4.4,0,1,0-.806,0,2.19,2.19,0,0,0,4.381,0Z" transform="translate(0 -35.488)" fill="#fff"/>
          </svg>
          <span class="Link-text">Your Ships</span>
        </li>
      </router-link>

      <router-link :to="{ name: '', params: {} }">
        <li class="nav-item">
          <svg id="YourCargo" xmlns="http://www.w3.org/2000/svg" width="40.062" height="24.828" viewBox="0 0 40.062 24.828">
            <g id="worldwide-shipping" transform="translate(0 -5.063)">
              <path id="Path_7" data-name="Path 7" d="M5.5,5.177.553,7.443A1.333,1.333,0,0,0,0,8.659V26.3a1.333,1.333,0,0,0,.553,1.216L5.5,29.777Z" transform="translate(0 0)" fill="#fff"/>
              <path id="Path_8" data-name="Path 8" d="M38.732,7.467,7,5.063V29.891l31.732-2.4a1.345,1.345,0,0,0,1.33-1.247V8.714a1.345,1.345,0,0,0-1.33-1.247ZM13.807,23.737a1.368,1.368,0,0,1-1.459,1.252,1.368,1.368,0,0,1-1.459-1.252V11.218a1.368,1.368,0,0,1,1.459-1.252,1.368,1.368,0,0,1,1.459,1.252Zm7.779-.835a1.476,1.476,0,0,1-2.917,0V12.052a1.476,1.476,0,0,1,2.917,0Zm7.779-.835a1.476,1.476,0,0,1-2.917,0V12.887a1.476,1.476,0,0,1,2.917,0Zm6.807-.417a1.476,1.476,0,0,1-2.917,0V13.721a1.476,1.476,0,0,1,2.917,0Z" fill="#fff"/>
            </g>
          </svg>
          <span class="Link-text">Your Cargo</span>
        </li>
      </router-link>

      <router-link :to="{ name: '', params: {} }">
        <li class="nav-item">
          <svg id="Contacts" xmlns="http://www.w3.org/2000/svg" width="39.502" height="29.627" viewBox="0 0 39.502 29.627">
            <path id="Icon_material-contact-phone" data-name="Icon material-contact-phone" d="M36.21,4.5H3.292A3.3,3.3,0,0,0,0,7.792V30.835a3.3,3.3,0,0,0,3.292,3.292H36.21a3.287,3.287,0,0,0,3.275-3.292L39.5,7.792A3.3,3.3,0,0,0,36.21,4.5ZM13.167,9.438A4.938,4.938,0,1,1,8.23,14.376,4.931,4.931,0,0,1,13.167,9.438Zm9.876,19.751H3.292V27.543c0-3.292,6.584-5.1,9.876-5.1s9.876,1.811,9.876,5.1Zm6.337-6.584h2.7L34.564,25.9l-3.275,3.275A12.363,12.363,0,0,1,26.8,22.605a11.987,11.987,0,0,1,0-6.584,12.3,12.3,0,0,1,4.493-6.567l3.275,3.275-2.485,3.292h-2.7a9.693,9.693,0,0,0,0,6.584Z" transform="translate(0 -4.5)" fill="#fff"/>
          </svg>
          <span class="Link-text">Purchased Contacts</span>
        </li>
      </router-link>

      <router-link :to="{ name: '', params: {} }">
        <li class="nav-item" id="themeButton">
          <svg id="Home" xmlns="http://www.w3.org/2000/svg" width="40.503" height="31.496" viewBox="0 0 40.503 31.496">
            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M19.714,10.425,6.75,21.1V32.625A1.125,1.125,0,0,0,7.875,33.75l7.879-.02A1.125,1.125,0,0,0,16.874,32.6v-6.73A1.125,1.125,0,0,1,18,24.75h4.5a1.125,1.125,0,0,1,1.125,1.125V32.6a1.125,1.125,0,0,0,1.125,1.129l7.876.022a1.125,1.125,0,0,0,1.125-1.125V21.094L20.789,10.425A.857.857,0,0,0,19.714,10.425Zm20.477,7.257-5.878-4.845V3.1a.844.844,0,0,0-.844-.844H29.531a.844.844,0,0,0-.844.844V8.2l-6.3-5.179a3.375,3.375,0,0,0-4.289,0L.305,17.681A.844.844,0,0,0,.193,18.87l1.793,2.18a.844.844,0,0,0,1.189.115L19.714,7.542a.857.857,0,0,1,1.076,0l16.54,13.622a.844.844,0,0,0,1.188-.112l1.793-2.18a.844.844,0,0,0-.12-1.19Z" transform="translate(0.001 -2.254)" fill="#fff"/>
          </svg>
          <span class="Link-text">HomePage</span>
        </li>
      </router-link>
    </ul>
    </nav>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.app{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
   a{
     text-decoration: none;
   }
  nav {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    width: 3vw;
    background-color: #0E153A;
    list-style: none;
    margin: 0;
    padding: 0;
    transition: width 400ms ease;
  }
  .Link-text{
    display: none;
  }
  ul{
    margin-left: -18px;
    list-style: none;
  }
  .nav-item{
    display: flex;
    align-items: flex-end;
  }
  nav:hover{
    width: 15vw;
    align-items: flex-start;
  }
  nav:hover .Link-text{
    display: block;
    margin-left: 20px;
    color: white;
    font-family: Quicksand;
  }
  a:hover{
    text-decoration: underline;
  }
  svg {
    width:2vw;
    margin-bottom: auto;
    margin-top: 5vh;
  }

</style>

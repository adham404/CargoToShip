import firebase from "firebase"
// import Vue from "vue";
const state = {
    UserCards : []

}

const getters = {
    UserCridetCards :state => state.UserCards ,

}

const mutations = {
    //RemoveCard : (state , n) => { state.UserCards.splice(n, 1)}
    RemoveCard(state , CardIndex) {state.UserCards.splice( CardIndex, 1);},
    SetData(state,data){state.UserCards = data}
}

const actions = {
    async GetUserCards ({commit,state}){
        state.UserCards = []
        const Getdata = await firebase
        .functions()
        .httpsCallable("Cards-GetCards");
        
        let my_cards = await Getdata()
        //console.log(my_cards)
        commit('SetData', my_cards.data)
        
    },
    async DeletUserCard ({commit,state},CardIndex){
        const CardID = await state.UserCards[CardIndex].id
        commit('RemoveCard',CardIndex)
        console.log(CardID)
        const DeletCard = await firebase
        .functions()
        .httpsCallable("Cards-DeletCards")

        await DeletCard({cardId :CardID })
    }

}

export default {
    state,
    getters,
    actions,
    mutations,
}
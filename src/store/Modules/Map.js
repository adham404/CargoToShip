const state = {
    Sector : {
        Name: "",
        Macro: true,
    }

}


const getters = {
    GetSector: state => state.Sector

}


const actions = {

}


const mutations = {
    ChangeSector(state,x){
        state.Sector = x;
    }


}


export default {
    state,
    getters,
    mutations,
    actions
}
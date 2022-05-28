export default {
    namespaced: true,
    state() {
        return {
            sidebarTurnOnOff: ''
        }
    },

    mutations: {
        setSidebar(state, status) {
            state.sidebarTurnOnOff = status
        }
      
    }

}
export default {
    namespaced: true,
    state() {
        return {
            sidebarTurnOnOff: '',
            nomeNavbar: ''
        }
    },
    // captura o botão de aparecer e esconder a sidebar
    mutations: {
        setSidebar(state, status) {
            state.sidebarTurnOnOff = status
        }
      
    }

}
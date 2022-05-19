import { createStore } from 'vuex';
import setUserLoginModule from '@/store/modules/loginModule'
import setColaboradorModule from '@/store/modules/newUser'
import getColaboradorModule from '@/store/modules/colabModules'


const store = createStore({
    modules: {
        setUserLoginModule,
        setColaboradorModule,
        getColaboradorModule
    }
});

export default store;





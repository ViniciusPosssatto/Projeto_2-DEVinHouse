import { createStore } from 'vuex';
import setUserLoginModule from '@/store/modules/loginModule'
import setColaboradorModule from '@/store/modules/newUser'
import getColaboradorModule from '@/store/modules/colabModules'
import setItensModule from '@/store/modules/newItensModule'
import inventarioModule from '@/store/modules/inventarioModule'
import editaModule from '@/store/modules/editaModule'

const store = createStore({
    modules: {
        setUserLoginModule,
        setColaboradorModule,
        getColaboradorModule,
        setItensModule,
        inventarioModule,
        editaModule
    }
});

export default store;





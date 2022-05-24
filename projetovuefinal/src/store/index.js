import { createStore } from 'vuex';
import setUserLoginModule from '@/store/modules/loginModule'
import setColaboradorModule from '@/store/modules/newUser'
import setItensModule from '@/store/modules/newItensModule'
import inventarioModule from '@/store/modules/inventarioModule'

const store = createStore({
    modules: {
        setUserLoginModule,
        setColaboradorModule,
        setItensModule,
        inventarioModule
       
    }
});

export default store;





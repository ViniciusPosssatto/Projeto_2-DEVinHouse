import { createStore } from 'vuex';
import setUserLoginModule from '@/store/modules/loginModule'
import setColaboradorModule from '@/store/modules/newUser'
import setItensModule from '@/store/modules/newItensModule'
import coisasGeraisModule from '@/store/modules/coisasGeraisModule'

const store = createStore({
    modules: {
        setUserLoginModule,
        setColaboradorModule,
        setItensModule,
        coisasGeraisModule
       
    }
});

export default store;





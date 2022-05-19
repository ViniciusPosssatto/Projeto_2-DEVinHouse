import { createStore } from 'vuex';
import setUserLoginModule from '@/store/modules/loginModule'
      


const store = createStore({
    modules: {
        setUserLoginModule
    }
});

export default store;





import { createStore } from 'vuex';

export default createStore({
    state: {
        searchData: null
    },
    mutations: {
        setSearchData(state, data) {
            state.searchData = data;
        }
    },
    actions: {
        submitSearchData({ commit }, data) {
            commit('setSearchData', data);
        }
    },
    getters: {
        getSearchData: state => state.searchData
    }
});

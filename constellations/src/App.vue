<template>
<div id="app">
    <my-header>星座物语</my-header>
    <nav-bar />
    <ErrorTip />
    <router-view v-slot='{ Component }' v-if="!errorCode">
        <keep-alive>
            <component :is='Component' />
        </keep-alive>
    </router-view>
    <tab />
</div>
</template>

<script>
import MyHeader from '@/components/Header';
import Tab from '@/components/Tab';
import NavBar from '@/components/NavBar';
import ErrorTip from '@/components/ErrorTip';

import {
    computed,
    watch
} from 'vue';
import {
    useStore
} from 'vuex';
import {
    useRouter
} from 'vue-router';

export default {
    name: 'App',
    components: {
        MyHeader,
        Tab,
        NavBar,
        ErrorTip,
    },
    setup(props) {
        const store = useStore(),
            state = store.state,
            router = useRouter();

        router.push('/');
        store.commit('setField', 'today')
        console.log(state.field)

        watch(() => {
            console.log(router)
            return router.currentRoute.value.name;
            //返回需要监听的对象
        }, (value) => {
            store.commit('setField', value)
        })

        return {
            errorCode: computed(() => state.errorCode)
        }
    }
}
</script>

<style lang="scss">

</style>

<template>
<div class="nav-bar" v-nav-current="{
    className: 'nav-item',
    activeClass: 'nav-current',
    curIdx
}" @click="navClick($event)">
    <div class="scroll-wrapper">
        <div class="nav-wrapper" :style="`width: ${navData.length * .8}rem`">
            <nav-item v-for="(item, index) of navData" :key="index" :item='item' :index='index'>
            </nav-item>
        </div>
    </div>
</div>
</template>

<script>
import navData from '@/datas/nav';

import NavItem from './item';

import {
    ref
} from 'vue';
import {
    navCurrent
} from '@/directives';
import {
    useStore
} from 'vuex';

import getData from '@/services';

export default {
    name: 'NavBar',
    components: {
        NavItem
    },
    directives: {
        navCurrent, //在模板中用的时候要用-
    },
    setup(props) {
        const curIdx = ref(0),
            store = useStore();

        const navClick = (e) => {
            const className = e.target.className;

            if (className === 'nav-item') {
                const tar = e.target,
                    idx = tar.dataset.index,
                    consName = tar.innerText;

                curIdx.value = idx;
                store.commit('setConsName', consName);
                getData(store)
            }

        }

        return {
            navData,
            curIdx,
            navClick,
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-bar {
    position: fixed;
    top: .44rem;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .38rem;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;

    .scroll-wrapper {
        height: .46rem;
        overflow-x: auto;

        .nav-wrapper {
            display: flex;
            flex-direction: row;
            height: .42rem;
        }
    }
}
</style>

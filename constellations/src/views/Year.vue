<template>
<div class="container">
    <ConsCard :name='yearData.name' :allIndex='yearData.all' />
    <ConsList :data='yearData' />
</div>
</template>

<script>
import getData from '@/services';
import {
    onMounted,
    computed,
    ref,
    onActivated
} from 'vue';
import {
    useStore
} from 'vuex'; //返回store

import ConsList from '@/components/List/Year';

export default {
    name: 'Yearpage',
    components: {
        ConsList,
    },
    setup(props) {
        const store = useStore(),
            state = store.state,
            status = ref('');
        onMounted(() => {
            getData(store)
            status.value = state.consName;
        });

        onActivated(() => {
            if (status.value != state.consName) {
                getData(store);
                status.value = state.consName;
            }
        })

        return {
            yearData: computed(() => {
                return state.year;
            })
        }
    }
}
</script>

<style scoped>
</style>

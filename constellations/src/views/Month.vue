<template>
<div class="container">
    <ConsCard :name='monthData.name' :allIndex='monthData.all' />
    <ConsList :data='monthData' />
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

import ConsList from '@/components/List/Month';

export default {
    name: 'Monthpage',
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
            monthData: computed(() => {
                return state.month;
            })
        }
    }
}
</script>

<style scoped>
</style>

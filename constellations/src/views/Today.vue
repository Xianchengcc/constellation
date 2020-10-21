<template>
<div class="container">
    <ConsCard :name='todayData.name' :allIndex='todayData.all' />
    <NumList :data='todayData' />
    <ConsList :data='todayData' />
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

import NumList from '@/components/NumList';
import ConsList from '@/components/List/Today'

export default {
    name: 'Todaypage',
    components: {
        NumList,
        ConsList
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
            todayData: computed(() => {
                return state.today;
            })
        }
    }
}
</script>

<style scoped>
</style>

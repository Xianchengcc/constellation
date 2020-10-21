<template>
<div class="container">
    <ConsCard :name='weekData.name' :allIndex='weekData.all' />
    <ConsList :data='weekData' />
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

import ConsList from '@/components/List/Week'

export default {
    name: 'Weekpage',
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
            weekData: computed(() => {
                return state.week;
            })
        }
    }
}
</script>

<style scoped>
</style>

<template>
<div class="container">
    <ConsCard :name='tomorrowData.name' :allIndex='tomorrowData.all' />
    <ConsList :data='tomorrowData' />
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

import ConsList from '@/components/List/Tomorrow'

export default {
    name: 'Tomorrowpage',
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
            tomorrowData: computed(() => {
                return state.tomorrow;
            })
        }
    }
}
</script>

<style scoped>
</style>

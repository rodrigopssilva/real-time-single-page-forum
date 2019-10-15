<template>
    <show-question
    :data="question"
    v-if="question">
    </show-question>
</template>

<script>
    import ShowQuestion from './ShowQuestion';
    export default {
        components: {ShowQuestion},
        data() {
            return {
                question: null
            }
        },
        created() {
            axios.get('/api/question/' + this.$route.params.slug)
                .then(response => this.question = response.data.data);
        }
    }
</script>

<style scoped>

</style>

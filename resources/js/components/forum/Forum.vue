<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs8>
                <question v-for="question in questions"
                :key="question.path"
                :data="question"
                ></question>
            </v-flex>
            <v-flex xs4>
                <app-sidebar></app-sidebar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Question from './Question';
    import AppSidebar from './AppSidebar';
    export default {
        data() {
            return {
                questions: {}
            }
        },
        created() {
            axios.get('api/question')
                .then(response => this.questions = response.data.data)
                .catch(error => console.log(error.response.data));
        },
        components: {AppSidebar, Question},
    }
</script>

<style scoped>

</style>

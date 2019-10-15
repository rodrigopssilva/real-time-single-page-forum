<template>
    <v-container fluid>
        <v-card>
            <v-form @submit.prevent="update">
                <v-text-field
                    v-model="form.title"
                    label="Title"
                    type="text"
                    required
                ></v-text-field>
                <span class="red--text" v-if="errors.title">{{errors.title[0]}}</span>

                <vue-simplemde v-model="form.body"></vue-simplemde>

                <v-card-actions>
                    <v-btn icon small type="submit">
                        <v-icon color="teal">save</v-icon>
                    </v-btn>
                    <v-btn icon small @click="cancel">
                        <v-icon>cancel</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                form: {
                    title: null,
                    body: null,
                },
                errors: {},
            }
        },
        mounted() {
            this.form = this.data;
        },
        methods: {
            cancel() {
                EventBus.$emit('cancelEditing');
            },
            update() {
                axios.patch('/api/question/' + this.form.slug, this.form)
                    .then(response => this.cancel())
                    .catch(error => console.log(error.response.data));
            },
        }
    }
</script>

<style scoped>

</style>

<template>
    <v-container>
        <v-form @submit.prevent="create">
            <v-text-field
                v-model="form.title"
                label="Title"
                type="text"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.title">{{errors.title[0]}}</span>

            <v-select
                :items="categories"
                v-model="form.category_id"
                item-text="name"
                item-value="id"
                label="Category"
                autocomplete
            ></v-select>

            <vue-simplemde v-model="form.body"></vue-simplemde>

            <v-btn
                color="green"
                type="submit"
            >Ask</v-btn>

        </v-form>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                form:{
                    title: null,
                    category_id: null,
                    body: null,
                },
                categories: [],
                errors: {},
            }
        },
        created() {
            axios.get('/api/category')
                .then(response => this.categories = response.data.data);
        },
        methods: {
            create() {
                axios.post('/api/question', this.form)
                    .then(response => this.$router.push(response.data.path))
                    .catch(errors => this.errors = errors.response.data.error);
            }
        }
    }
</script>

<style scoped>

</style>

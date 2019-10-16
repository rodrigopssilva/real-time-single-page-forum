<template>
    <v-container>
        <v-form @submit.prevent="create">
            <v-text-field
                v-model="form.name"
                label="Category Name"
                type="text"
                required
            ></v-text-field>

            <v-btn
                v-if="!editSlug"
                color="green"
                type="submit">
                Create
            </v-btn>
            <v-btn
                v-else
                color="pink"
                type="submit">
                Edit
            </v-btn>

        </v-form>

        <v-card>
            <v-toolbar color="indigo" dark dense>
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>

            <v-list>
                <div v-for="(category, index) in categories" :key="category.id">
                    <v-list-item>
                        <v-list-item-action>
                            <v-btn icon small @click="edit(index)">
                                <v-icon color="orange">edit</v-icon>
                            </v-btn>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>
                                {{category.name}}
                            </v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn icon small @click="destroy(category.slug, index)">
                                <v-icon color="red">delete</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                    <v-divider></v-divider>
                </div>
            </v-list>
        </v-card>

    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: null,
                },
                categories: {},
                editSlug: null,
            }
        },
        methods: {
            create() {
                axios.post('/api/category', this.form)
                    .then(response => {
                        this.categories.unshift(response.data);
                        this.form.name = null;
                        this.form.slug = null;
                    })
                    .catch(error => console.log(error.response.data));
            },
            update() {
                axios.patch('/api/category/' + this.editSlug, this.form)
                    .then(response => {
                        this.categories.unshift(response.data);
                        this.form.name = null;
                        this.form.slug = null;
                    })
                    .catch(error => console.log(error.response.data));
            },
            destroy(slug, index) {
                axios.delete('/api/category/' + slug)
                    .then(response => this.categories.splice(index, 1))
                    .catch(error => console.log(error.response.data));
            },
            edit(index) {
                this.form.name = this.categories[index].name;
                this.editSlug = this.categories[index].slug;
                this.categories.splice(index, 1);
            },
        },
        created() {
            axios.get('/api/category')
                .then(response => this.categories = response.data.data);
        }
    }
</script>

<style scoped>

</style>

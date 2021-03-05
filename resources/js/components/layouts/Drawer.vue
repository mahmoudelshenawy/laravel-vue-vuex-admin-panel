<template>
    <v-navigation-drawer
        permanent
        absolute
        app
        dark
        clipped
        :value="display"
        color="blue-grey darken-4"
        v-model="display"
        height="100%"
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    Application
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{this.$store.getters.authUser.name}}
                    <!-- {{ User.name ?? "Welocme Here" }} -->
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
            <v-list-item
                v-for="item in listItems"
                :key="item.title"
                link
                @click="navigateTo({ path: item.link })"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-group
                v-for="(list, i) in listGroup"
                :key="i"
                prepend-icon="mdi-account-circle"
            >
                <template v-slot:activator>
                    <v-list-item-title>{{ list.title }}</v-list-item-title>
                </template>
                <v-list-item
                    link
                    v-for="(item, i) in list.children"
                    :key="i"
                    @click="navigateTo({ path: item.link })"
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-spacer></v-spacer>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: mapGetters({
        user: "authUser"
    }),
    data() {
        return {
            display: true,
            items: [
                {
                    title: "Dashboard",
                    link: "/",
                    icon: "mdi-view-dashboard",
                    children: []
                },
                {
                    title: "Users",
                    link: "/users",
                    icon: "fa-users",
                    children: []
                },
                {
                    title: "About",
                    link: "/todos",
                    icon: "mdi-help-box",
                    children: []
                },
                {
                    title: "Settings",
                    icon: "mdi-help-box",
                    children: [
                        {
                            title: "Acount",
                            link: "/settings/acount",
                            icon: "mdi-help-box"
                        }
                    ]
                }
            ],
            right: null
        };
    },
    computed: {
        listGroup() {
            return this.items.filter(item => item.children.length > 0);
        },
        listItems() {
            return this.items.filter(item => item.children.length == 0);
        }
    },
    methods: {
        navigateTo(pass) {
            this.$router.push(pass);
        }
    }
};
</script>

<style scoped>
.nav-link {
    text-decoration: none;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1rem;
    color: aliceblue;
}
</style>

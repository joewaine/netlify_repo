<template>
    <div>
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav no-margin">
                    <li class="nav-item" v-on:click="collapse">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item" v-on:click="collapse">
                        <router-link to="/overview" class="nav-link">OVERVIEW</router-link>
                    </li>
                    <li class="nav-item" v-on:click="collapse">
                        <router-link to="/stage1" class="nav-link">STAGE 1</router-link>
                    </li>
                    <li class="nav-item" v-on:click="collapse">
                        <router-link to="/stage2" class="nav-link">STAGE 2</router-link>
                    </li>
                    <li class="nav-item" v-on:click="collapse">
                        <router-link to="/stage3" class="nav-link">STAGE 3</router-link>
                    </li>
                    <li class="nav-item" v-on:click="collapse">
                        <router-link to="/stage4" class="nav-link">STAGE 4</router-link>
                    </li>
                    <li class="nav-item" v-on:click="collapse">
                        <router-link to="/salesstory" class="nav-link">SALES STORY</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view class="view"></router-view>
    </div>
</template>
<script>
export default {
    methods: {
        collapse: function(event) {
            var navbar = document.querySelector('.navbar');
            navbar.classList.remove('expanded');
        }
    }

}

</script>
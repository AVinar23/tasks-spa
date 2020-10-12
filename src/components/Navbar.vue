<template>
    <div class="navbar">
        <nav class="wrapper">
            <router-link to="/" class="logo"> TasksApp </router-link>
            <ul>
                <router-link tag="li" to="/" exact active-class="active">
                    <a href="#">Create</a>
                </router-link>
                <router-link tag="li" to="/list" exact active-class="active">
                    <a href="#">List</a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
    .navbar {
        background-color:var(--blue);
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 20px 0;      
    }
    ul {
        display: flex;
    }
    ul li {
        margin-left: 5px;
        padding: 10px 15px;
    }
    .active {
        background-color:  var(--yellow);
        border-radius: 8px;
        font-weight: 500;
    }
    a {
        display: inline-block;
        color: white;
        transition: color .2s ease-out;
    }
    a:hover {
        color: var(--yellow);
    }
    .active a:hover {
        color: var(--dark-gray);
    }

</style>
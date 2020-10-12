<template>
  <div id="app">

    <Navbar />

    <div class="wrapper">

      <router-view />

    </div>
    
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    name: "App",
    components: {
      Navbar
    }
  }
</script>

<style>
:root {
--blue: #606dbc;
--dark-gray:  #272727;
--yellow: #fcc02e;
--light-gray: #bfbfbf;
}
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    outline: none;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Poppins', sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body { 
    color: var(--dark-gray);
    font-size: 16px;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: var(--dark-gray);
  }
  textarea {
    resize: none;
  }
  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .button {
    width: 200px;

    border: none;
    border-radius: 8px;
    
    padding: 10px 25px;

    cursor: pointer;
    color: white;
    font-weight: 500;

    background-color: var(--blue);
    transition: background-color .2s ease-out;
  }
  .button:hover {
    background-color: var(--yellow);
  }
</style>

<template>
  <div class="app-main-layout">
    <Navbar @click="isOpen = !isOpen"></Navbar>
    <Sidebar v-model="isOpen"></Sidebar>
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>
    
    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" href="#" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Navbar from '../components/app/Navbar'
  import Sidebar from '../components/app/Sidebar'
  export default {
    name: 'main-layout',
    data: () => ({
      isOpen: true
    }),
    components: {
      Navbar,Sidebar
    }
  }
</script>

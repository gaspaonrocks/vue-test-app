<template>
  <div>
    <header class="header header-6">
      <div class="branding">
        <router-link to="/"><img class="header-logo-resizer" src="../../../assets/logo.png"></router-link>
        <span class="title">Vue-Test-App</span>
      </div>
      <div v-if="loading">
        <span class="spinner spinner-inline">
          Loading...
        </span>
        <span>
          Loading...
        </span>
      </div>
      <div v-if="!loading" class="header-nav">
        <router-link :to="link.name.toLowerCase()" class="nav-link nav-text" v-for="link in data" :key="link.id">{{link.name}}</router-link>
      </div>
      <div class="header-actions">
        <a href="javascript://" class="nav-link nav-icon">
          <clr-icon shape="cog"></clr-icon>
        </a>
      </div>
    </header>
  </div>
</template>

<style src='./Navbar.style.css'></style>

<script src='./Navbar.script.js'></script>
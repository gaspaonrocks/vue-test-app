<template>
  <nav v-if="loaded" class="subnav">
    <ul class="nav">
      <li class="nav-item" v-for="link in data.steps" :key="link.id">
        <router-link class="nav-link" :to="link.level">{{link.level}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style src='./Subnav.style.css'></style>

<script src='./Subnav.script.js'></script>
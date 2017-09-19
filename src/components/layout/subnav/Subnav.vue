<template>
  <nav v-if="loaded" class="subnav">
    <ul class="nav">
      <li class="nav-item" v-for="link in data.steps" :key="link.id">
        <a class="nav-link" v-on:click="setState(link.level)">{{link.level}}</a>
      </li>
    </ul>
  </nav>
</template>

<style src='./Subnav.style.css'></style>

<script src='./Subnav.script.js'></script>
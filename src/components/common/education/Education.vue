<template>
  <div id=education class="container">
    <ul v-if="data" class="row">
      <li v-for="item in data" :key="item.id" class="col-xs-4">
        <div class="card">
          <div class="card-header">
            {{ item.name }} aka {{ item.username }}
          </div>
          <div class="card-block">
            <div class="card-title">
              {{ item.company.name }}
            </div>
            <div class="card-text">
              {{ item.company.bs }} {{ item.company.catchPhrase }}
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm btn-link">Footer Action 1</button>
            <button class="btn btn-sm btn-link">Footer Action 2</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style src='./Education.style.css'></style>

<script src='./Education.script.js'></script>

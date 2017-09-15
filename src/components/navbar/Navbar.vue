<template>
  <div class="main-container">
    <header class="header header-6">
      <div class="branding">
        <img class="header-logo-resizer" src="../../assets/logo.png">
        <span class="title">Vue-Test-App</span>
      </div>
      <div class="header-nav">
        <a href="javascript://" class="active nav-link nav-text">Dashboard</a>
        <a href="javascript://" class="nav-link nav-text">Interactive Analytics</a>
      </div>
      <div class="header-actions">
        <a href="javascript://" class="nav-link nav-icon">
          <clr-icon shape="cog"></clr-icon>
        </a>
      </div>
    </header>
    <nav class="subnav">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Management</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cloud</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tenants</a>
        </li>
      </ul>
    </nav>
    <div class="content-container">
      <div class="content-area">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style src='./Navbar.style.css'></style>

<script src='./Navbar.script.js'></script>
<template>
  <router-link to="/home/123">home123</router-link>
  <router-link to="/home/456">home456</router-link>
  <router-view />
</template>

<style>
.router-link-active {
  color: red;
  font-size: 18px;
  font-weight: 700;
}
</style>

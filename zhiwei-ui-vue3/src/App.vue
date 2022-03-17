<template>
  <div>导航栏</div>
  <router-link to="/">首页</router-link>
  <router-link to="/jam">jam</router-link>
  <hr/>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

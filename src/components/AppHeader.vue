<script setup>
import CoffeeIcon from '@iconify-vue/humbleicons/coffee';
import PeopleIcon from '@iconify-vue/icon-park-outline/people';
import HouseIcon from '@iconify-vue/material-symbols/house';
import ClipboardLineIcon from '@iconify-vue/mingcute/clipboard-line';
import TrophyOutlineSharpIcon from '@iconify-vue/material-symbols/trophy-outline-sharp';
import { RouterLink } from 'vue-router';
</script>


<template>
    <header>
        <div class="container">
        <div class="titulo">
  <CoffeeIcon height="4rem" />
  <div>
    <h1>COFFE QUALITY</h1>
    <h1>CHALLENGE</h1>
  </div>
</div>
      <div class="navegation">
    <nav class="nav-links">
        <ul>
            <li><RouterLink to="/"><HouseIcon height="2rem" />Home</RouterLink></li>
            <li><RouterLink to="/avaliacao"> <ClipboardLineIcon height="2rem" />Avaliação</RouterLink></li>
            <li><RouterLink to="/ranking" > <TrophyOutlineSharpIcon height="2rem" />Ranking</RouterLink></li>
            <li><PeopleIcon height="3rem" /></li>
            </ul>

   </nav>
  </div>
  </div>
</header>
</template>


<style scoped>
 .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
.navegation ul {
    display: flex;
    gap: 3vw;
    font-size: 1rem;
}
.navegation ul li{
    gap: 3vw;
    display: flex;
    font-size: 1rem;

}
.navegation {
 margin: 0vw 3vw 0vw 0vw;

}
.navegation  ul li a{
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
}
.titulo h1 a {

    display: flex;
    margin: 0vw 0vw 0vw 0vw;
    align-items: center;
}
header {
    padding: 1rem 3rem;
}
header {
    border-bottom: 2px solid #333;
}
.titulo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.titulo h1 {
    margin: 0;
    line-height: 1.1;
}
.navegation ul li a {
    position: relative;
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    gap: .4rem;
    padding-bottom: .5rem;
}

.navegation ul li a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background: #8B4513;
    transition: width .3s;
}

.navegation ul li a.router-link-exact-active::after {
    width: 100%;
}
</style>

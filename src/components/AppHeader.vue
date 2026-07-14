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
<h1> <CoffeeIcon height="3rem" />
 COFFE QUALITY <br> CHALLENGE</h1>
</div>
      <div class="navegation">
    <nav class="nav-links">
        <ul>
            <li><RouterLink to="/"><HouseIcon height="1em" />Home</RouterLink></li>
            <li><RouterLink to="/avaliacao"> <ClipboardLineIcon height="1em" />Avaliação</RouterLink></li>
            <li><RouterLink to="/ranking" > <TrophyOutlineSharpIcon height="1em" />Ranking</RouterLink></li>
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
    gap: 5vw;
    font-size: 1rem;
}
.navegation ul li{
    gap: 5vw;
    display: flex;
    font-size: 1rem;
    
}
.navegation {
 margin: 0vw 3vw 0vw 0vw;

}
.navegation  ul li a{
    text-decoration: none;
    color: black;
}
</style> 
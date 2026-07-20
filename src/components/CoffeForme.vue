<script setup>
import { adicionarCafe } from '@/Utils/Homeutils';
import { ref } from 'vue';

const nome = ref('');
const produtor = ref('');
const aroma = ref(0);
const sabor = ref(0);
const acidez = ref(0);
const corpo = ref(0);
const finalizacao = ref(0);
const obs = ref('');

function limpa() {
    nome.value = '';
    produtor.value = '';
    aroma.value = 0;
    sabor.value = 0;
    acidez.value = 0;
    finalizacao.value = 0;
    aroma.value = 0;
    obs.value = '';
}
function validar() {
    if (aroma.value > 10) {
        aroma.value = 10;
    } else if (aroma.value < 0) {
        aroma.value = 0;
    }
    if (sabor.value > 10) {
        sabor.value = 10;
    } else if (sabor.value < 0) {
        sabor.value = 0;
    }
    if (acidez.value > 10) {
        acidez.value = 10;
    } else if (acidez.value < 0) {
        acidez.value = 0;
    }
    if (corpo.value > 10) {
        corpo.value = 10;
    } else if (corpo.value < 0) {
        corpo.value = 0;
    }
    if (finalizacao.value > 10) {
        finalizacao.value = 10;
    } else if (finalizacao.value < 0) {
        finalizacao.value = 0;
    }
}

</script>

<template>
    <div class="whatever">
        <h2> Nova Avaliação</h2>
    <form action="">
        <div class="textos" style="margin-bottom: 1.5vw;">
            <div class="nome">
                <h4 style="font-weight: bolder;">Nome do Café</h4>
                <input type="text" placeholder="Ex.: Bourbon Amarelo" v-model="nome">
            </div>
            <div class="produtor">
                <h4>Produtor</h4>
                <input type="text" placeholder="Ex.: Fazenda Boa Vista" v-model="produtor">
            </div>
        </div>
        <div class="notas" style="margin-bottom: 1.5vw;">
            <h3 style="font-weight: bolder; margin-bottom: 0.5vw;">Notas SCA (0 a 10)</h3>
            <div class="inputs">
                <ul>
                    <li>
                        <h4>Aroma</h4>
                        <input type="number" v-model="aroma" max="10" min="0" step="0.1" v-on:input="validar">
                    </li>
                    <li>
                        <h4>Sabor</h4>
                        <input type="number" v-model="sabor" max="10" min="0" step="0.1" v-on:input="validar">
                    </li>
                    <li>
                        <h4>Acidez</h4>
                        <input type="number" v-model="acidez" max="10" min="0" step="0.1" v-on:input="validar">
                    </li>
                    <li>
                        <h4>Corpo</h4>
                        <input type="number" v-model="corpo" max="10" min="0" step="0.1" v-on:input="validar">
                    </li>
                    <li>
                        <h4>Finalização</h4>
                        <input type="number" v-model="finalizacao" max="10" min="0" step="0.1" v-on:input="validar">
                    </li>
                </ul>
            </div>
        </div>
        <div class="obs" style="margin-bottom: 1.5vw;">
                <h4 style="font-weight: bolder;">Observações</h4>
                <textarea placeholder="Digite suas observações sobre o café..." v-model="obs" maxlength="300"></textarea>
                <span>{{ obs.length }}/300</span>
        </div>
        <div class="stuff">
            <div class="media">
                <h3>Média SCA(calculada automaticamente)</h3>
                <span>{{ ((aroma+sabor+acidez+corpo+finalizacao)/5).toFixed(1) }}</span>
            </div>
            <div class="observ">
                <div>

                    <p>A média é calculada com base na soma das 5 notas dividas por 5</p>
                </div>
                <p>(Aroma + Sabor + Acidez + Corpo + Finalização) / 5</p>
            </div>
        </div>
        <div class="botoes">
            <button v-on:click.prevent="limpa" class="reset"><SyncIcon width="1.6vw" style="color: #2B0000;"/> Limpar</button>
            <button :disabled="nome==''||produtor==''" v-on:click.prevent="adicionarCafe(nome,produtor,aroma,sabor,acidez,corpo,finalizacao,((aroma+sabor+acidez+corpo+finalizacao)/5).toFixed(1),new Date().toLocaleString('pt-BR'),obs),limpa()" class="submit"> Salvar Avaliação</button>
        </div>
    </form>
    </div>
</template>

<style scoped>
h2 {
    display: flex;
    align-items: center;
    font-weight: bolder;
}
.botoes {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 1vw;
    margin-top: 2vw;
}
.botoes button {
    transition: 0.3s;
    cursor: pointer;
}
.botoes button:hover {
    transform: scale(1.1);
    box-shadow: 0.1vw 0.1vw 0.5vw black;
}
.reset {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    font-size: 0.7vw;
    padding: 0.1vw 2vw;
    border-radius: 0.6vw;
    border: solid #D6D0CE 0.15vw;
    background: white;
}
.submit {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    font-size: 0.7vw;
    padding: 0.1vw 2vw;
    border-radius: 0.6vw;
    border: solid #4a2a14 0.15vw;
    background: #543017;
    color: white;
}
.stuff {
    display: flex;
    justify-content: space-between;
}
.media {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 13vw;
    border: solid #F6E6D4 0.15vw;
    border-radius: 1vw;
    text-align: center;
    background: #FDF6EE;
    padding: 0.2vw;
}
.media h3 {
    font-weight: 500;
    font-size: 0.8vw;
}
.media span {
    font-weight: bolder;
    font-size: 2vw;
    color: #19500D;
}
.observ {
    max-width: 50%;
    text-align: center;
    background: #FAF8F6;
    border: solid #EDE9E6 0.15vw;
    border-radius: 1vw;
    padding: 0.5vw;
}
.observ div {
    display: flex;
    gap: 1vw;
}
.whatever {
    border: solid #F0F0F0 0.16vw;
    border-radius: 1vw;
    padding: 2vw 5vw;
    width: 40vw;
}
.textos {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.obs textarea {
    border: solid #E5E5E5 0.11vw;
    border-radius: 0.4vw;
    padding: 0.3vw 0.2vw;
    resize: none;
    width: 100%;
    height: 7vw;
    transition: 0.3s;
}
ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
}
ul li {
    display: flex;
    flex-direction: column;
}
ul li h4 {
    display: flex;
    justify-content: center;
    align-items: center;
}
input {
    border: solid #E5E5E5 0.11vw;
    border-radius: 0.4vw;
    padding: 0.3vw 0.2vw;
    transition: 0.3s;
}
input:focus {
    outline: none;
    border: solid #4a2a14 0.15vw;
    transform: scale(1.05);
}
textarea:focus {
    outline: none;
    border: solid #4a2a14 0.15vw;
    transform: scale(1.05);
}
</style>

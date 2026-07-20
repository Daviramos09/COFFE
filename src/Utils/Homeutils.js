import { coffeA } from "@/data/coffe";
import { computed } from "vue";

const cafesParticipantes = computed(() => coffeA.length);

const cafeMaiorNota = computed(() => {
  let melhorAvaliado = coffeA[0];

  for (const coffee of coffeA) {
    if (coffee.media > melhorAvaliado.media) {
      melhorAvaliado = coffee;
    }
  }

  return melhorAvaliado;
});

const cafeRecente = computed(() => {
  let ultimoCafe = coffeA[0];

  for (const cafe of coffeA) {
    if (new Date(cafe.data) > new Date(ultimoCafe.data)) {
      ultimoCafe = cafe;
    }
  }

  return ultimoCafe;
});
function adicionarCafe(nome,produtor,aroma,sabor,acidez,corpo,finalizacao,media,data,obs) {
    const ultimoId = Math.max(...coffeA.map(item => item.id));
    coffeA.push({
        id: ultimoId+1,
        nome: nome,
        produtor: produtor,
        aroma: aroma,
        sabor: sabor,
        acidez: acidez,
        corpo: corpo,
        finalizacao: finalizacao,
        media: media,
        data: data,
        observacoes: obs
    })
}
export { cafesParticipantes, cafeMaiorNota, cafeRecente, adicionarCafe };

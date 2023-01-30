const responses: string[] = [
    'Em briga de saci qualquer chute é uma voadora.',
    'Se ferradura desse sorte burro não puxava carroça!',
    'Quem cedo madruga passa o dia com sono.',
    'Dívida para mim é sagrada. Deus lhe pague!',
    'A esperança é a última que morre e a minha paciência é a primeira.',
    'Se você tem olho gordo, use colírio diet.',
    'Segundo o meu gato, sou o segundo melhor ser vivo desse mundo. O melhor é ele.',
    'Você acredita em amor à primeira vista? Ou vou ter que te visitar muitas vezes?',
    'Toda sexta-feira... Olá, Travis! Senti sua falta. Preparado para um longo fim de semana?',
    'Dizem que é importante nunca perder a esperança, acontece que eu nunca encontrei ela!',
]

export default function chooseRandomResponse() {
    const index = Math.round(Math.random() * (responses.length - 1))
    return responses[index]
}
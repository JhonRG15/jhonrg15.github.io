const pixelArt = document.querySelector('.pixel-art');
const message = document.querySelector(".txt")
const backgroundFrame = document.querySelector(".container")
let frame = 0;
const totalFrames = 5; // ajusta según el número total de frames en tu animación

function animatePixelArt() {
    pixelArt.style.backgroundImage = `url('imgs/pixil-frame-${frame}.png')`;

    frame = (frame % totalFrames) + 1;
}

function messageElect() {
    list =["Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento. Henry Ford.",
            "El objetivo no está siempre destinado a ser alcanzado, a menudo sirve simplemente como una meta a la cual que apuntar. Bruce Lee.",
            "No hay que ir para atrás ni para darse impulso. Lao Tsé.",
            "Solo imagina lo precioso que puede ser arriesgarse y que todo salga bien. Mario Benedetti.",
            "La vida es un 10% lo que te sucede y un 90% de cómo reaccionas a ello. Charles R. Swindoll.",
            "El mayor debate que existe es el que hay entre la mente y el corazon. Jhon Ruiz.",
            "Disfrutar es hacer que el día valga la pena. Jhon Ruiz",
            "Si no puedes volar, corre; si no puedes correr, camina; si no puedes caminar, gatea, pero sigue avanzando hacia tu meta. Martin Luther King.",
            "Hacerlo aún así sin estar listo, lo considero tener valor. Jhon Ruiz.",
            "Únicamente aquellos que se atreven a tener grandes fracasos, terminan consiguiendo grandes éxitos. Robert F. Kennedy.",
            "Si vas a mirar atrás, que sea para ver lo que has trabajado para llegar donde estás. Mireia Belmonte.",
            "No podemos estar en modo de supervivencia. Tenemos que estar en modo de crecimiento. Jeff Bezos.",
            "Cada fracaso enseña al individuo algo que necesitaba aprender. Charles Dickens.",
            "El que pasa el tiempo arrepintiéndose del pasado, pierde el presente y arriesga el futuro. Francisco de Quevedo.",
            "Nunca pienso en las consecuencias de fallar un gran tiro. Cuando se piensa en las consecuencias, se está pensando en un resultado negativo. Michael Jordan.",
            "Saber lo que hay que hacer elimina el miedo. Rosa Parks.",
            "La mayor parte de las grandes cosas que ha conseguido el hombre fueron declaradas imposibles antes de que alguien las hiciera. Louis D. Brandeis.",
            "La vida debe ser comprendida hacia detrás, pero debe ser vivida hacia delante. Søren Kierkegaard.",
            "Cuando era niño soñaba, pero dejé de soñar y empecé a hacer, porque es el poder de lo que se realiza lo que vuelve los sueños realidad. Usain Bolt.",
            "La vida es como montar en bicicleta. Para mantener el equilibrio tienes que avanzar. Albert Einstein.",
            "Disfrutar; asi es como cada dia vale la pena. Jhon Ruiz.",
            "Vale más actuar exponiéndose a arrepentirse de ello, que arrepentirse de no haber hecho nada. Giovanni Boccaccio.",
            "Que hoy solo sea hoy, sin el peso de ayer, sin la ansiedad de mañana. Disfruta, sonríe y haz magia con tu día porque vivir el presente es lo mejor que puedes hacer. @frases_stm.",
            "Nuevo día, nuevos pensamientos, nuevas esperanzas y nuevas oportunidades. Lailah Gifty Akita.",
            "El que tiene fe en sí mismo no necesita que los demás crean en él. Miguel de Unamuno.",
            "Lo normal no es algo a lo que aspirar, es algo de lo que debes huir. Jodie Foster.",
            "Cada historia de éxito es una historia de constante adaptación, revisión y cambio. Richard Branson.",
            "Las voluntades débiles se traducen en discursos; las fuertes, en actos. G. Le Bon.",
            "El sueño de todos puede hacerse realidad si te limitas a él y trabajas duro. Serena Williams.",
            "Demasiada gente no vive sus sueños porque está ocupada viviendo sus miedos. Les Brown.",
            "La palabra 'no' solo significa que empiezas otra vez en un nivel superior. Peter Diamandis.",
            "Lo más difícil es la decisión de actuar, el resto es meramente tenacidad. Amelia Earhart.",
            "A veces hay que pelear las batallas más de una vez para ganarlas. Margaret Thatcher.",
            "El que pasa el tiempo arrepintiéndose del pasado, pierde el presente y arriesga el futuro. Francisco de Quevedo.",
            "Trabajar duro por algo que no te importa se llama estrés. Trabajar duro por algo que te importa de verdad, se llama pasión. Simon Sinek.",
            "Cuanto más grande es la dificultad, más gloria hay en superarla. Epicuro.",
            "No preguntes cuál es tu lugar en el mundo: siéntate en él. Emilio Valcárcel.",
            "Me alegro de no estar ganando, eso significa que estoy aprendiendo. Naomi Osaka.",
            "Cuando todo el mundo está en silencio, incluso una sola voz se vuelve poderosa. Malala Yousafzai.",
            "Solo el que intenta lo absurdo es capaz de conseguir lo que parecía imposible. Miguel de Unamuno.",
            "El éxito es la suma de pequeños esfuerzos repetidos día tras día. Robert Collier.",
            "A veces la adversidad es lo que necesitas encarar para ser exitoso. Zig Ziglar.",
            "Lo que no te mata, te hace más fuerte. Friedrich Nietzsche.",
            "La vida es o una gran aventura o nada. Hellen Keller.",
            "Si tienes miedo de fallar, probablemente falles. Kobe Bryant.",
            "Todas las cosas son imposibles, mientras lo parecen. Concepción Arenal.",
            "Pies, ¿para qué os quiero? ¡Si tengo alas para volar!. Frida Kahlo.",
            "No cuentes los días, haz que los días cuenten. Muhammad Ali.",
            "No esperes. Nunca va a ser el momento adecuado. Napoleon Hill.",
            "La vida es una aventura, atrévete. Teresa de Calcuta.",
            "La vida empieza cada cinco minutos. Andreu Buenafuente.",
            "Si no pierdes, no puedes disfrutar de las victorias. Rafael Nadal.",
            "Piensa, sueña, cree y atrévete. Walt Disney.",
            "El mejor momento del día es ahora. Pierre Bonnard.",
            "La disciplina es el puente entre metas y logros. Jim Rohn.",
            "Todo lo que se puede imaginar es real. Pablo Picasso.",
            "Nunca soñé con el éxito. Trabajé por él. Estée Lauder.",
            "Te deseo que estés vivo cada día de tu vida. Jonathan Swift.",
            "Todo parece imposible hasta que se hace. Nelson Mandela.",
            "Nunca es demasiado tarde para ser lo que podrías haber sido. George Eliot.",
            "Si te caíste ayer, levántate hoy. H.G. Wells.",
            "Las oportunidades no ocurren, las creas. Chris Grosser.",
            "La adversidad te presenta a ti mismo. Oprah Winfrey.",
            "La capacidad de entusiasmo es signo de salud espiritual. Gregorio Marañón.",
            "La excelencia no es un acto, es un hábito. Aristóteles.",
            "Cada día nos trae nuevas opciones. Martha Beck.",
            "Sé el cambio que deseas ver en el mundo. Mahatma Gandhi.",
            "Quien no se mueve no siente las cadenas. Rosa Luxemburgo.",
            "Haz de cada día tu obra maestra. John Wooden.",
            "Ser buen perdedor es aprender cómo ganar. Carl Sandburg.",
            "Si la oportunidad no llama, construye una puerta. Milton Berle.",
            "Solo rindete, pero solo de pensar en hacerlo. Jhon Ruiz.",
            "Siempre es tarde para rendirse. Norman Vincent Peale.",
            "Un objetivo sin un plan es solo un deseo. Antoine de Saint-Exupéry.",
            "Vivir es nacer a cada instante. Erich Fromm.",
            "Vale más hacer y arrepentirse que no hacer y arrepentirse. Maquiavelo.",
            "Tu puedes pensar en rendirte, pero no tienes que hacerlo. Jhon Ruiz.",
            "El poder no se te da, lo tienes que coger. Beyoncé."];
    return list[(Math.floor(Math.random() * ((list.length))))];
}



function actionMove(){
    backgroundFrame.style.backgroundImage = `url('imgs/pixil-frame-background-0.png')`;
    message.textContent = messageElect();
}

setInterval(animatePixelArt, 100); // ajusta el intervalo según la velocidad deseada

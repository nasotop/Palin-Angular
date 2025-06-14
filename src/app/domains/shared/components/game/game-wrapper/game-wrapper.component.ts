import { Component, computed, input, signal } from '@angular/core';
import { Game } from '../model/game.model';
import { Category } from '../../../../enum/category.enum';
import { GameCardComponent } from '../game-card/game-card.component';
@Component({
  selector: 'app-game-wrapper',
  imports: [GameCardComponent],
  templateUrl: './game-wrapper.component.html',
  styleUrl: './game-wrapper.component.css',
})
export class GameWrapperComponent {
  games = signal<Game[]>([
    {
      title: 'El Gran Santiago',
      description:
        'Clásico juego de mesa que combina estrategia y suerte. Ideal para jugar en familia o con amigos.',
      image:
        'https://photos1.blogger.com/x/blogger/7981/39/400/958214/el%20Gran%20Santiago.jpg',
      price: 6390,
      hasDescount: false,
      category: Category.NOSTALGIC,
    },
    {
      title: 'Ludo',
      description:
        'Juego de mesa estratégico de 2 a 4 jugadores, donde compiten con cuatro fichas de principio a fin según las tiradas de un dado',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_846882-MLC69433443408_052023-O-ludo-magnetico-juego-de-mesa-tablero-30-x-30cm-funny.webp',
      price: 4490,
      hasDescount: false,
      category: Category.NOSTALGIC,
    },
    {
      title: 'Lota',
      description:
        'Juego clásico ideal para disfrutar en familia y fomentar la interacción entre los más pequeños.',
      image:
        'https://juguetestoday.com/wp-content/uploads/2024/05/8000045404-1-jpg.webp',
      price: 7990,
      hasDescount: false,
      category: Category.NOSTALGIC,
    },
    {
      title: 'Dominó',
      description:
        'Disfruta de horas de diversión y entretenimiento con el Juego de Mesa Dominó en Caja de Madera, un clásico que nunca pasa de moda.',
      image:
        'https://lapizarralibreria.cl/wp-content/uploads/2020/07/domino.jpg',
      price: 4490,
      hasDescount: false,
      category: Category.NOSTALGIC,
    },
    {
      title: 'Catan',
      description:
        'El objetivo del juego es construir pueblos, ciudades y caminos sobre un tablero que es distinto en cada partida.',
      image: 'https://www.magicsur.cl/25180-home_default/catan-el-juego.jpg',
      price: 34990,
      hasDescount: true,
      discountPercentage: 11,
      category: Category.STRATEGY,
    },

    {
      title: 'Star Realms',
      description:
        'Trepidante juego de batallas espaciales, que combina la diversión de un juego de construcción de mazos con la interacción de los juegos de cartas de combate',
      image: 'https://www.magicsur.cl/11855-home_default/star-realms-chile.jpg',
      price: 12990,
      hasDescount: false,
      category: Category.STRATEGY,
    },
    {
      title: 'Pylos: Mini',
      description:
        'En Pylos usarás tus esferas de modo estratégico para ir creando cuadrados o filas que te permitan recuperarlas tras haberlas puesto en el tablero',
      image: 'https://www.magicsur.cl/22055-home_default/pylos-mini.jpg',
      price: 22990,
      hasDescount: false,
      category: Category.STRATEGY,
    },
     {
    title: 'Mysterium: Hidden Signs',
    description: 'Los jugadores deberán averiguar cuáles han sido las circunstancias concretas en las que se ha producido la muerte del fantasma',
    image: 'https://www.magicsur.cl/11044-home_default/mysterium-hidden-signs.jpg',
    price: 20000,
    hasDescount: false,
    category: Category.FAMILY,
  },
  {
    title: 'Fantasma Blitz',
    description: 'El objetivo es ser el más rápido en agarrar la pieza correcta de madera que corresponda con la carta que se muestra. El juego consiste en cartas con imágenes de objetos y colores, y piezas de madera que representan dichos objetos',
    image: 'https://www.magicsur.cl/26950-home_default/fantasma-blitz.jpg',
    price: 13990,
    hasDescount: false,
    category: Category.FAMILY,
  },
  {
    title: 'Takenoko: Chibis',
    description: '¡Has estado cuidando al panda imperial y el emperador está muy satisfecho! Ahora te ha entregado el cuidado de un segundo animal: ¡una hembra! Tendrás que esforzarte el doble para cuidar de ambos... ¡y sus bebés!',
    image: 'https://www.magicsur.cl/20935-home_default/takenoko-chibis.jpg',
    price: 22000,
    hasDescount: false,
    category: Category.FAMILY,
  },
  {
    title: 'GenesysF',
    description: 'Genesys es una herramienta flexible para crear y jugar en una amplia variedad de juegos de rol. Su sistema de dados narrativos, reglas simples y capacidad de adaptación lo convierten en una excelente opción para los jugadores que buscan explorar diferentes géneros y estilos de juego',
    image: 'https://dojiw2m9tvv09.cloudfront.net/18085/product/M_20230607095811-114960040.png?104&time=1748202435',
    price: 16990,
    hasDescount: false,
    category: Category.ROL,
  },
  {
    title: 'Nibiru: El Juego de Rol de Ciencia Ficción',
    description: 'Los jugadores asumen el papel de "Errantes", personas que se despiertan en la estación sin recordar su pasado. La historia se desarrolla a través de un sistema de juego simple que enfatiza la escritura creativa y la construcción gradual de personajes',
    image: 'https://dojiw2m9tvv09.cloudfront.net/18085/product/M_r8ozchytugpgwklrrevabda6gqoihqvumxm6ftzy9208.jpg?104&time=1748202435',
    price: 54990,
    hasDescount: false,
    category: Category.ROL,
  },
  {
    title: 'Tinta: El Juego de Rol',
    description: 'Los jugadores asumen el papel de espíritus, almas atrapadas en un limbo que buscan escapar. Cada muerte les otorga nuevas habilidades y poderes, permitiéndoles explorar mares oscuros, combatir criaturas épicas y enfrentarse a Malvados Mayores',
    image: 'https://dojiw2m9tvv09.cloudfront.net/18085/product/M_8436607943310-1200-face3d4105.jpg?104&time=1748202435',
    price: 19990,
    hasDescount: false,
    category: Category.ROL,
  },
  {
    title: 'Clash of Cultures - Edición Monumental',
    description: 'Los jugadores deben explorar sus alrededores, construir grandes ciudades, realizar investigaciones y conquistar a quien se interponga en su camino',
    image: 'https://gatoarcano.cl/wp-content/uploads/2022/02/Mesa-de-trabajo336-350x447.jpg.webp',
    price: 179990,              // valor original (Antes)
    hasDescount: true,
    discountPercentage: 16,     // (179990 − 150990) / 179990 ≈ 0.1611 → 16%
    category: Category.WARGAME,
  },
  {
    title: 'España 1936',
    description: 'Juego de simulación que recrea los hechos acontecidos en España entre julio de 1936 y abril de 1939, un conflicto entre dos formas de concebir la España de su tiempo',
    image: 'https://gatoarcano.cl/wp-content/uploads/2024/08/Artboard572-350x447.png',
    price: 44990,
    hasDescount: false,
    category: Category.WARGAME,
  },
  {
    title: 'Tinta: El Juego de Rol',
    description: 'Los jugadores asumen el papel de espíritus, almas atrapadas en un limbo que buscan escapar. Cada muerte les otorga nuevas habilidades y poderes, permitiéndoles explorar mares oscuros, combatir criaturas épicas y enfrentarse a Malvados Mayores',
    image: 'https://dojiw2m9tvv09.cloudfront.net/18085/product/M_8436607943310-1200-face3d4105.jpg?104&time=1748202435',
    price: 19990,
    hasDescount: false,
    category: Category.WARGAME,
  }
  ]);

  title = input.required<string>();
  category = input.required<Category>();
  filteredGames = computed(() =>
    this.games().filter((game) => game.category === this.category())
  );
}

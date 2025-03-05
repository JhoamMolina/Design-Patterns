/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburguer {
  preprare: () => void;
}

interface Drink {
  pour: () => void;
}

class ChickenHambuguer implements Hamburguer {
  preprare() {
    console.log("Preparando hamburguesa de pollo");
  }
}

class beefHamburguer implements Hamburguer {
  preprare() {
    console.log("Preparando hamburguesa de res");
  }
}

class Water implements Drink {
  pour() {
    console.log("Sirviendo agua");
  }
}

class Soda implements Drink {
  pour() {
    console.log("Sirviendo refresco");
  }
}

interface RestaruantFactory {
  createHamburguer: () => Hamburguer;
  createDrink: () => Drink;
}

class FastFoodRestaurantFactory implements RestaruantFactory {
  createHamburguer(): Hamburguer {
    return new beefHamburguer();
  }

  createDrink(): Drink {
    return new Soda();
  }
}

class HeathlyRestaurantFactory implements RestaruantFactory {
  createHamburguer(): Hamburguer {
    return new ChickenHambuguer();
  }

  createDrink(): Drink {
    return new Water();
  }
}

function main(factory: RestaruantFactory) {
  const hamburguer = factory.createHamburguer();
  const drink = factory.createDrink();

  hamburguer.preprare();
  drink.pour();
}

main(new FastFoodRestaurantFactory());

main(new HeathlyRestaurantFactory());

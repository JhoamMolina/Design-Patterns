/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburguer {
  prepare: () => void;
}

class ChickenHamburguer implements Hamburguer {
  prepare() {
    console.log("Chicken Hamburguer");
  }
}
class BeefHamburguer implements Hamburguer {
  prepare() {
    console.log("Beef Hamburguer");
  }
}

class VeggieHamburguer implements Hamburguer {
  prepare() {
    console.log("Veggie Hamburguer");
  }
}

abstract class Restaurant {
  protected abstract createHamburguer(): Hamburguer;

  orderHamburguer(): void {
    const hamburguer = this.createHamburguer();
    hamburguer.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  createHamburguer(): Hamburguer {
    return new ChickenHamburguer();
  }
}

class BeefRestaurant extends Restaurant {
  createHamburguer(): Hamburguer {
    return new BeefHamburguer();
  }
}

class VeggieRestaurant extends Restaurant {
  createHamburguer(): Hamburguer {
    return new VeggieHamburguer();
  }
}

function main() {
  let restaurant: Restaurant;

  const burguerType = prompt(
    "Ingrese el tipo de hamburguesa (1: Pollo, 2: Res, 3: Veggie)"
  );

  switch (burguerType) {
    case "1":
      restaurant = new ChickenRestaurant();
      break;
    case "2":
      restaurant = new BeefRestaurant();
      break;
    case "3":
      restaurant = new VeggieRestaurant();
      break;
    default:
      throw new Error("Tipo de hamburguesa no válido");
  }

  restaurant.orderHamburguer();
}

main();

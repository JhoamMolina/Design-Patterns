/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBalls {
  private static instance: DragonBalls;
  private ballsCollected: number;

  private constructor() {
    this.ballsCollected = 0;
  }

  public static getInstance(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls();
      console.log("Se ha creado una instancia de DragonBalls");
    }
    return DragonBalls.instance;
  }

  public collectBall(): void {
    if (this.ballsCollected < 7) {
      this.ballsCollected++;
      console.log(`Has recolectado ${this.ballsCollected} esferas del dragón`);
      return;
    }

    console.log("Ya has recolectado las 7 esferas del dragón");
  }

  public summongShenlong(): void {
    if (this.ballsCollected === 7) {
      console.log("Has invocado a Shenlong, pide tu deseo");
      this.ballsCollected = 0;
      return;
    }

    console.log("No puedes invocar a Shenlong sin las 7 esferas del dragón");
  }
}

function main() {
  const goku = DragonBalls.getInstance();
  goku.collectBall();
  goku.collectBall();
  goku.collectBall();

  goku.summongShenlong();

  const vegeta = DragonBalls.getInstance();
  vegeta.collectBall();
  vegeta.collectBall();
  vegeta.collectBall();
  vegeta.collectBall();
  goku.summongShenlong();
  vegeta.summongShenlong();
}

main();

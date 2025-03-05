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

import { configManager } from "./singleton/config-manager.ts";

configManager.setConfig("theme", "dark");
configManager.setConfig("fontSize", "16px");
configManager.setConfig("language", "es");

console.log(configManager.getAllConfig());
console.log(configManager.getConfig("theme"));
console.log(configManager.getConfig("fontSize"));
console.log(configManager.getConfig("language"));

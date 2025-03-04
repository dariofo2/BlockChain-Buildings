# BLOCKCHAIN BUILDINGS

## ¿Qué es?

Blockchain Buildings está formado por:

* Un nodo de BlockChain de Ethereum Local (FrameWork:HardHat, que recibe peticiones HTTP y Websockets en el puerto 8385).

* Un Smart Contract (Buildings) que monta un nuevo Token ERC20 y la manera de minarlo es comprando edificios y alquilándolos. Programado en Solidity.

* Un Frontend que usa Next.js para montar el servidor Web y Web3.js para comunicarse por Fetchs a la Blockchain usando el Smart Contract.

## Lenguajes de Programación

* Solidity: Lenguaje de programación usado para crear los Smart Contracts de Ethereum. (.sol)

* JavaScript: Lenguaje usado para la Web (.js)

* TypeScript: JavaScript con Tipado (.ts)

* TypeScriptReact: Typescript para React (.tsx)

## Smart Contract

El Smart Contract está programado en Solidity en la ubicación

    BlockChain_Buildings/blockchain/contracts/buildings/buildings.sol

Esto se compila con el compilador "Solc", se genera un buildings.json que contiene el "ABI" y el "BYTECODE", y esto se sube a la BlockChain, al crearlo se crea una Dirección de Contrato, a través de la cual se puede acceder a él.

Para poder subirlo a la Blockchain necesitamos:
* el ABI
* el BYTECODE
* Una cuenta que es la que lo crea
* Una librería como Web3.js que nos simplifique el proceso del Fetch

Para poder interactuar con el necesitamos:
* El ABI
* La Dirección del Smart Contract
* Una cuenta que es la que interactua
* Una librería como Web3.js que nos simplifique el proceso del Fetch

## ¿Cómo funciona?

**Mirar primero Instrucciones de Uso.** 

Al entrar en el servidor Web http://localhost:3000 tenemos un menú para meter el Private Key de la cuenta que quieras usar.

## Instrucciones de Uso

### Usando Docker (Metodo más fácil)

1. En la carpeta Raíz del proyecto, ejecutar en terminal:

``` sh
docker compose up
 ```

2. Esto monta automaticamente dos contenedores Docker, uno para montar el BlockChain (Nombre BlockChain y puerto 8385) y otro para añadir el Smart Contract y montar el Frontend con Web3 (Nombre Frontend y puerto 3000).

3. Para acceder al Servidor, accede a la dirección: http://localhost:3000

### Manual (Metodo más difícil)
1. **Requerimientos:** Node.js y NPM instalados.
2. Tanto en blockchain_buildings/frontend como en blockchain_buildings/blockchain escribir en terminal:

```
npm install
```

3. **Montar el Blockchain con HardHat**. Desde blockchain_buildings/blockchain ejecutar en terminal:

```
npx hardhat node
```

4. **Subir el Contrato**. Desde blockchain_buildings/frontend/src/BuildingsFront ejecutar en terminal:
```
node deploySmartContract.js
```

5. Ejecutar el Servidor de Frontend con Next.js. Desde blockchain_buildings/frontend ejecutar en terminal:
```
npm run dev
```

6. Para acceder al Servidor, accede a la dirección: http://localhost:3000

### Address, Accounts and Private Keys

Cuando ejecutas el servidor (Tanto con Docker como manual) en la consola salen 20 cuentas y su dirección así como su Private Key.

Vienen con 10.000 Ethereum cada una, cuando reinicias el servidor se pierden tanto las cuentas como los contratos.

Usa las que quieras.
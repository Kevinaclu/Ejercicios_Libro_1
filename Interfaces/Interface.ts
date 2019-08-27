interface Lakes {
    name: string,
    area: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[],
    frozen?: string[],
    [extraProp: string]: any
}

let firstLake: Lakes = {
    name: 'Caspian Sea',
    length: 1199,
    depth: 1025,
    area: 371000,
    isFreshwater: false,
    countries: ['Kazakhstan', 'Russia', 'Turkmenistan', 'Azerbaijan', 'Iran']
}

let secondLake: Lakes = {
    name: 'Superior',
    depth: 406.3,
    length: 616,
    area: 82100,
    isFreshwater: true,
    countries: ['Canada', 'United States']
}

let thirdLake: Lakes = {
    name: 'Baikal',
    depth: 1637,
    length: 636,
    area: 31500,
    isFreshwater: true,
    countries: ['Russia'],
    frozen: ['January', 'February', 'March', 'April', 'May']
}

let fourthLake: Lakes = {
    name: 'Tanganyika',
    depth: 1470,
    length: 676,
    area: 32600,
    isFreshwater: true,
    countries: ['Burundi', 'Tanzania', 'Zambia', 'Congo'],
    kigoma: 'Tanzania',
    kalemie: 'Congo',
    bujumbura: 'Burundi'
}

interface Enemy {
    readonly size: number,
    health: number,
    range: number,
    readonly damage: number
}

let tank: Enemy = {
    size: 50,
    health: 100,
    range: 60,
    damage: 12
}

// This is Okay
tank.health = 95;
// Error because 'damage' is read-only.
tank.damage = 10;

interface EnemyHit {
    (name: Enemy, damageDone: number): number;
}

let tankHit: EnemyHit = function (tankName: Enemy, damageDone: number) {
    tankName.health -= damageDone;
    return tankName.health;
}
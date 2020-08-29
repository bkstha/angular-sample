
interface IInventory {
    id: number;
    name: string;
    stock: number;

    setInventory(inventory: IInventory);
}

export class Inventory implements IInventory {
    constructor() { }

    id: number;
    name: string;
    stock: number;
    setInventory(inventory: IInventory) {
        this.id = inventory.id;
        this.name = inventory.name;
        this.stock = inventory.stock;
    }
}
export class CartItem {
    constructor(public name: string, public description: string, public imagePath: string, 
                public unitPrice: number, public quantity: number, public totalPrice: number) {}
}

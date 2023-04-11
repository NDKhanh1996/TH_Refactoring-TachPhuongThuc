export class Cylinder {

    private static baseArea(radius: number): number{
        return Math.PI * radius * radius;
    }
    private static perimeter(radius: number): number{
        return 2 * Math.PI * radius;
    }
    public static getVolume(radius: number, height: number): number {
        return  this.perimeter(radius) * height + 2 * this.baseArea(radius);
    }
}
export interface IOrdererInfo {
	Name: string;
	Phone: string;
	Email: string;
}

export class OrdererInfo implements IOrdererInfo {
	public Phone: string = '';
	public Email: string = '';
	public Name: string = '';
}

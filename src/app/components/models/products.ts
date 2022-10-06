export interface IProducts {
  id: number,
  title: string,
  price: number,
  image?: string,
  configure: IProductsConfig,
  year: number;

}

export interface IProductsConfig {
  chip: string,
  SSD: string,
  memory: string,
  display: string;
}

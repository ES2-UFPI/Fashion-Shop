import { productMemoryDatabase } from './datas/productMemory.database.js';
import { userMemoryDatabase } from './datas/userMemory.database.js';
import { cartMemoryDatabase } from './datas/cartMemory.database.js';
import { orderMemoryDatabase } from './datas/orderMemory.database.js';

export const userMemory = userMemoryDatabase;
export const productMemory = productMemoryDatabase;
export const cartMemory = cartMemoryDatabase;
export const orderMemory = orderMemoryDatabase;
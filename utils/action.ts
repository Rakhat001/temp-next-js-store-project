'use server'
import db from './db'
import { redirect } from 'next/navigation'

export const fetchFeaturedProducts = async () => {
  try {
    const products = await db.product.findMany({
      where: {
        featured: true
      }
    })
    return products
  } catch (error) {
    console.error(error)
  }
}


export const fetchAllProducts = ({ search = '' }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } }
      ]
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
}



export const fetchSingleProduct = async(productId:string) =>{
  const product = await db.product.findUnique({
    where:{
      id:productId
    },
  });
  if(!product) redirect('/products');
  return product
}


export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  return { message: 'product created' };
};
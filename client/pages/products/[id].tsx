import React from 'react'
import Image from 'next/image';
import styles from '../../styles/Product.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../cart_redux/cart.slice';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import {Product} from '../../interfaces'



function Product({product}: {product: Product}) {
  const dispatch = useDispatch();
  // const router = useRouter()
  // const {id} = router.query
  // const product = products.find(pro => pro.id == id)

  return (
    <div className={styles.product}>
      <h1>{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title} width={300} height={300}
        className={product.image}
      ></Image>
      <p><span className={styles.price}>{product.price}kr/stk</span>  Category: {product.category} </p>
      <button className={styles.button} onClick={() => {
        dispatch(addToCart(product))
      }}>Add to Cart 🛒</button>
      <p>{product.description}</p>
    </div>

  )
}

//generate generate dynamic routing page statically with getStaticPaths() and getStaticProps()
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  const paths = products.map((pro: Product) => ({ params: { id: pro.id.toString() }}))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  // the params comes from getStaticPath 
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product = await res.json()
  return { props: { product } }
}

export default Product
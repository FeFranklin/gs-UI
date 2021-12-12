import * as React from "react"
import './styles.scss';
import Widget from '../components/Widget'

const IndexPage = () => {
  const typeVerb = 'collects';
  const [products, setProducts] = React.useState(null)

  React.useEffect(() => {
    fetch('https://getgreenspark.mocklab.io/products')
        .then(response => response.json())
        .then(data => setProducts(data));
  }, [])

  return (
    <main className="main__page">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Home Page</title>
      <h1 className="main__page__heading">
        Per product widgets
        </h1>
      <div className="widgets__container">
        {products?.length && products.map((product, index) => {
          return (<Widget typeVerb={typeVerb} product={product} id={product?.id} />)
        })}
      </div>
    </main>
  )
}

export default IndexPage

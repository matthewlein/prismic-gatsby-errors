import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query PageQuery($uid: String) {
    prismic {
      allProducts(uid: $uid) {
        edges {
          node {
            product_name,
            product_description,
            product_image,
          }
        }
      }
    }
  }
`

const Page = props => {
  const doc = props.data.prismic.allProducts.edges.slice(0, 1).pop()
  if (!doc) return null
  return (
    <div>
      {doc.node.product_name.map(({ text }) => (<h1>Product: {text}</h1>))}
    </div>
  )
}

export default Page

import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query PageQuery($uid: String) {
    prismic {
      allProducts(uid: $uid) {
        edges {
          node {
            product
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
      <h1>Product: {doc.node.product.title}</h1>
    </div>
  )
}

export default Page

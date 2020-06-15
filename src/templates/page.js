import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

export const query = graphql`
query ($id: ID!) {
    wpgraphql {
      page(id: $id){
        title
        content
      }
    }
  }
  `

const Page = ({data}) => {
    const page = data.wpgraphql.page
    return(
    <Layout>
    <div>
        <div dangerouslySetInnerHTML={{__html: page.content}} />
    </div>
    </Layout>
    )
}

export default Page
import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import GlobalStyles from '../components/GlobalStyles';

function IndexPage(props) {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
      
    
    `)
    return (
        <GlobalStyles>
          <h1>Hallo</h1>
           {data.site.siteMetadata.title} 
           </GlobalStyles>
    );
}

export default IndexPage;
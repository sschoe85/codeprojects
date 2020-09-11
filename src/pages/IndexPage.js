import React from 'react';
import {graphql, useStaticQuery} from "gatsby";

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
        <div>
           {data.site.siteMetadata.title} 
        </div>
    );
}

export default IndexPage;
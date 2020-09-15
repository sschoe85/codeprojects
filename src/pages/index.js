import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import GlobalStyles from '../components/GlobalStyles';
import CalltoActionButton from '../components/CalltoActionButton';

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
        <GlobalStyles/>
          <h1>Hallo</h1>
           {data.site.siteMetadata.title} 
           <CalltoActionButton size = "small">Test</CalltoActionButton>
           </div>
    );
}

export default IndexPage;
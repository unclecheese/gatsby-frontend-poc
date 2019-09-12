import React from 'react';
import { graphql } from 'gatsby';
import Page from '../Page';

const PageLayout = ({ data: { silverStripeDataObject } }) => {
    return (
    <Page>
        <h1>Welcome to the home page!</h1>
        <h2>{silverStripeDataObject.title}</h2>
        <div dangerouslySetInnerHTML={{__html: silverStripeDataObject.content}} />
    </Page>
    );
};

// export const pageQuery = graphql`
//     query($link: String!) {
//         silverStripeDataObject(link: { eq: $link }) {
//             SilverStripeSiteTree {
//                 title
//                 content
//             }
//             GatsbyTestHomePage {
//                 valueStatement
//             }
//         }
//     }
// `;

export default PageLayout;
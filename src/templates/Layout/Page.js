import React from 'react';
import { graphql } from 'gatsby';
import Page from '../Page';

const PageLayout = ({ data: { silverStripeDataObject } }) => {
    return (
    <Page>
        {/* <Menu pageID={silverStripeDataObject.silverstripe_id} level={1} /> */}
        <h2>{silverStripeDataObject.SilverStripeSiteTree.title}</h2>
        <div dangerouslySetInnerHTML={{__html: silverStripeDataObject.SilverStripeSiteTree.content}} />
    </Page>
    );
};

// export const pageQuery = graphql`
//     query($link: String!) {
//         silverStripeDataObject(link: { eq: $link }) {
//             silverstripe_id
//             SilverStripeSiteTree {
//                 title
//                 content
//             }
//         }
//     }
// `;

export default PageLayout;
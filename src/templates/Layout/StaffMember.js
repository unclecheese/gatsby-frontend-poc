import React from 'react';
import { graphql } from 'gatsby';
import Page from '../Page';
const PageLayout = ({ data: { silverStripeDataObject } }) => {
    return (
    <Page>
        <h2>{silverStripeDataObject.name}</h2>
        <h2>{silverStripeDataObject.jobTitle}</h2>
        <img src={`http://gatsby-cms.local/${silverStripeDataObject.photo.link}`} />
    </Page>
    );
};

// export const pageQuery = graphql`
//     query($link: String!) {
//         silverStripeDataObject(link: { eq: $link }) {
//             GatsbyTestStaffMember {
//                 name
//                 jobTitle
//                 Photo {
//                     link
//                 }
//             }
//         }
//     }
// `;

export default PageLayout;
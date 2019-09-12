import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Page from '../Page';

const PageLayout = ({
    data: {
        silverStripeDataObject: {
            GatsbyTestStaffPage: {
                title, content, StaffMembers 
            }
        }
    }
}) => {
    return (
    <Page>
        <h2>{silverStripeDataObject.title}</h2>
        <div dangerouslySetInnerHTML={{__html: silverStripeDataObject.content}} />
        {silverStripeDataObject.StaffMembers.map(staff => {
            return (
                <>
                <h3><Link to={staff.link}>{staff.name}</Link></h3>
                <h4>{staff.jobTitle}</h4>
                <img src={`http://gatsby-cms.local/${staff.Photo.link}`} />
                </>
            );
        })}
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
//             GatsbyTestStaffPage {
//                 StaffMembers {
//                     GatsbyTestStaffMember {
//                         name
//                         jobTitle
//                         Photo {
//                             link
//                         }
//                     }   
//                 }
//             }
//         }
//     }
// `;

PageLayout.propTypes = {
    data: PropTypes.shape({
        silverStripeDataObject: PropTypes.shape({
            GatsbyTestStaffPage: PropTypes.shape({
                title: PropTypes.string,
                content: PropTypes.string,
                StaffMembers: PropTypes.arrayOf(PropTypes.shape({
                    name: PropTypes.string,
                    jobTitle: PropTypes.string,
                    Photo: PropTypes.shape({
                        link: PropTypes.string,
                    })
                }))
            })
        })
    })
};

PageLayout.defaultProps = {
    data: {}
};

export default PageLayout;
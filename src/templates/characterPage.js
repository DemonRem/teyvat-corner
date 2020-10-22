import React from 'react';
import { graphql } from 'gatsby';

import Sidebar from '../components/sidebar';
import TableOfContents from '../components/table-of-contents';
import Layout from '../components/layout/layout';
import ProfileCard from '../components/profile_card';
import SEO from '../components/seo';

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html, tableOfContents } = markdownRemark;

    console.log(tableOfContents);

    return (
        <Layout>
            <SEO title={frontmatter.basic_info.name} />
            <Sidebar />
            <div className="content-main">
                <TableOfContents toc={tableOfContents} />
                <ProfileCard {...frontmatter} />
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            tableOfContents
            frontmatter {
                slug
                basic_info {
                    name
                    rarity
                    weapon
                    vision
                }
                bio {
                    sex
                    birthday
                    constellation
                    region
                    affiliation
                    obtain_method
                }
                voice_actors {
                    chinese
                    japanese
                    korean
                }
                image {
                    childImageSharp {
                        fixed(width: 250) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`

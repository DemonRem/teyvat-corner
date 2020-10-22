exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        createNodeField({
            node,
            name: 'slug',
            value: node.frontmatter.slug,
        })
    }
}

exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const characterPageTemplate = require.resolve('./src/templates/characterPage.js');
    const result = await graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        fields {
                            slug
                        }
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
                                        base64
                                        width
                                        height
                                        src
                                        srcSet
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL Query`);
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: characterPageTemplate,
            context: {
                slug: node.frontmatter.slug,
            }
        });
    });
}

const postsQuery = `{
    posts: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        ) {
        totalCount
        edges {
            node {
                objectID: id
                fields {
                    slug
                }
                frontmatter {
                    date_timestamp: date
                    date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                    tags
                    title
                    description
                }
                excerpt(pruneLength: 5000)
            }
        }
    }
}`

const flatten = arr =>
    arr.map(({node: {frontmatter, ...rest}}) => ({
        ...frontmatter,
        date_timestamp: parseInt(
            (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
        ),
        ...rest
    }));

const queries = [
    {
        query: postsQuery,
        transformer: ({ data }) => flatten(data.posts.edges), // optional
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // overrides main index name, optional
        settings: {
          attributesToSnippet: ['excerpt:20']
        },
    },
];

module.exports = queries;
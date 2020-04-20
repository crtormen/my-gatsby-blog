/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

// Add slug to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

const createTagPages = (createPage, posts) => {
	const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js');
	const singleTagIndexTemplate = path.resolve('src/templates/singleTagIndex.js');

	const postsByTag = {};

	posts.forEach(({node}) => {
		if (node.frontmatter.tags) {
			node.frontmatter.tags.forEach(tag => {
				if (!postsByTag[tag])
					postsByTag[tag] = []
				postsByTag[tag].push(node);
			})
		} 
	})

	const tags = Object.keys(postsByTag);

	createPage({
		path: '/tags',
		component: allTagsIndexTemplate,
		context: {
			tags: tags.sort()
		}
	})

	tags.forEach(tagName => {
		const posts = postsByTag[tagName];

		createPage({
			path:`/tags/${tagName}`,
			component: singleTagIndexTemplate,
			context: {
				posts,
				tagName
			}
		})
	})
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;	
	const blogPostTemplate = path.resolve('src/templates/blogPost.js');
	const blogListTemplate = path.resolve('src/templates/blogList.js');
	
	// Query for markdown nodes to use in creating pages.
	const result = await graphql(`
	{
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			totalCount
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
					  date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
					  tags
					  title
					  description
					}
					timeToRead
					excerpt(pruneLength: 250)
					id
				  }
				next {
					frontmatter {
						title
					}
					fields {
						slug
					}
				}
				previous {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
	}
	`)
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const posts = result.data.allMarkdownRemark.edges;

	createTagPages(createPage, posts);
	posts.forEach(({ node, next, previous }, index) => {
		const slug = node.fields.slug;
		createPage({
			path: slug,
			component: blogPostTemplate,
			context: { 
				slug,
				previousPost: next,
				nextPost: previous
			}
		});
		});

	const postsPerPage = 6;
	const numPages = Math.ceil(posts.length/postsPerPage);

	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0? '/':`/page/${i+1}`,
			component: blogListTemplate,
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i+1
			}
		})
	});
};

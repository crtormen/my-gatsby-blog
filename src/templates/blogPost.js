import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';  
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';

import * as S from '../components/Post/styled';

const Template = ({ data, pageContext }) => {
	const post = data.markdownRemark;
	const { title, date, description } = post.frontmatter;
    const { nextPost, previousPost } = pageContext;

	return (
		<Layout>
			<SEO title={title}/>
			<S.PostHeader>
				<S.PostDate>
					{date} • {post.timeToRead} min de leitura
				</S.PostDate>
				<S.PostTitle>{title}</S.PostTitle>
				<S.PostDescription>{description}</S.PostDescription>
			</S.PostHeader>
			<S.MainContent>
				<div className="blogpost" dangerouslySetInnerHTML={{ __html: post.html }} />
			</S.MainContent>
			<RecommendedPosts next={nextPost} previous={previousPost} />
			<Comments url={post.fields.slug} title={title} />
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			excerpt
			timeToRead
			fields {
				slug
			}
			frontmatter {
				date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
				tags
				title
				description
				category
			}
		}
	}`

export default Template;
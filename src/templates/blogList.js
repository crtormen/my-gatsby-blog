import React from 'react'
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';    
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';

import * as S from "../components/ListWrapper/styled"

const BlogList = ({ data, pageContext }) => {
    const postList =  data.allMarkdownRemark.edges;
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
    const nextPage = `/page/${currentPage + 1}`

    return (
        <Layout>
            <SEO title="Home"/>
            <S.ListWrapper>
                { postList.map(({
                        node: { 
                            frontmatter, 
                            timeToRead, 
                            excerpt, 
                            id,
                            fields: {slug} 
                        }
                    }) => (
                            <PostItem slug={slug} {...frontmatter} excerpt={excerpt} timeToRead={timeToRead} key={id} />
                    ))
                }
            </S.ListWrapper>
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                numPages={numPages}
                prevPage={prevPage}
                nextPage={nextPage} 
            />
        </Layout>
    )
}

export const query = graphql`
    query PostList($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { order: DESC, fields: frontmatter___date }
            limit: $limit
            skip: $skip
            ) {
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
                    category
                    }
                    timeToRead
                    excerpt(pruneLength: 250)
                    id
                }
            }
        }
    }`

    export default BlogList;
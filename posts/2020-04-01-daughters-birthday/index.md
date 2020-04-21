---
date: '2020-04-01'
title: 'Isa`s birthday'
tags: ['react', '2020']
category: 'React'
description: 'Second Post of my blog'
---

Lorem Anim ad Lorem ex amet. Eiusmod ipsum commodo nulla sint do. Consequat ipsum aliqua laboris consequat magna. Occaecat esse exercitation occaecat duis aute qui consectetur aute laborum veniam veniam occaecat. 

![Isabella](/assets/img/isa.jpeg)

Sunt eu incididunt mollit fugiat quis quis. Proident laborum qui voluptate in elit est quis ut sint ut. Consequat nisi commodo sunt voluptate officia nisi veniam occaecat amet nulla.

```
mport PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';

const BlogList = ({ data, pageContext }) => {
    const postList =  data.allMarkdownRemark.edges;
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
    const nextPage = `/page/${currentPage + 1}`

```

"use client";

import { gql, DocumentNode } from "@apollo/client";

export const GET_CATEGORIES: DocumentNode = gql`
  query GetCategories($page: Float, $perPage: Float) {
    getCategories(getCategoriesDto: { page: $page, perPage: $perPage }) {
      categories {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;

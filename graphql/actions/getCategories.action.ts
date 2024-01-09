"use client";

import { gql, DocumentNode } from "@apollo/client";

export const GET_CATEGORIES: DocumentNode = gql`
  query GetCategories($page: Float, $perPage: Float) {
    getCategories(getCategoriesDto: { page: $perPage, perPage: $page }) {
      categories {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;

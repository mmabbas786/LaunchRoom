import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    imageAlt,
    featured,
    readingTime,
    tags,
    publishedAt,
    updatedAt,
    "category": category->{
      title,
      "slug": slug.current,
      description
    }
  }
`;

export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true && defined(slug.current)] | order(publishedAt desc) [0..2] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    imageAlt,
    featured,
    readingTime,
    publishedAt,
    "category": category->{
      title,
      "slug": slug.current
    }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    imageAlt,
    featured,
    readingTime,
    tags,
    publishedAt,
    updatedAt,
    body,
    seoTitle,
    seoDescription,
    ogImage,
    "category": category->{
      title,
      "slug": slug.current,
      description
    }
  }
`;

export const postsByCategoryQuery = groq`
  *[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    imageAlt,
    featured,
    readingTime,
    tags,
    publishedAt,
    updatedAt,
    "category": category->{
      title,
      "slug": slug.current,
      description
    }
  }
`;

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`;

export const relatedPostsQuery = groq`
  *[_type == "post" && category->slug.current == $categorySlug && slug.current != $currentSlug] | order(publishedAt desc)[0..2] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    imageAlt,
    readingTime,
    publishedAt,
    "category": category->{
      title,
      "slug": slug.current
    }
  }
`;

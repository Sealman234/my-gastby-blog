import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import StaticAvatar from "../../static/avatar.jpeg";

function SEO({ description, lang, image: metaImage, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : `${site.siteMetadata.siteUrl}${StaticAvatar}`;
  const rawCanonical = pathname
    ? `${site.siteMetadata.siteUrl}/${pathname}`
    : site.siteMetadata.siteUrl;
  const canonical = rawCanonical.endsWith("/")
    ? rawCanonical.slice(0, -1)
    : rawCanonical;
  const defaultTitle = site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle && pathname ? `${title} | ${defaultTitle}` : title}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:url",
          content: canonical,
        },
        {
          property: "og:site_name",
          content: defaultTitle,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "twitter:site",
          content: "@sealman234",
        },
        {
          name: "twitter:creator",
          content: "@sealman234",
        },
        {
          property: "og:image",
          content: image,
        },
      ].concat(
        metaImage
          ? [
              {
                property: "og:image:width",
                content: metaImage.width,
              },
              {
                property: "og:image:height",
                content: metaImage.height,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
          : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
      )}
    />
  );
}

SEO.defaultProps = {
  lang: "zh-Hant-TW",
  description: "",
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
};

export default SEO;

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  // Netlifyの_redirectsファイルを生成
  createRedirect({
    fromPath: 'https://enjoyhk-blog.netlify.com/*',
    toPath: 'https://enjoyhk.nakamu.life/:splat',
    isPermanent: true,
    force: true
  })
}
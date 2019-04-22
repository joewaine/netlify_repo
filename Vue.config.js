const siteNumber = 83; // Update this variable to the site number of your Wordpress instance.
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const path = require("path");
// /*
// Use this config when creating a Microsoft GEP site that
// will be deployed to a Wordpress isntance.
// The purpose of the config is to create a build that has a directory structure that resembeles
// that of a Wordpress asset that has been uploaded to a Media Library (/wp-content/uploads/sites/<site-number>/<year>/<month>)
// The "siteNumber" variable of this config needs to be set to the site number of the dedicated Wordpress instance of the project.
// This number can be found by inspecting the source url of any asset uploaded to the site and
// is a number that comes immediately after /sites/ portion of the url.
// */
module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.module
        .rule("svg")
        .use("file-loader")
        .tap(options =>
          Object.assign(options, {
            name: `wp-content/uploads/sites/${siteNumber}/[name].[hash].[ext]`
          })
        );
      ['images', 'media', 'fonts'].forEach(rule => {        
        config.module.rule(rule).use('url-loader').loader("file-loader")
          .tap(options =>
            Object.assign(options, {
              name: `wp-content/uploads/sites/${siteNumber}/[name].[hash].[ext]`
            })
          );
      })
 
    }
  },
  css: {
    extract: {
      filename: "[name].[hash].css",
      chunkFilename: "[name].[hash].css"
    }
  },
  configureWebpack: {
    
    module: {
      rules: [
//not sure if this is needed anymore
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: `wp-content/uploads/sites/${siteNumber}/[name].[hash].[ext]`
              }
            }
          ]
        }
      ]
    },
    output: {
      filename: "[name].[hash].js",
      chunkFilename: "[name].[hash].js"
    },
    optimization: {
      splitChunks: false
    }
  }
};






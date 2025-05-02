// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // survey-react-ui의 .mjs를 ESM으로 처리하도록
        webpackConfig.module.rules.push({
          test: /\.mjs$/,
          include: /node_modules\/survey-react-ui/,
          type: "javascript/auto",
        });
        return webpackConfig;
      },
    },
  };
  
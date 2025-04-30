module.exports = {
	trailingSlash: true,
	reactStrictMode: false,
	output: 'standalone',
	eslint: {
		ignoreDuringBuilds: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	images: {
		domains: ['symverse.s3.ap-northeast-2.amazonaws.com'],
	},
};

/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["@web3-boilerplate/ui"],
	reactStrictMode: true,
	images: { imageSizes: [16, 32, 48, 64, 96, 128, 256, 384] },
	webpack: (config) => {
		config.externals.push("pino-pretty", "lokijs", "encoding");
		return config;
	},
};

export default nextConfig;

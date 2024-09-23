import type { PropsWithChildren } from "react";

import { ThemeProvider as ThemeProviderPrimitive } from "@web3-boilerplate/ui/utils/theme-provider";

/**
 * Theme provider.
 */
const ThemeProvider = ({ children }: PropsWithChildren) => (
	<ThemeProviderPrimitive
		attribute="class"
		defaultTheme="system"
		enableSystem
		disableTransitionOnChange
	>
		{children}
	</ThemeProviderPrimitive>
);

export { ThemeProvider };

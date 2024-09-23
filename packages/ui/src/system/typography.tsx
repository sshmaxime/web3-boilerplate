import { cn } from "@web3-boilerplate/ui/utils/cn";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {}

const H1 = ({ children, className, ...props }: TypographyProps) => (
	<h1
		className={cn("text-left text-[32px] leading-10 font-medium", className)}
		{...props}
	>
		{children}
	</h1>
);

const H2 = ({ children, className, ...props }: TypographyProps) => (
	<h1
		className={cn("text-left text-[16px] leading-6 font-medium", className)}
		{...props}
	>
		{children}
	</h1>
);

const H3 = ({ children, className, ...props }: TypographyProps) => (
	<h1
		className={cn("text-left text-[20px] leading-6 font-medium", className)}
		{...props}
	>
		{children}
	</h1>
);

const H4 = ({ children, className, ...props }: TypographyProps) => (
	<h1
		className={cn("text-left text-[12px] leading-4 font-medium", className)}
		{...props}
	>
		{children}
	</h1>
);

const H5 = ({ children, className, ...props }: TypographyProps) => (
	<h1
		className={cn(
			"text-left text-[12px] leading-4 font-medium text-gray-400",
			className,
		)}
		{...props}
	>
		{children}
	</h1>
);

const H6 = ({ children, className, ...props }: TypographyProps) => (
	<h1
		className={cn("text-left text-[28px] leading-9 font-medium", className)}
		{...props}
	>
		{children}
	</h1>
);

const P = ({ children, className, ...props }: TypographyProps) => (
	<p className={cn(className)} {...props}>
		{children}
	</p>
);

export { H1, H2, H3, H4, H5, H6, P };

import { Box } from "@web3-boilerplate/ui/system/base/box";
import { cn } from "@web3-boilerplate/ui/utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = ({ children, className, ...props }: ContainerProps) => (
	<Box
		className={cn(
			"mx-auto max-w-[--app-w] px-[--app-px] box-content w-[calc(100vw-2*var(--app-px))]",
			className,
		)}
		{...props}
	>
		{children}
	</Box>
);

export { Container };

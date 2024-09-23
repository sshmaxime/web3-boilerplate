import { Container } from "@web3-boilerplate/ui/system/base/container";
import { cn } from "@web3-boilerplate/ui/utils/cn";
import type { PropsWithChildren } from "react";
import type { ClassNameValue } from "tailwind-merge";

type HeaderProps = {
	className?: ClassNameValue;
} & PropsWithChildren;

const Header = ({ children, className }: HeaderProps) => (
	<Container className={cn("h-16", className)}>{children}</Container>
);

export { Header };

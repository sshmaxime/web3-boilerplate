import { Container } from "@web3-boilerplate/ui/system/base/container";
import { cn } from "@web3-boilerplate/ui/utils/cn";
import type { PropsWithChildren } from "react";
import type { ClassNameValue } from "tailwind-merge";

type FooterProps = {
	className?: ClassNameValue;
} & PropsWithChildren;

const Footer = ({ children, className }: FooterProps) => (
	<Container className={cn("h-16", className)}>{children}</Container>
);

export { Footer };

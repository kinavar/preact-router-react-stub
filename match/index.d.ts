import React from 'react';

import { Link as StaticLink, RoutableProps } from '..';

export class Match extends React.Component<RoutableProps, {}> {
	render(): React.VNode;
}

export interface LinkProps extends React.JSX.HTMLAttributes<HTMLAnchorElement> {
	activeClassName?: string;
	children?: React.ComponentChildren;
}

export function Link(props: LinkProps): React.VNode;

export default Match;

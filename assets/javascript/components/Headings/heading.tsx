import React, { ReactElement, HTMLAttributes } from 'react';

export type HeadingProps = {
    /**
     * html element to be rendered
     */
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLAttributes<HTMLHeadingElement>;

export function Heading({ children, element, className }: HeadingProps): ReactElement {
    const Element = element || 'h1';
    return <Element className={className}>{children}</Element>;
}

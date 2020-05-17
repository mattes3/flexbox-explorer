import React from 'react';

type HorizontalAlignment = 'left' | 'center' | 'right';
type VerticalAlignment = 'top' | 'middle' | 'bottom';

function justifyH(alignment: HorizontalAlignment = 'left') {
    if (alignment === 'center') return 'center';
    if (alignment === 'right') return 'flex-end';
    return 'flex-start';
}

function justifyV(alignment: VerticalAlignment = 'top') {
    if (alignment === 'middle') return 'center';
    if (alignment === 'bottom') return 'flex-end';
    return 'flex-start';
}

export function rowStyles(hAlign: HorizontalAlignment): React.CSSProperties {
    return {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: justifyH(hAlign),
    };
}

export function columnStyles(vAlign: VerticalAlignment): React.CSSProperties {
    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justifyV(vAlign),
        // alignItems: 'stretch'
    };
}

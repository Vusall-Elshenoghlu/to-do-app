import React from 'react';

interface ColorDotProps {
    color: string;
    size?: number;
}

const ColorDot: React.FC<ColorDotProps> = ({
                                               color,
                                               size = 12,
                                           }) => {
    return (
        <span
            style={{
                width: size,
                height: size,
                borderRadius: '50%',
                backgroundColor: color,
                display: 'inline-block',
                marginRight: 8,
            }}
        />
    );
};

export default ColorDot;

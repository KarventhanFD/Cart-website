import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const UseSpring = () => {
    const [hovered, setHovered] = useState(false);

    const spring = useSpring({
        from: { x: 0 },
        to: { x: hovered ? 0 : 500 }, // Moves back to 0 when hovered
        config: { duration: 1000 }
    });

    return (
        <div className='play'>
            <h2>UseSpring</h2>
            <br />

            <animated.div 
                style={{
                    ...spring,
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                }}
                onMouseEnter={() => setHovered(true)}  // Reset to 0 on hover
                onMouseLeave={() => setHovered(false)} // Move to 500 when not hovered
            />
        </div>
    );
}

export default UseSpring;

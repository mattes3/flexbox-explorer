import React from 'react';
import { rowStyles, columnStyles } from './CellAlignment';

function App() {
    const top = { backgroundColor: '#ddd', height: '300px', ...columnStyles('top') };
    const middle = { backgroundColor: '#fff', height: '300px', ...columnStyles('middle') };
    const bottom = { backgroundColor: '#ddd', height: '300px', ...columnStyles('bottom') };
    const left = { backgroundColor: '#fbb', ...rowStyles('left') };
    const center = { backgroundColor: '#bfb', ...rowStyles('center') };
    const right = { backgroundColor: '#bbf', ...rowStyles('right') };
    return (
        <div>
            <div style={top}>
                <div style={left}>
                    <p>top left</p>
                </div>
                <div style={center}>
                    <p>top center</p>
                </div>
                <div style={right}>
                    <p>top right</p>
                </div>
            </div>
            <div style={middle}>
                <div style={left}>
                    <p>middle left</p>
                </div>
                <div style={center}>
                    <p>middle center</p>
                </div>
                <div style={right}>
                    <p>middle right</p>
                </div>
            </div>
            <div style={bottom}>
                <div style={left}>
                    <p>bottom left</p>
                </div>
                <div style={center}>
                    <p>bottom center</p>
                </div>
                <div style={right}>
                    <p>bottom right</p>
                </div>
            </div>
        </div>
    );
}

export default App;

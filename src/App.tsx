import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import React, { useState } from 'react';

const useStyles = makeStyles({
    root: {
        padding: '2rem',
    },
    fieldSet: {
        marginTop: '1rem',
        display: 'block',
    },
    container: {
        backgroundColor: '#ddd'
    },
    rowContainer: {
        width: '300px',
        height: '185px',
    },
    columnContainer: {
        width: '185px',
        height: '300px',
    },
    brick: {
        backgroundColor: 'orange',
        border: '1px solid black',
    }
});

type FlexDirection = 'row' | 'column';
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline';

function randomBrickSize(): number {
    return (Math.round(Math.random() * 3) + 1) * 16;
}

const brickWidth = [randomBrickSize(), randomBrickSize(), randomBrickSize(), randomBrickSize(), randomBrickSize()];
const brickHeight = [randomBrickSize(), randomBrickSize(), randomBrickSize(), randomBrickSize(), randomBrickSize()];

function App() {
    const classes = useStyles();

    const [flexDirection, setFlexDirection] = useState<FlexDirection>('row');
    const changeFlexDirection = (event: any, value: string) => setFlexDirection(value as FlexDirection);

    const [justifyContent, setJustifyContent] = useState<JustifyContent>('flex-start');
    const changeJustifyContent = (event: any, value: string) => setJustifyContent(value as JustifyContent);

    const [alignItems, setAlignItems] = useState<AlignItems>('stretch');
    const changeAlignItems = (event: any, value: string) => setAlignItems(value as AlignItems);

    const containerClass = classNames({
        [classes.container]: true,
        [classes.rowContainer]: flexDirection === 'row',
        [classes.columnContainer]: flexDirection === 'column',
    });

    const containerStyles: CSSProperties = {
        display: 'flex',
        flexDirection,
        justifyContent,
        alignItems,
        toString() {
            return ['{', ...Object.keys(this).filter(name => name !== 'toString').map(name => '  ' + name + ': "' + this[name] + '",'), '}'].join('\n');
        }
    };

    const Brick = ({ name, width, height }: { name: any, width: number, height: number }) => (
        <div className={classes.brick} style={{ minWidth: width, minHeight: height, fontSize: `${height*0.8}px` }}>{name}</div>
    );

    return <>
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Direction</FormLabel>
                        <RadioGroup row aria-label="direction" name="direction" value={flexDirection} onChange={changeFlexDirection}>
                            <FormControlLabel
                                value="row"
                                control={<Radio color="primary" />}
                                label="Row"
                            />
                            <FormControlLabel
                                value="column"
                                control={<Radio color="primary" />}
                                label="Column"
                            />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" className={classes.fieldSet}>
                        <FormLabel component="legend">Justify content</FormLabel>
                        <RadioGroup row aria-label="justify-content" name="justify-content" value={justifyContent} onChange={changeJustifyContent}>
                            <FormControlLabel
                                value="flex-start"
                                control={<Radio color="primary" />}
                                label="flex-start"
                            />
                            <FormControlLabel
                                value="flex-end"
                                control={<Radio color="primary" />}
                                label="flex-end"
                            />
                            <FormControlLabel
                                value="center"
                                control={<Radio color="primary" />}
                                label="center"
                            />
                            <FormControlLabel
                                value="space-between"
                                control={<Radio color="primary" />}
                                label="space-between"
                            />
                            <FormControlLabel
                                value="space-around"
                                control={<Radio color="primary" />}
                                label="space-around"
                            />
                            <FormControlLabel
                                value="space-evenly"
                                control={<Radio color="primary" />}
                                label="space-evenly"
                            />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" className={classes.fieldSet}>
                        <FormLabel component="legend">Align items</FormLabel>
                        <RadioGroup row aria-label="align-items" name="align-items" value={alignItems} onChange={changeAlignItems}>
                            <FormControlLabel
                                value="stretch"
                                control={<Radio color="primary" />}
                                label="stretch"
                            />
                            <FormControlLabel
                                value="flex-start"
                                control={<Radio color="primary" />}
                                label="flex-start"
                            />
                            <FormControlLabel
                                value="flex-end"
                                control={<Radio color="primary" />}
                                label="flex-end"
                            />
                            <FormControlLabel
                                value="center"
                                control={<Radio color="primary" />}
                                label="center"
                            />
                            <FormControlLabel
                                value="baseline"
                                control={<Radio color="primary" />}
                                label="baseline"
                            />
                            <FormControlLabel
                                value="first baseline"
                                control={<Radio color="primary" />}
                                label="first baseline"
                            />
                            <FormControlLabel
                                value="last baseline"
                                control={<Radio color="primary" />}
                                label="last baseline"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={containerClass} style={containerStyles}>
                        {
                            Array
                                .from(Array(5).keys())
                                .map(i => <Brick key={i} name={i} width={brickWidth[i]} height={brickHeight[i]} />)
                        }
                    </div>
                    <pre>{containerStyles.toString()}</pre>
                </Grid>
            </Grid>
        </div>
    </>
}

export default App;

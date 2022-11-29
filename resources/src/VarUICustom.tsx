import { useState } from 'react';
import { VarButton, VarCategory, VarSelect, VarToggle, VarUI } from 'react-var-ui';
import { VarColorCustom } from './VarColorCustom';

const VarUICustom = () => {
    const [values, setValues] = useState({
        toggle: true,
        color1: '#FF0000',
        color2: '#FF0000',
        color3: '#FF0000',
        select: 1,
        slider: 0.4,
        xy: [0, 0.2],
        string: 'Hello world!'
    });

    return (
        <VarUI updateValues={setValues} values={values}>
            <VarCategory label="Example">
                {/* <VarColor path="color" label="Color" /> */}
                <VarColorCustom path="color1" label="Color" />
                <VarColorCustom path="color2" label="Color" />
                <VarColorCustom path="color3" label="Color" />
                <VarToggle path="toggle" label="Toggle" />
                <VarSelect
                    path="select"
                    label="Select"
                    options={[
                        { key: 0, label: 'Zero' },
                        { key: 1, label: 'One' }
                    ]}
                />
                {/* <VarSlider label="VarSlider" path="slider" min={0.2} max={0.8} step={0.1} /> */}
                {/* <VarString label="VarString" path="string" /> */}
                {/* <VarXY label="VarXY" path="xy" /> */}
                <VarButton buttonLabel="VarButton" onClick={() => alert('clicked!')} />
            </VarCategory>
        </VarUI>
    );
};

export default VarUICustom;

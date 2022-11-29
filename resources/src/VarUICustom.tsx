import { useState } from 'react';
import { VarButton, VarCategory, VarColor, VarSelect, VarSlider, VarString, VarToggle, VarUI } from 'react-var-ui';

const VarUICustom = () => {
    const [values, setValues] = useState({
        toggle: true,
        color: '#FF0000',
        select: 1,
        slider: 0.4,
        xy: [0, 0.2],
        string: 'Hello world!'
    });

    return (
        <VarUI updateValues={setValues} values={values}>
            <VarCategory label="Example">
                <VarColor path="color" label="Color" />
                <VarToggle path="toggle" label="Toggle" />
                <VarSelect
                    path="select"
                    label="Select"
                    options={[
                        { key: 0, label: 'Zero' },
                        { key: 1, label: 'One' }
                    ]}
                />
                <VarSlider label="VarSlider" path="slider" min={0.2} max={0.8} step={0.1} />
                <VarString label="VarString" path="string" />
                {/* <VarXY label="VarXY" path="xy" /> */}
                <VarButton buttonLabel="VarButton" onClick={() => alert('clicked!')} />
            </VarCategory>
        </VarUI>
    );
};

export default VarUICustom;

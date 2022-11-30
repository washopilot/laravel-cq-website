import { VarButton, VarCategory, VarSelect, VarUI } from 'react-var-ui';
import { MODELS } from './Models';
import { VarColorCustom } from './VarColorCustom';

export type valuesCustomType = {
    selectModel: string;
    elemento_1: string;
    elemento_2: string;
    elemento_3: string;
    elemento_4: string;
    elemento_5: string;
    elemento_6: string;
    elemento_7: string;
    elemento_8: string;
    elemento_9: string;
    elemento_10: string;
    elemento_11: string;
    elemento_12: string;
    elemento_13: string;
    elemento_14: string;
    slider: number;
    xy: number[];
};

interface IVarUICustom {
    values: valuesCustomType;
    onSetValues: React.Dispatch<React.SetStateAction<valuesCustomType>>;
    captureScreen: () => void;
}

const VarUICustom = ({ values, onSetValues, captureScreen }: IVarUICustom) => {
    // const gl = useThree((state) => state.gl);

    return (
        <VarUI updateValues={onSetValues} values={values}>
            <VarCategory label="Muebles">
                <VarSelect
                    path="selectModel"
                    label="Tipo"
                    options={Object.keys(MODELS).map((value, idx) => ({ key: idx, label: value, value: value }))}
                />

                {values.selectModel == 'Estante metálico' && <VarColorCustom path="elemento_1" label="Elem-1" />}
                {values.selectModel == 'Estante metálico' && <VarColorCustom path="elemento_2" label="Elem-2" />}
                {values.selectModel == 'Estante metálico' && <VarColorCustom path="elemento_3" label="Elem-3" />}
                {values.selectModel == 'Estante metálico peq' && <VarColorCustom path="elemento_4" label="Elem-4" />}
                {values.selectModel == 'Estante metálico peq' && <VarColorCustom path="elemento_5" label="Elem-5" />}
                {values.selectModel == 'Estante metálico peq' && <VarColorCustom path="elemento_6" label="Elem-6" />}
                {values.selectModel == 'Góndola cabecera' && <VarColorCustom path="elemento_7" label="Elem-7" />}
                {values.selectModel == 'Góndola cabecera' && <VarColorCustom path="elemento_8" label="Elem-8" />}
                {values.selectModel == 'Góndola cabecera' && <VarColorCustom path="elemento_9" label="Elem-9" />}
                {values.selectModel == 'Góndola cabecera' && <VarColorCustom path="elemento_10" label="Elem-10" />}
                {values.selectModel == 'Góndola doble' && <VarColorCustom path="elemento_11" label="Elem-11" />}
                {values.selectModel == 'Góndola doble' && <VarColorCustom path="elemento_12" label="Elem-12" />}
                {values.selectModel == 'Góndola doble' && <VarColorCustom path="elemento_13" label="Elem-13" />}
                {values.selectModel == 'Góndola doble' && <VarColorCustom path="elemento_14" label="Elem-14" />}

                {/* <VarToggle path="toggle" label="Toggle" /> */}
                {/* <VarSlider label="VarSlider" path="slider" min={0.2} max={0.8} step={0.1} /> */}
                {/* <VarString label="VarString" path="string" /> */}
                {/* <VarXY label="VarXY" path="xy" /> */}
                <VarButton buttonLabel="capturar pantalla" onClick={captureScreen} />
            </VarCategory>
        </VarUI>
    );
};

export default VarUICustom;

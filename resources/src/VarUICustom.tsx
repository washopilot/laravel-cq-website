import { VarButton, VarCategory, VarSelect, VarToggle, VarUI } from 'react-var-ui';
import { HDRI_FILES, MODELS } from './Models';
import { VarColorCustom } from './VarColorCustom';

export type valuesCustomType = {
    selectModel: string;
    [key: `elemento-${number}`]: string; // Template string pattern index signature
    toggle: boolean;
    selectAmbiente: string;
};

interface IVarUICustom {
    values: valuesCustomType;
    paintPalette: string[];
    onSetValues: React.Dispatch<React.SetStateAction<valuesCustomType>>;
    captureScreen: () => void;
}

const VarUICustom = ({ values, paintPalette, onSetValues, captureScreen }: IVarUICustom) => {
    return (
        <VarUI updateValues={onSetValues} values={values}>
            <VarCategory label="Muebles">
                <VarSelect
                    path="selectModel"
                    label="Tipo"
                    options={Object.keys(MODELS).map((value, idx) => ({ key: idx, label: value, value: value }))}
                />

                {values.selectModel == 'Estante metálico' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-1" label="Elem-1" />
                )}
                {values.selectModel == 'Estante metálico' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-2" label="Elem-2" />
                )}
                {values.selectModel == 'Estante metálico' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-3" label="Elem-3" />
                )}
                {values.selectModel == 'Estante metálico peq' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-4" label="Elem-4" />
                )}
                {values.selectModel == 'Estante metálico peq' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-5" label="Elem-5" />
                )}
                {values.selectModel == 'Estante metálico peq' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-6" label="Elem-6" />
                )}
                {values.selectModel == 'Góndola cabecera' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-7" label="Elem-7" />
                )}
                {values.selectModel == 'Góndola cabecera' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-8" label="Elem-8" />
                )}
                {values.selectModel == 'Góndola cabecera' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-9" label="Elem-9" />
                )}
                {values.selectModel == 'Góndola cabecera' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-10" label="Elem-10" />
                )}
                {values.selectModel == 'Góndola doble' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-11" label="Elem-11" />
                )}
                {values.selectModel == 'Góndola doble' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-12" label="Elem-12" />
                )}
                {values.selectModel == 'Góndola doble' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-13" label="Elem-13" />
                )}
                {values.selectModel == 'Góndola doble' && (
                    <VarColorCustom paintPalette={paintPalette} path="elemento-14" label="Elem-14" />
                )}
                <VarToggle path="toggle" label="Fondo" />
                <VarSelect
                    path="selectAmbiente"
                    label="Ambiente"
                    options={HDRI_FILES.map((value, idx) => ({ key: idx, label: value.label, value: value.path }))}
                />
                <VarButton buttonLabel="capturar pantalla" onClick={captureScreen} />
            </VarCategory>
        </VarUI>
    );
};

export default VarUICustom;

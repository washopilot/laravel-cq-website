import { VarButton, VarCategory, VarSelect, VarToggle, VarUI } from 'react-var-ui'
import { HDRI_FILES, MODELS } from './Models'
import { VarColorCustom } from './VarColorCustom'

export type valuesCustomType = {
    selectModel: string
    [key: `elemento-${number}`]: string // Template string pattern index signature
    toggle: boolean
    selectAmbiente: string
}

interface IVarUICustom {
    values: valuesCustomType
    paintPalette: string[]
    onSetValues: React.Dispatch<React.SetStateAction<valuesCustomType>>
    captureScreen: () => void
}

const VarUICustom = ({ values, paintPalette, onSetValues, captureScreen }: IVarUICustom) => {
    return (
        <VarUI updateValues={onSetValues} values={values}>
            <VarCategory label='Muebles'>
                <VarSelect
                    path='selectModel'
                    label='Tipo'
                    options={Object.keys(MODELS).map((value, idx) => ({ key: idx, label: value, value: value }))}
                />

                {MODELS[values.selectModel].nodes.map((value, idx) => {
                    return (
                        <VarColorCustom
                            key={idx}
                            paintPalette={paintPalette}
                            path={value}
                            label={value.replace('elemento', 'Elem')}
                        />
                    )
                })}

                <VarToggle path='toggle' label='Fondo' />
                <VarSelect
                    path='selectAmbiente'
                    label='Ambiente'
                    options={HDRI_FILES.map((value, idx) => ({ key: idx, label: value.label, value: value.path }))}
                />
                <VarButton buttonLabel='capturar pantalla' onClick={captureScreen} />
            </VarCategory>
        </VarUI>
    )
}

export default VarUICustom

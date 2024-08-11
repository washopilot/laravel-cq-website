import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import 'react-var-ui/dist/index.css'
import { GLTF } from 'three-stdlib'
import { HDRI_FILES, MODELS, PAINT_PALETTE } from './Models'
import VarUICustom, { valuesCustomType } from './VarUICustom'

type GLTFResult = GLTF & {
    nodes: {
        [name: string]: THREE.Mesh
    }
    materials: {
        [name: string]: THREE.MeshStandardMaterial
    }
}

interface IEnvProps {
    fireCapture: boolean
    setFireCapture: React.Dispatch<React.SetStateAction<boolean>>
    backgroundToggle: boolean
    backgroundFile: string
}

interface IModelProps {
    url: string
    position: any
    model: string
    values: valuesCustomType
}

const App = () => {
    const [fireCapture, setFireCapture] = useState(false)
    const fireCaptureScreen = () => setFireCapture(true)
    const controlsRef = useRef<any>()

    const elements = Object.keys(MODELS)
        .map((value) => MODELS[value].nodes)
        .flat()
        .reduce((prev, curr) => {
            return { ...prev, [curr]: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)] }
        }, {})

    // Default values UI
    const [values, setValues] = useState<valuesCustomType>({
        selectModel: Object.keys(MODELS)[2],
        ...elements,
        toggle: true,
        selectAmbiente: HDRI_FILES[4].path
    })

    // useEffect(() => {
    //     if (controlsRef.current) {
    //         controlsRef.current.addEventListener('change', () => {
    //             const { position, rotation } = controlsRef.current.object
    //             console.log('Camera Position:', position)
    //             console.log('Camera Rotation:', rotation)
    //         })
    //     }
    // }, [])

    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Canvas gl={{ preserveDrawingBuffer: true }} camera={{ position: [100, 42, 80], fov: 50 }}>
                    <group position={[10, -100, 10]} rotation={[0, -190, 0]}>
                        <Model
                            position={[0, 0.25, 0]}
                            url={MODELS[values.selectModel].url}
                            model={values.selectModel}
                            values={values}
                        />
                    </group>
                    <Env
                        fireCapture={fireCapture}
                        setFireCapture={setFireCapture}
                        backgroundToggle={values.toggle}
                        backgroundFile={values.selectAmbiente}
                    />
                    <OrbitControls
                        // ref={controlsRef}
                        maxPolarAngle={(2 * Math.PI) / 3}
                        minPolarAngle={(1 * Math.PI) / 3}
                    />
                </Canvas>
            </Suspense>
            <VarUICustom
                values={values}
                onSetValues={setValues}
                captureScreen={fireCaptureScreen}
                paintPalette={PAINT_PALETTE}
            />
        </>
    )
}

const Env = ({ fireCapture, setFireCapture, backgroundToggle, backgroundFile }: IEnvProps) => {
    const gl = useThree((state) => state.gl)

    useEffect(() => {
        if (fireCapture) captureScreen()
        return () => setFireCapture(false)
    }, [fireCapture])

    const captureScreen = () => {
        console.log('function Called')
        const link = document.createElement('a')
        link.setAttribute('download', 'carrionquezada.png')
        link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
        link.click()
    }

    return <Environment files={backgroundFile} path={'assets/images/hdri/'} background={backgroundToggle} />
}

const Model = ({ url, model, values, ...props }: IModelProps) => {
    const { nodes, materials } = useGLTF(url) as unknown as GLTFResult

    return (
        <group {...props} dispose={null}>
            {MODELS[model].nodes.map((item, index) => {
                return (
                    <mesh
                        key={index}
                        castShadow
                        receiveShadow
                        geometry={nodes[item].geometry}
                        material={materials[item]}
                        material-color={values[item as keyof valuesCustomType]}
                        material-roughness={0.1}
                        material-metalness={0.1}
                    />
                )
            })}
        </group>
    )
}

const Spinner = () => {
    return (
        <div className='css3-spinner'>
            <div className='css3-spinner-ball-scale-multiple'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default App

import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { PresetsType } from '@react-three/drei/helpers/environment-assets';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useState, useTransition } from 'react';

import 'react-var-ui/dist/index.css';
import { GLTF } from 'three-stdlib';
import { HDRI_FILES, MODELS, PAINT_PALETTE } from './Models';
import VarUICustom, { valuesCustomType } from './VarUICustom';

type GLTFResult = GLTF & {
    nodes: {
        [name: string]: THREE.Mesh;
    };
    materials: {
        [name: string]: THREE.MeshStandardMaterial;
    };
};

const App = () => {
    // const { model } = useControls({
    //     model: { value: Object.keys(MODELS)[0], options: Object.keys(MODELS), label: 'Mueble' }
    // });
    // const gl = useThree((state) => state.gl);

    const [fireCapture, setFireCapture] = useState(false);
    const fireCaptureScreen = () => setFireCapture(true);

    const [values, setValues] = useState<valuesCustomType>({
        selectModel: Object.keys(MODELS)[0],
        elemento_1: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_2: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_3: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_4: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_5: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_6: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_7: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_8: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_9: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_10: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_11: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_12: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_13: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        elemento_14: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        toggle: false,
        selectAmbiente: HDRI_FILES[0].path
    });

    return (
        <>
            <Canvas gl={{ preserveDrawingBuffer: true }} camera={{ position: [100, 90, 200], fov: 50 }}>
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
                <OrbitControls maxPolarAngle={(2 * Math.PI) / 3} minPolarAngle={(1 * Math.PI) / 3} />
            </Canvas>
            <VarUICustom
                values={values}
                onSetValues={setValues}
                captureScreen={fireCaptureScreen}
                paintPalette={PAINT_PALETTE}
            />
        </>
    );
};

function Env({
    fireCapture,
    setFireCapture,
    backgroundToggle,
    backgroundFile
}: {
    fireCapture: boolean;
    setFireCapture: React.Dispatch<React.SetStateAction<boolean>>;
    backgroundToggle: boolean;
    backgroundFile: string;
}) {
    const [preset, setPreset] = useState<PresetsType>('warehouse');
    const gl = useThree((state) => state.gl);
    // You can use the "inTransition" boolean to react to the loading in-between state,
    // For instance by showing a message

    useEffect(() => {
        if (fireCapture) captureScreen();
        return () => setFireCapture(false);
    }, [fireCapture]);

    const captureScreen = () => {
        console.log('function Called');
        const link = document.createElement('a');
        link.setAttribute('download', 'canvas.png');
        link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
        link.click();
    };

    const [inTransition, startTransition] = useTransition();
    // const values = useControls({
    //     preset: {
    //         value: preset,
    //         options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
    //         // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
    //         // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
    //         // That way we can hang onto the current environment until the new one has finished loading ...
    //         label: 'Ambiente',
    //         onChange: (value) => startTransition(() => setPreset(value))
    //     },
    //     ['capturar pantalla']: button(() => {
    //         const link = document.createElement('a');
    //         link.setAttribute('download', 'canvas.png');
    //         link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
    //         link.click();
    //     })
    // });

    return <Environment files={backgroundFile} path={'assets/images/hdri/'} background={backgroundToggle} />;
}

function Model({
    url,
    model,
    values,
    ...props
}: {
    url: string;
    position: any;
    model: string;
    values: valuesCustomType;
}) {
    const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;

    // const controls = useControls(
    //     {
    //         ...MODELS[model].nodes.reduce(
    //             (prev, curr, idx) => ({ ...prev, [curr]: { value: MODELS[model]['colors'][idx] } }),
    //             {}
    //         )
    //     },
    //     [nodes]
    // );

    // applyProps(materials['plate'] as unknown as Instance, {
    //     color: plate,
    //     roughness: 0.1,
    //     metalness: 0.1
    // });

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
                        material-color={values[item.replace('-', '_') as keyof valuesCustomType]}
                        material-roughness={0.1}
                        material-metalness={0.1}
                    />
                );
            })}
        </group>
    );
}

export default App;

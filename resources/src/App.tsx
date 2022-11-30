import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { PresetsType } from '@react-three/drei/helpers/environment-assets';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useState, useTransition } from 'react';

import 'react-var-ui/dist/index.css';
import { GLTF } from 'three-stdlib';
import { MODELS } from './Models';
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

    const [fireCapture, setfireCapture] = useState(false);
    const fireCaptureScreen = () => setfireCapture(true);

    const [values, setValues] = useState<valuesCustomType>({
        selectModel: Object.keys(MODELS)[0],
        elemento_1: '#FF0000',
        elemento_2: '#FF0000',
        elemento_3: '#FF0000',
        elemento_4: '#FF0000',
        elemento_5: '#FF0000',
        elemento_6: '#FF0000',
        elemento_7: '#FF0000',
        elemento_8: '#FF0000',
        elemento_9: '#FF0000',
        elemento_10: '#FF0000',
        elemento_11: '#FF0000',
        elemento_12: '#FF0000',
        elemento_13: '#FF0000',
        elemento_14: '#FF0000',

        slider: 0.4,
        xy: [0, 0.2]
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
                <Env fireCapture={fireCapture} />
                <OrbitControls maxPolarAngle={(2 * Math.PI) / 3} minPolarAngle={(1 * Math.PI) / 3} />
            </Canvas>
            <VarUICustom values={values} onSetValues={setValues} captureScreen={fireCaptureScreen} />
        </>
    );
};

function Env({ fireCapture }: { fireCapture: boolean }) {
    const [preset, setPreset] = useState<PresetsType>('warehouse');
    const gl = useThree((state) => state.gl);
    // You can use the "inTransition" boolean to react to the loading in-between state,
    // For instance by showing a message

    useEffect(() => {
        captureScreen();
    }, [fireCapture]);

    const captureScreen = () => {
        console.log('function Called');
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

    return <Environment preset={preset} background />;
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

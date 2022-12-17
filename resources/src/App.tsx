import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { PresetsType } from '@react-three/drei/helpers/environment-assets';
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useState, useTransition } from 'react';

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
    const [fireCapture, setFireCapture] = useState(false);
    const fireCaptureScreen = () => setFireCapture(true);

    const [values, setValues] = useState<valuesCustomType>({
        selectModel: Object.keys(MODELS)[0],
        ['elemento-1']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-2']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-3']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-4']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-5']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-6']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-7']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-8']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-9']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-10']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-11']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-12']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-13']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        ['elemento-14']: PAINT_PALETTE[Math.floor(Math.random() * PAINT_PALETTE.length)],
        toggle: false,
        selectAmbiente: HDRI_FILES[0].path
    });

    return (
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
    );
};

const Env = ({
    fireCapture,
    setFireCapture,
    backgroundToggle,
    backgroundFile
}: {
    fireCapture: boolean;
    setFireCapture: React.Dispatch<React.SetStateAction<boolean>>;
    backgroundToggle: boolean;
    backgroundFile: string;
}) => {
    const gl = useThree((state) => state.gl);

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

    return <Environment files={backgroundFile} path={'assets/images/hdri/'} background={backgroundToggle} />;
};

const Model = ({
    url,
    model,
    values,
    ...props
}: {
    url: string;
    position: any;
    model: string;
    values: valuesCustomType;
}) => {
    const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;

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
                );
            })}
        </group>
    );
};

const Spinner = () => {
    return (
        <div className="css3-spinner">
            <div className="css3-spinner-ball-scale-multiple">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default App;

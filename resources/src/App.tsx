import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { PresetsType } from '@react-three/drei/helpers/environment-assets';
import { Canvas, useThree } from '@react-three/fiber';
import { button, useControls } from 'leva';
import { useState, useTransition } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
import { MODELS } from './Models';

type GLTFResult = GLTF & {
    nodes: {
        [name: string]: THREE.Mesh;
    };
    materials: {
        [name: string]: THREE.MeshStandardMaterial;
    };
};

const App = () => {
    const { model } = useControls({
        model: { value: Object.keys(MODELS)[0], options: Object.keys(MODELS), label: 'Mueble' }
    });

    return (
        <Canvas gl={{ preserveDrawingBuffer: true }} camera={{ position: [100, 90, 200], fov: 50 }}>
            <group position={[10, -100, 10]} rotation={[0, -190, 0]}>
                <Model position={[0, 0.25, 0]} url={MODELS[model].url} model={model} />
            </group>
            <Env />
            <OrbitControls />
        </Canvas>
    );
};

function Env() {
    const [preset, setPreset] = useState<PresetsType>('warehouse');
    const gl = useThree((state) => state.gl);
    // You can use the "inTransition" boolean to react to the loading in-between state,
    // For instance by showing a message
    const [inTransition, startTransition] = useTransition();
    const values = useControls({
        preset: {
            value: preset,
            options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
            // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
            // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
            // That way we can hang onto the current environment until the new one has finished loading ...
            label: 'Ambiente',
            onChange: (value) => startTransition(() => setPreset(value))
        },
        ['capturar pantalla']: button(() => {
            const link = document.createElement('a');
            link.setAttribute('download', 'canvas.png');
            link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
            link.click();
        })
    });
    return <Environment preset={preset} background />;
}

function Model({ url, model, ...props }: { url: string; position: any; model: string }) {
    const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;

    const controls = useControls(
        { ...MODELS[model].nodes.reduce((a, v) => ({ ...a, [v]: { value: '#ffffff' } }), {}) },
        [nodes]
    );

    // applyProps(materials['plate'] as unknown as Instance, {
    //     color: plate,
    //     roughness: 0.1,
    //     metalness: 0.1
    // });

    return (
        <group {...props} dispose={null}>
            {MODELS[model].nodes.map((item, index) => (
                <mesh
                    key={index}
                    castShadow
                    receiveShadow
                    geometry={nodes[item].geometry}
                    material={materials[item]}
                    material-color={{ ...(controls as Object) }[item]}
                    material-roughness={0.1}
                    material-metalness={0.1}
                />
            ))}
        </group>
    );
}

export default App;

import * as THREE from 'three';
import React, { useRef, useState, useTransition } from 'react';
import { Canvas, useFrame, ThreeElements, PrimitiveProps } from '@react-three/fiber';
import { useGLTF, OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import { PresetsType } from '@react-three/drei/helpers/environment-assets';

const MODELS: { [key: string]: string } = {
    Percha: 'gltf/percha_02_03.glb',
    Góndola: 'gltf/gondola_01.gltf'
};

const App = () => {
    const { model } = useControls({
        model: { value: 'Percha', options: Object.keys(MODELS) }
    });

    return (
        <>
            <Canvas camera={{ position: [100, 90, 200], fov: 50 }}>
                {/* <hemisphereLight color="white" groundColor="blue" intensity={0.75} /> */}
                {/* <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} /> */}
                <group position={[10, -100, 10]} rotation={[0, -10, 0]}>
                    <Model position={[0, 0.25, 0]} url={MODELS[model]} />
                    <ContactShadows scale={20} blur={10} far={20} />
                    <Env />
                </group>
                <OrbitControls />
            </Canvas>
        </>
    );
};

function Env() {
    const [preset, setPreset] = useState<PresetsType>('warehouse');
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
            onChange: (value) => startTransition(() => setPreset(value))
        }
    });
    return <Environment preset={preset} background />;
}

function Model({ url, ...props }: { url: string; position: any }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} {...props} />;
}

export default App;

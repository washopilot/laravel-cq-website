import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, ThreeElements, PrimitiveProps } from '@react-three/fiber';
import { useGLTF, OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { Leva, useControls } from 'leva';

const MODELS: { [key: string]: string } = {
    Percha: 'gltf/percha_02_03.gltf',
    Gódola: 'gltf/gondola_01.gltf'
};

const App = () => {
    const { model } = useControls({
        model: { value: 'Percha', options: Object.keys(MODELS) }
    });

    return (
        <>
            <Leva hideCopyButton titleBar={{ drag: false }} />
            <Canvas camera={{ position: [100, 90, 200], fov: 50 }}>
                <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
                {/* <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} /> */}
                <group position={[10, -100, 10]} rotation={[0, -10, 0]}>
                    <Model position={[0, 0.25, 0]} url={MODELS[model]} />
                    <ContactShadows scale={20} blur={10} far={20} />
                </group>
                <OrbitControls />
            </Canvas>
        </>
    );
};

function Model({ url, ...props }: { url: string; position: any }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} {...props} />;
}

export default App;

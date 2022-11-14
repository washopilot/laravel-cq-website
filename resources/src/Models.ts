export const MODELS: { [key: string]: { url: string; nodes: string[] } } = {
    ['Estante metálico']: { url: 'assets/gltf/percha_01_Draco.glb', nodes: ['elemento-1', 'elemento-2', 'elemento-3'] },
    ['Estante metálico peq']: {
        url: 'assets/gltf/percha_02_Draco.glb',
        nodes: ['elemento-4', 'elemento-5', 'elemento-6']
    },
    ['Góndola cabecera']: {
        url: 'assets/gltf/gondola_01_Draco.glb',
        nodes: ['elemento-7', 'elemento-8', 'elemento-9', 'elemento-10']
    },
    ['Góndola doble']: {
        url: 'assets/gltf/gondola_02_Draco.glb',
        nodes: ['elemento-11', 'elemento-12', 'elemento-13', 'elemento-14']
    }
};

type MODELS_Type = { [key: string]: { url: string; nodes: string[]; colors: string[] } };

export const MODELS: MODELS_Type = {
    ['Estante metálico']: {
        url: 'assets/gltf/percha_01_Draco.glb',
        nodes: ['elemento-1', 'elemento-2', 'elemento-3'],
        colors: ['#810000', '#ffffff', '#000000']
    },
    ['Estante metálico peq']: {
        url: 'assets/gltf/percha_02_Draco.glb',
        nodes: ['elemento-4', 'elemento-5', 'elemento-6'],
        colors: ['#ffffff', '#000b61', '#000000']
    },
    ['Góndola cabecera']: {
        url: 'assets/gltf/gondola_01_Draco.glb',
        nodes: ['elemento-7', 'elemento-8', 'elemento-9', 'elemento-10'],
        colors: ['#ffffff', '#006f27', '#006f27', '#006f27']
    },
    ['Góndola doble']: {
        url: 'assets/gltf/gondola_02_Draco.glb',
        nodes: ['elemento-11', 'elemento-12', 'elemento-13', 'elemento-14'],
        colors: ['#ebc800', '#ebc800', '#ffffff', '#000000']
    }
};

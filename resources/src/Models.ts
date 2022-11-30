type MODELS_Type = { [key: string]: { url: string; nodes: string[] } };
type PAINT_PALETTE_Type = string[];

export const MODELS: MODELS_Type = {
    ['Estante metálico']: {
        url: 'assets/gltf/percha_01_Draco.glb',
        nodes: ['elemento-1', 'elemento-2', 'elemento-3']
    },
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

export const PAINT_PALETTE: PAINT_PALETTE_Type = ['red', 'blue', 'cyan'];

type MODELS_Type = { [key: string]: { url: string; nodes: string[] } };

type PAINT_PALETTE_Type = string[];
type HDRI_FILES_Type = {
    path: string;
    label: string;
}[];

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

export const PAINT_PALETTE: PAINT_PALETTE_Type = [
    '#064FBE',
    '#121B22',
    '#99165F',
    '#4C3C6E',
    '#004621',
    '#AB6949',
    '#C4A854',
    '#112393',
    '#94B6CF',
    '#871716',
    '#EBEEF5'
];

export const HDRI_FILES: HDRI_FILES_Type = [
    { path: 'christmas_photo_studio_04_1k.hdr', label: 'ambiente_1' },
    { path: 'empty_warehouse_01_1k.hdr', label: 'ambiente_2' },
    { path: 'gear_store_1k.hdr', label: 'ambiente_3' },
    { path: 'unfinished_office_night_1k.hdr', label: 'ambiente_4' },
    { path: 'industrial_workshop_foundry_1k.hdr', label: 'ambiente_5' },
    { path: 'phone_shop_1k.hdr', label: 'ambiente_6' },
];

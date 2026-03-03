import { create } from 'zustand';
import * as THREE from 'three';

interface SceneState {
    selectedObject: string | null;
    selectedObjectRef: THREE.Object3D | null;
    setSelectedObject: (id: string | null, ref?: THREE.Object3D | null) => void;
    mousePos: THREE.Vector2;
    setMousePos: (pos: THREE.Vector2) => void;
}

export const useStore = create<SceneState>((set) => ({
    selectedObject: null,
    selectedObjectRef: null,
    setSelectedObject: (id, ref = null) => set({ selectedObject: id, selectedObjectRef: ref }),
    mousePos: new THREE.Vector2(0, 0),
    setMousePos: (pos) => set({ mousePos: pos }),
}));

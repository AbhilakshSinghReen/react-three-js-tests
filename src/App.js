import { Canvas } from "@react-three/fiber";

import "./App.css";
import { BoxGeometry, MeshNormalMaterial } from "three";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Canvas>
      <>
        <OrbitControls />
        <mesh>
          <BoxGeometry />
          <MeshNormalMaterial />
        </mesh>
      </>
    </Canvas>
  );
}

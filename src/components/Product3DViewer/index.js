import React from "react";
import { Engine, Model, Scene } from "react-babylonjs";
import { Vector3, Color3 } from "@babylonjs/core";

export default function Product3DViewer() {
  return (
    <Engine>
      <Scene
        antialias={true}
        adaptToDeviceRatio={true}
        canvasId="sample-canvas"
        clearColor={Color3.White()}
      >
        <arcRotateCamera
          name="camera"
          alpha={Math.PI / 2}
          beta={0}
          radius={1.5 * Math.PI}
          target={Vector3.Zero()}
          minZ={0.005}
          upperRadiusLimit={1.5 * Math.PI}
          lowerRadiusLimit={1.5 * Math.PI}
        />
        <hemisphericLight
          name="light"
          intensity={0.5}
          direction={Vector3.Up()}
        />
        <Model
          sceneFilename="scene.gltf"
          rootUrl="https://raw.githubusercontent.com/CJ-Pro/3d_ecommerce_react/main/public/assets/earring/"
          position={new Vector3(0, 0, 0)}
        />
      </Scene>
    </Engine>
  );
}

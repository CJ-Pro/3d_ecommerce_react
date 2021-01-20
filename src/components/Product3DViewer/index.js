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
          alpha={Math.PI}
          beta={0}
          radius={2 * Math.PI}
          target={new Vector3(0, 0.5, 0)}
          minZ={0.005}
          //upperRadiusLimit={225}
          //lowerRadiusLimit={225}
        />
        <hemisphericLight
          name="light"
          intensity={0.5}
          direction={Vector3.Up()}
        />
        <Model
          sceneFilename="model.gltf"
          rootUrl="https://raw.githubusercontent.com/CJ-Pro/3d_ecommerce_react/main/public/assets/wedding_ring/"
          position={Vector3.Zero()}
        />
      </Scene>
    </Engine>
  );
}

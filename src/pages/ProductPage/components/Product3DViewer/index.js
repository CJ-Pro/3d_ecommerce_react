import React from "react";
import { Engine, Model, Scene } from "react-babylonjs";
import { Vector3, Color3 } from "@babylonjs/core";

export default function Product3DViewer(props) {
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
          alpha={props.alpha}
          beta={props.beta}
          radius={props.radius}
          target={props.target}
          minZ={0.005}
          upperRadiusLimit={props.radius}
          lowerRadiusLimit={props.radius}
        />
        <hemisphericLight
          name="light"
          intensity={0.5}
          direction={Vector3.Up()}
        />
        <Model
          sceneFilename="model.gltf"
          rootUrl={props.url}
          position={Vector3.Zero()}
        />
      </Scene>
    </Engine>
  );
}

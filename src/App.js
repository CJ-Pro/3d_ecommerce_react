import React from 'react'
import { Engine, Model, Scene } from 'react-babylonjs'
import { Vector3 } from '@babylonjs/core';

function App() {
  return (
    <div className="item" >
      <Engine>
        <Scene antialias={true} adaptToDeviceRatio={true} canvasId="sample-canvas">
          <arcRotateCamera name="camera1"
            alpha={Math.PI / -2} beta={Math.PI / 2}
            radius={0.05} target={Vector3.Zero()} minZ={0.001} />
          <hemisphericLight name="light1" intensity={0.7}
            direction={Vector3.Up()} />
          <Model sceneFilename="Diving_watch.obj"
            rootUrl="https://filebin.net/rr37flilx2agnhwd/"
            position={new Vector3(0, 0, 0)}
          />
        </Scene>
      </Engine>
    </div>
  );
}

export default App;

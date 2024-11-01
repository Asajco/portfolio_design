/*
  Auto-generated by Spline
*/

import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";

export default function Contact3D({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/MKeNaZOtUGbaCSg9/scene.splinecode"
  );
  return (
    <>
      <color attach="background" args={["#fef9f90"]} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <OrthographicCamera
            name="Camera"
            makeDefault={true}
            zoom={1.36}
            far={100000}
            near={-100000}
            position={[372.21, 491.77, 804.98]}
            rotation={[-0.51, 0.54, 0.28]}
          />
          <particleSystem
            name="Particles Hand 2"
            geometry={nodes["Particles Hand 2"].geometry}
            material={materials[""]}
            position={[0, -423.89, 420.83]}
            rotation={[-1.8, 0.05, -2.44]}
            scale={1}
          />
          <particleSystem
            name="Particles Hand"
            geometry={nodes["Particles Hand"].geometry}
            material={materials[""]}
            position={[-145.16, 583.15, -343.25]}
            rotation={[0.8, -0.45, 1.31]}
            scale={1}
          />
          <particleSystem
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={materials[""]}
            position={[-1155.47, -397.57, 0]}
          />
          <mesh
            name="Hand Element"
            geometry={nodes["Hand Element"].geometry}
            material={nodes["Hand Element"].material}
            visible={false}
            castShadow
            receiveShadow
            position={[-38.32, -414.33, -51.37]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.31}
          />
          <OrthographicCamera
            name="1"
            makeDefault={false}
            far={10000}
            near={-50000}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#eaeaea"
          />
        </scene>
      </group>
    </>
  );
}
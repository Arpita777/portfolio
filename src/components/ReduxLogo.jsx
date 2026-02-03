import { Float } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const ReduxLogo = (props) => {
  const group = useRef();

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.6;
    group.current.rotation.x += delta * 0.3;
  });

  return (
    <Float speed={2} floatIntensity={1.5} rotationIntensity={0.5}>
      <group ref={group} {...props} scale={0.4}>
        {[0, Math.PI / 3, -Math.PI / 3].map((rotation, i) => (
          <mesh key={i} rotation={[rotation, 0, 0]}>
            <torusGeometry args={[1.6, 0.06, 16, 100]} />
            <meshStandardMaterial
              color="#764abc"
              emissive="#764abc"
              emissiveIntensity={0.4}
            />
          </mesh>
        ))}
        {[
          [1.6, 0, 0],
          [-0.8, 1.38, 0],
          [-0.8, -1.38, 0],
        ].map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.18, 32, 32]} />
            <meshStandardMaterial
              color="#f7df1e"
              emissive="#f7df1e"
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

export default ReduxLogo;

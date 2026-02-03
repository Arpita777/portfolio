import { Float, Text } from "@react-three/drei";

const TypeScriptLogo = (props) => {
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <group {...props} scale={0.4}>
        <mesh>
          <boxGeometry args={[2.4, 2.4, 0.2]} />
          <meshStandardMaterial
            color="#3178C6"
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>

        <mesh position={[0, 0, 0.12]}>
          <boxGeometry args={[2.2, 2.2, 0.12]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        <mesh position={[0, 0, 0.22]}>
          <boxGeometry args={[2.0, 2.0, 0.12]} />
          <meshStandardMaterial color="#3178C6" />
        </mesh>

        <Text
          position={[0, 0, 0.36]}
          fontSize={0.9}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          TS
        </Text>
      </group>
    </Float>
  );
};

export default TypeScriptLogo;

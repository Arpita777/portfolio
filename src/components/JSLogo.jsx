import { Float, Text } from "@react-three/drei";

const JSLogo = (props) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group {...props} scale={0.4}>
        <mesh>
          <boxGeometry args={[2.2, 2.2, 0.2]} />
          <meshStandardMaterial color="#f7df1e" />
        </mesh>
        <Text
          position={[0, 0, 0.15]}
          fontSize={1}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          JS
        </Text>
      </group>
    </Float>
  );
};

export default JSLogo;

import { useGLTF, useTexture } from "@react-three/drei";

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF("/models/hacker-room.glb");

  const monitortxt = useTexture("/textures/desk/monitor.png");
  const screenTxt = useTexture("/textures/desk/screen3.png");

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.screen_screens_0.geometry}>
        <meshStandardMaterial map={screenTxt} />
      </mesh>

      <mesh
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />

      <mesh
        geometry={nodes.table_table_mat_0_1.geometry}
        material={materials.table_mat}
      />

      <mesh geometry={nodes.table_table_mat_0_2.geometry}>
        <meshStandardMaterial map={monitortxt} />
      </mesh>

      <mesh
        geometry={nodes.table_table_mat_0_3.geometry}
        material={materials.server_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_4.geometry}
        material={materials.vhsPlayer_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_5.geometry}
        material={materials.stand_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_6.geometry}
        material={materials.mat_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_7.geometry}
        material={materials.arm_mat}
      />

      <mesh geometry={nodes.table_table_mat_0_8.geometry}>
        <meshStandardMaterial map={monitortxt} />
      </mesh>

      <mesh
        geometry={nodes.table_table_mat_0_9.geometry}
        material={materials.cables_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_10.geometry}
        material={materials.props_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_11.geometry}
        material={materials.ground_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_12.geometry}
        material={materials.key_mat}
      />
    </group>
  );
};

useGLTF.preload("/models/hacker-room.glb");

export default HackerRoom;

// import { Text, useGLTF } from "@react-three/drei";

// const HackerRoom = (props) => {
//   const { nodes, materials } = useGLTF("/models/hacker-room.glb");

//   return (
//     <group {...props} dispose={null}>
//       {/* ===== SCREEN ===== */}
//       <mesh geometry={nodes.screen_screens_0.geometry}>
//         <meshStandardMaterial
//           color="#020617"
//           emissive="#020617"
//           emissiveIntensity={5.6}
//         />
//       </mesh>

//       {/* ===== TERMINAL TEXT (FIXED) ===== */}
//       <Text
//         position={[6, -1.28, 0.52]} // pushed OUT of screen
//         rotation={[0, Math.PI, 0]} // flipped to face camera
//         fontSize={5.22} // bigger
//         maxWidth={1.8}
//         lineHeight={1.25}
//         anchorX="center"
//         anchorY="middle"
//       >
//         <meshStandardMaterial
//           color="#00ff9c"
//           emissive="#00ff9c"
//           emissiveIntensity={3}
//           toneMapped={false}
//           depthTest={false} // 🔥 CRITICAL
//         />
//         {`> Arpita.dev_

// Frontend Engineer
// React • UI • Performance

// $ npm run build`}
//       </Text>

//       {/* ===== GLASS ===== */}
//       <mesh
//         geometry={nodes.screen_glass_glass_0.geometry}
//         material={materials.glass}
//       />

//       {/* ===== TABLE + PROPS ===== */}
//       <mesh
//         geometry={nodes.table_table_mat_0_1.geometry}
//         material={materials.table_mat}
//       />
//       <mesh
//         geometry={nodes.table_table_mat_0_2.geometry}
//         material={materials.computer_mat}
//       />
//       <mesh
//         geometry={nodes.table_table_mat_0_3.geometry}
//         material={materials.server_mat}
//       />
//       <mesh
//         geometry={nodes.table_table_mat_0_4.geometry}
//         material={materials.vhsPlayer_mat}
//       />
//       <mesh
//         geometry={nodes.table_table_mat_0_5.geometry}
//         material={materials.stand_mat}
//       />
//       <mesh
//         geometry={nodes.table_table_mat_0_6.geometry}
//         material={materials.mat_mat}
//       />
//       <mesh
//         geometry={nodes.table_table_mat_0_7.geometry}
//         material={materials.arm_mat}
//       />
//       <mesh
//         geometry={nodes.table_table_mat_0_8.geometry}
//         material={materials.tv_mat}
//       />
//       <mesh
//         geometry={nodes.table_table_mat_0_9.geometry}
//         material={materials.cables_mat}
//       />
//       <mesh
//         geometry={nodes.table_table_mat_0_10.geometry}
//         material={materials.props_mat}
//       />
//       <mesh
//         geometry={nodes.table_table_mat_0_11.geometry}
//         material={materials.ground_mat}
//       />
//       <mesh
//         geometry={nodes.table_table_mat_0_12.geometry}
//         material={materials.key_mat}
//       />
//     </group>
//   );
// };

// useGLTF.preload("/models/hacker-room.glb");

// export default HackerRoom;

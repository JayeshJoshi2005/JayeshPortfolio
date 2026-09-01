export default function WireframeIcosahedron() {
  return (
    <mesh rotation={[0.3, 0.3, 0.3]}>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial color="#7F5AF0" wireframe />
    </mesh>
  );
}

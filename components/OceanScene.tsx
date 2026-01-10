'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Optimize geometry reuse
let cachedGeometry: THREE.PlaneGeometry | null = null

function getOceanGeometry(): THREE.PlaneGeometry {
  if (!cachedGeometry) {
    cachedGeometry = new THREE.PlaneGeometry(50, 50, 128, 128)
  }
  return cachedGeometry
}

export function OceanScene() {
  const meshRef = useRef<THREE.Mesh>(null)
  const waveRef = useRef<THREE.Mesh>(null)

  // Ocean plane geometry (reuse cached geometry for performance)
  const oceanGeometry = useMemo(() => getOceanGeometry(), [])

  // Animate ocean waves (throttled for performance)
  useFrame((state) => {
    if (meshRef.current && state.clock.elapsedTime % 0.016 < 0.032) {
      const time = state.clock.getElapsedTime()
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array

      // Limit updates for better performance on lower-end devices
      const step = 3 // Update every 3rd vertex for smoother performance
      for (let i = 0; i < positions.length; i += step * 3) {
        const x = positions[i]
        const z = positions[i + 2]

        // Create wave patterns
        const wave1 = Math.sin((x * 0.1) + time) * 0.5
        const wave2 = Math.sin((z * 0.1) + time * 1.2) * 0.3
        const wave3 = Math.sin((x * 0.05 + z * 0.05) + time * 0.8) * 0.4

        positions[i + 1] = wave1 + wave2 + wave3
      }

      meshRef.current.geometry.attributes.position.needsUpdate = true
      // Only recompute normals every few frames for performance
      if (Math.floor(time * 10) % 3 === 0) {
        meshRef.current.geometry.computeVertexNormals()
      }
    }
  })

  return (
    <group>
      {/* Main ocean plane */}
      <mesh
        ref={meshRef}
        geometry={oceanGeometry}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2, 0]}
      >
        <meshStandardMaterial
          color="#1890ff"
          transparent
          opacity={0.8}
          metalness={0.1}
          roughness={0.2}
          emissive="#0050b3"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Secondary wave layer for depth */}
      <mesh
        ref={waveRef}
        geometry={oceanGeometry}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.1, 0]}
      >
        <meshStandardMaterial
          color="#002766"
          transparent
          opacity={0.6}
          metalness={0.2}
          roughness={0.3}
        />
      </mesh>

      {/* Ambient particles/sparkles */}
      {[...Array(30)].map((_, i) => (
        <Particle
          key={i}
          index={i}
        />
      ))}
    </group>
  )
}

function Particle({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  const position = useMemo(() => [
    (Math.random() - 0.5) * 40,
    Math.random() * 10 - 5,
    (Math.random() - 0.5) * 40,
  ], [])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.position.y = position[1] + Math.sin(time + index) * 2
      meshRef.current.rotation.y += 0.01
      meshRef.current.scale.setScalar(0.5 + Math.sin(time * 2 + index) * 0.3)
    }
  })

  return (
    <mesh ref={meshRef} position={position as [number, number, number]}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshStandardMaterial
        color="#40a9ff"
        emissive="#40a9ff"
        emissiveIntensity={1}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}


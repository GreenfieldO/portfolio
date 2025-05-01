"use client"

import type React from "react"

import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"

export default function AnimatedBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const blob3Ref = useRef<HTMLDivElement>(null)

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Move blobs towards cursor
  useEffect(() => {
    if (!mounted) return

    const moveBlob = (blobRef: React.RefObject<HTMLDivElement>, speed: number) => {
      if (!blobRef.current) return

      const blob = blobRef.current
      const rect = blob.getBoundingClientRect()
      const blobX = rect.left + rect.width / 2
      const blobY = rect.top + rect.height / 2

      // Calculate direction vector
      const dirX = mousePosition.x - blobX
      const dirY = mousePosition.y - blobY

      // Normalize and scale
      const length = Math.sqrt(dirX * dirX + dirY * dirY)
      if (length === 0) return

      const normalizedX = dirX / length
      const normalizedY = dirY / length

      // Apply movement with easing
      const currentTransform = window.getComputedStyle(blob).transform
      const matrix = new DOMMatrix(currentTransform)

      const targetX = matrix.m41 + normalizedX * speed
      const targetY = matrix.m42 + normalizedY * speed

      // Limit movement range
      const maxDistance = 100
      const distanceFromOrigin = Math.sqrt(targetX * targetX + targetY * targetY)

      if (distanceFromOrigin > maxDistance) {
        const scale = maxDistance / distanceFromOrigin
        blob.style.transform = `translate(${targetX * scale}px, ${targetY * scale}px)`
      } else {
        blob.style.transform = `translate(${targetX}px, ${targetY}px)`
      }
    }

    const animationFrame = requestAnimationFrame(() => {
      moveBlob(blob1Ref, 0.5)
      moveBlob(blob2Ref, 0.3)
      moveBlob(blob3Ref, 0.7)
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [mousePosition, mounted])

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="animated-background" aria-hidden="true">
      <div ref={blob1Ref} className="blob blob-1"></div>
      <div ref={blob2Ref} className="blob blob-2"></div>
      <div ref={blob3Ref} className="blob blob-3"></div>
    </div>
  )
}

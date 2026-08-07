// GradientBackground — "Sunset", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=04c6cda1-e332-4271-a417-b1e9b535f4b8
export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        containerType: "size",
      }}
    >
      <div
        style={{
          position: "absolute",
        inset: 0,
        backgroundColor: "#FF7D00",
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0) 52%, rgba(255, 255, 255, 0.15) 100%), radial-gradient(circle at 90% 40%, #FFDFA6 0%, #FF9F00 30%, #FF5A00 65%, #FF7D00 100%)",
        }}
      />
    </div>
  )
}

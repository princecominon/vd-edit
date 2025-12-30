import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { z } from "zod";

export const myCompSchema = z.object({
  titleText: z.string(),
  titleColor: z.string(),
  logoColor1: z.string(),
  logoColor2: z.string(),
});

export const HelloWorld = (props: z.infer<typeof myCompSchema>) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Animations
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, durationInFrames], [0.9, 1.1]);
  const translateY = interpolate(frame, [0, 30], [50, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill className="bg-slate-900 flex items-center justify-center">
      <div style={{ opacity, transform: `scale(${scale})` }}>
        
        {/* CORRECTED: Now uses the prop instead of hardcoded text */}
        <h1 
          className="text-8xl font-bold text-center" 
          style={{ 
            color: 'white', 
            transform: `translateY(${translateY}px)` 
          }}
        >
          {props.titleText}
        </h1>

      </div>

      <div className="absolute bottom-10 right-10 text-slate-500 font-mono text-xl">
        Frame: {frame} / {durationInFrames}
      </div>
    </AbsoluteFill>
  );
};
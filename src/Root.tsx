import "./index.css";
import { Composition } from "remotion";
// FIXED: Removed the extra "/HelloWorld" from the path
import { HelloWorld, myCompSchema } from "./HelloWorld"; 

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyProject"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema}
        defaultProps={{
          titleText: "This is My New Project", 
          titleColor: "#ffffff",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />
    </>
  );
};
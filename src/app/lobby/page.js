import ProfileInfo from "@/components/ProfileInfo";
import ProfilePics from "@/components/ProfilePics";
import SelectTick from "@/components/SelectTicks";

export default function About() {
  return (
    <main
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="dialogInfo"
        style={{
          padding: "2%",
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "space-between",
          alignItems: "end",
          width: "70%",
        }}
      >
        <ProfileInfo />
        <ProfilePics />
        <SelectTick />
      </div>
    </main>
  );
}

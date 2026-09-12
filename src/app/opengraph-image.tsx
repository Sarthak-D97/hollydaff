import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "Hollydaff — handmade forever flowers, bouquets and gifts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const load = async (file: string) => `data:image/jpeg;base64,${await readFile(join(process.cwd(), "public", file), "base64")}`;

const [logo, bouquet, pot, lilies] = await Promise.all([
  load("brand/hollydaff-logo-512.jpg"),
  load("media/img/sunflower-bouquet-1.jpg"),
  load("media/img/mini-pots-1.jpg"),
  load("media/img/lily-stems-1.jpg"),
]);

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#fbf6f0", fontFamily: "serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 56px", width: 560 }}>
          <img src={logo} width={120} height={120} style={{ borderRadius: 999 }} alt="" />
          <div style={{ display: "flex", marginTop: 28, fontSize: 64, letterSpacing: 14, color: "#2a1f1b" }}>HOLLYDAFF</div>
          <div style={{ display: "flex", marginTop: 8, fontSize: 40, color: "#cf5472", fontStyle: "italic" }}>flowers that bloom forever</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#634e44", lineHeight: 1.4 }}>
            Handmade bouquets, baskets, mini pots & keychains · Custom & bulk orders · Shipping across India
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#2a1f1b" }}>@hollydaff.co</div>
        </div>
        <div style={{ display: "flex", flex: 1, gap: 16, padding: "36px 36px 36px 0" }}>
          <img src={bouquet} width={300} height={558} style={{ objectFit: "cover", borderRadius: 32 }} alt="" />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <img src={pot} width={288} height={271} style={{ objectFit: "cover", borderRadius: 32 }} alt="" />
            <img src={lilies} width={288} height={271} style={{ objectFit: "cover", borderRadius: 32 }} alt="" />
          </div>
        </div>
      </div>
    ),
    size,
  );
}

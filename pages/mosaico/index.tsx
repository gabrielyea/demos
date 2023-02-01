import Mosaico from "@/components/mosaico/Mosaico";
import Mosaico2 from "@/components/mosaico/Mosaico2";

export default function index() {
  const images = [
    "/Comet.gif",
    "/another-sunset.png",
    "/Giant.png",
    "/attackAnim.gif",
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <Mosaico2 images={images} />
      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <Mosaico2 images={images.slice(0, 3)} />
      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <Mosaico2 images={images.slice(0, 2)} />
      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <Mosaico2 images={images.slice(0, 1)} />
      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>
    </div>
  );
}

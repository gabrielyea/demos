import Mosaico from "@/components/mosaico/Mosaico";

export default function index() {
  const images = [1, 2, 3, 4];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <Mosaico images={images} />
      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>

      <div className="flex h-[500px] flex-col justify-center">
        <div className="bg-neutral-400 p-14"> I am some content</div>
      </div>
    </div>
  );
}

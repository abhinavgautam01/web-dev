import Image from "next/image";

//layout : use to layout the pages/routes...
//we can create layout for individual route...but individual layout will be applied after its parent's layout..!
//admin route :->

export default function Home() {
  return (
    <div className="homepage">
      I am homepage
    </div>
  );
}

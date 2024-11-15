import Image from "next/image";

//link tag (Navbar)
//script tag is used for injecting javascript (Contact)
//Image tag provide better optimisation of images...(like size of image becomes less) :-> have to change next-config-mjs file according to the image you are using..!

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300 relative">
      {/* <img className="mx-auto" src="https://thumbs.dreamstime.com/z/domestic-short-haired-cat-perched-low-wall-pet-outdoor-239579243.jpg?w=400" alt="" /> */}
      <Image className="mx-auto object-cover" fill={true} src="https://thumbs.dreamstime.com/z/domestic-short-haired-cat-perched-low-wall-pet-outdoor-239579243.jpg?w=400" alt="" />
    </div>
  );
}

import Image from "next/image";

const images: Record<string, { src: string; alt: string }> = {
  // Women — Wedding
  "kanjivaram-saree": {
    src: "/images/saree.png",
    alt: "Woman in a beautiful silk saree",
  },
  "kasavu-saree": {
    src: "/images/kasavu-saree.jpg",
    alt: "Traditional white Kerala Kasavu saree with gold border",
  },
  "lehenga": {
    src: "/images/lehenga.jpg",
    alt: "Pink embroidered lehenga choli",
  },
  // Women — Reception
  "designer-saree": {
    src: "https://images.pexels.com/photos/8229217/pexels-photo-8229217.jpeg?auto=compress&w=400&h=500&fit=crop",
    alt: "Woman wearing a designer party saree",
  },
  "anarkali": {
    src: "https://images.pexels.com/photos/18380706/pexels-photo-18380706.jpeg?auto=compress&w=400&h=500&fit=crop",
    alt: "Woman in a flowing anarkali suit",
  },
  "cocktail-dress": {
    src: "https://images.pexels.com/photos/15797150/pexels-photo-15797150.jpeg?auto=compress&w=400&h=500&fit=crop",
    alt: "Woman in an elegant cocktail dress",
  },
  // Men — Wedding
  "mundu": {
    src: "/images/mundu.jpg",
    alt: "Man wearing a traditional Kerala mundu with shirt",
  },
  "kurta": {
    src: "/images/kurta-pajama.jpg",
    alt: "Man wearing a kurta with straight pajama",
  },
  "formal-shirt": {
    src: "/images/formal-shirt.jpg",
    alt: "Man in a formal shirt and trousers",
  },
  // Men — Reception
  "sherwani": {
    src: "https://images.pexels.com/photos/12713394/pexels-photo-12713394.jpeg?auto=compress&w=400&h=500&fit=crop",
    alt: "Man wearing an embroidered sherwani",
  },
  "kurta-festive": {
    src: "https://images.pexels.com/photos/34423732/pexels-photo-34423732.jpeg?auto=compress&w=400&h=500&fit=crop",
    alt: "Man in a festive kurta with shawl",
  },
  "blazer": {
    src: "https://images.pexels.com/photos/30324873/pexels-photo-30324873.jpeg?auto=compress&w=400&h=500&fit=crop",
    alt: "Man in a stylish suit and blazer",
  },
};

export default function AttireIllustration({
  type,
  className = "",
}: {
  type: string;
  className?: string;
}) {
  const img = images[type];
  if (!img) return null;

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover"
        sizes="96px"
      />
    </div>
  );
}

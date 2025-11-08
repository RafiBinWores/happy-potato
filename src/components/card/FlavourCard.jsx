const defaultItems = [
  { src: "assets/images/menu/flavour1.jpg", alt: "Cheese" },
  { src: "assets/images/menu/flavour2.jpg", alt: "Sour Cream" },
  { src: "assets/images/menu/flavour3.jpg", alt: "BBQ" },
  { src: "assets/images/menu/flavour4.jpg", alt: "Hot & Spicy" },
  { src: "assets/images/menu/flavour5.jpg", alt: "Tomyum" },
  { src: "assets/images/menu/flavour6.jpg", alt: "Seaweed" },
  { src: "assets/images/menu/flavour7.jpg", alt: "Corn Cheese" },
  { src: "assets/images/menu/flavour8.jpg", alt: "Sichuang mala" },
];

const FlavourCard = ({ items = defaultItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 c-space mt-10">
      {items.map((it, idx) => (
        <img
          key={it.src ?? idx}
          src={it.src}
          alt={it.alt ?? ""}
          className="w-full object-contain"
        />
      ))}
    </div>
  );
};

export default FlavourCard;
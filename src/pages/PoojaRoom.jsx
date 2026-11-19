import { Link } from "react-router-dom";
import banner from "../assets/pooja-room/banner.webp";
import pooja1 from "../assets/pooja-room/pooja1.avif";
import pooja2 from "../assets/pooja-room/pooja2.webp";
import pooja3 from "../assets/pooja-room/pooja3.avif";
import pooja4 from "../assets/pooja-room/pooja4.webp";
import pooja5 from "../assets/pooja-room/pooja5.webp";
import pooja6 from "../assets/pooja-room/pooja6.avif";
import SEO from "../components/SEO";
import ProductFAQ from "../components/ProductFAQ";

const poojaItems = [
  {
    src: pooja1,
    alt: "Wall Mounted Modern Pooja",
    title: "1. Wall Mounted Modern Pooja",
    description:
      "This design brings a fresh, modern look to the prayer corner. A soft floral wallpaper sits next to a warm brown panel that makes the idol stand out. Small hanging bells and a green plant nearby add a calm, natural feel. It is a good choice for flats where you want a neat pooja space without using floor area.",
  },
  {
    src: pooja2,
    alt: "Floor Mounted Mid Century Pooja",
    title: "2. Floor Mounted Mid Century Pooja",
    description:
      "A glowing back-lit panel behind the idol makes this mandir the star of the room. Small arched niches hold extra idols, and a bookshelf on the side keeps holy books and decor items in one place. The mix of stone-look walls and dark wood gives a stylish mid-century touch. It works well for living rooms and entrance areas.",
  },
  {
    src: pooja3,
    alt: "Brazilian Walnut Indian Traditional Pooja",
    title: "3. Brazilian Walnut Indian Traditional Pooja",
    description:
      "If you love the classic temple look, this design is made for you. Rich walnut wood and a traditional temple-style arch give a warm and royal feel. Soft spotlights from above light the idol gently. It suits homes that want a traditional mandir but still need it to look clean and well finished.",
  },
  {
    src: pooja4,
    alt: "Modern Wall-Mounted Pooja",
    title: "4. Modern Wall-Mounted Pooja",
    description:
      "Here, carved jali work on the top meets a clean white back panel with a golden Om symbol. A marble-look platform with drawers below gives space for diyas, incense and other pooja items. Wooden doors on the side add a classic touch. This design is a perfect mix of tradition and modern style.",
  },
  {
    src: pooja5,
    alt: "Contemporary Pooja Unit Design",
    title: "5. Contemporary Pooja Unit Design",
    description:
      "A wooden jali back panel with a cut-out design and a lit shelf gives this unit a bright, modern glow. Small shelves hold framed photos and idols, and a wooden drawer below keeps the pooja items tidy. Colourful wall art next to it makes the corner feel lively. It is ideal for people who like a pooja area with a bit of personality.",
  },
  {
    src: pooja6,
    alt: "Frosty White Modern Floor Mounted Pooja",
    title: "6. Frosty White Modern Floor Mounted Pooja",
    description:
      "This design is for those who like a simple, stylish and different look. A concrete-style wall and a brick-pattern side give it an urban feel, while a brass gong and a green plant add warmth. It shows that a pooja room can be modern and peaceful at the same time.",
  },
];

const poojaFaqs = [
  {
    question: "1. What is the best direction for a pooja room?",
    answer:
      "As per Vastu, the North-East direction is the best for a pooja room. East and North are also good options.",
  },
  {
    question: "2. How can I design a pooja room in a small flat?",
    answer:
      "The best pooja room interior design ideas for a small flat are a wall-mounted mandir, light colours, soft lighting and smart storage drawers. Keep decoration simple to avoid a crowded look.",
  },
  {
    question: "3. Which colour is best for a pooja room?",
    answer:
      "White, cream, light yellow and light orange are the best colours. They give a calm and positive feeling.",
  },
  {
    question: "4. Which material is best for a pooja unit?",
    answer:
      "Wood is the most popular choice because it looks traditional and lasts long. Marble is also a great option for a pure and grand look.",
  },
  {
    question: "5. How much does it cost to make a pooja room?",
    answer:
      "The cost depends on size, material and design. A simple wall-mounted unit costs less, while a marble or full wooden temple costs more. For an exact price, it is best to talk to an expert.",
  },
  {
    question: "6. Can I make a pooja room under the staircase?",
    answer:
      "Yes, you can. It is a very good way to use the extra space, but make sure the area is clean, well-lit and not near a bathroom.",
  },
  {
    question: "7. Is a custom mandir better than a ready-made one?",
    answer:
      "A custom mandir fits your exact space and can include the storage and lighting you want. A ready-made unit is usually cheaper and quicker to install. Compare the full cost, material quality and size before deciding.",
  },
  {
    question: "8. How do I keep my pooja room clean?",
    answer:
      "Dust the panels regularly, wipe oil and incense marks quickly, and clean wood and marble as per their care needs. Keep lamps stable and away from things that burn easily.",
  },
];

const headingClass =
  "text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight";

const PoojaRoom = () => {
  return (
    <>
      <SEO
        title="Pooja Room Interior Design Ideas for Indian Homes | D Furniture"
        description="Looking for pooja room interior design ideas? Explore 6 simple, modern and Vastu-friendly designs for small and big homes. Get expert help in Delhi NCR."
        keywords="pooja room interior design ideas, Pooja room interior designing company in Delhi NCR"
        url="https://www.dfurniture.in/pooja-room"
      />

      {/* banner */}
      <section
        className="flex flex-col items-center justify-center h-[250px] sm:h-[350px] md:h-[450px] text-center relative"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></section>

      {/* category links */}
      <section className="py-5 px-4 sm:px-10 lg:px-20">
        <div className="flex overflow-x-auto gap-3 sm:gap-5 p-1 scrollbar-hide">
          {[
            { to: "/modular-kitchen", label: "Kitchen" },
            { to: "/architectural-master-bedroom-interiors-in-delhi", label: "Master Bedroom" },
            { to: "/living-room", label: "Living Room" },
            { to: "/bathroom", label: "Bathroom" },
            { to: "/wardrobe", label: "Wardrobe" },
            { to: "/study-room-interior-designer", label: "Study Room" },
            { to: "/kids-bedroom-designer-company", label: "Kid's" },
            { to: "/modular-tv-unit", label: "TV Unit" },
            { to: "/pooja-room", label: "Pooja Room" },
          ].map(({ to, label }) => (
            <Link key={to} to={to} className="flex-shrink-0">
              <p className="py-[6px] px-5 bg-primary text-white font-semibold tracking-wide rounded-full whitespace-nowrap text-sm sm:text-base">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* intro */}
      <section className="px-4 sm:px-10 lg:px-20 text-center">
        <h1 className="text-primary mt-3 font-extrabold text-[28px] sm:text-[36px] lg:text-[45px] leading-tight">
          Pooja Room Interior Design Ideas: 6 Simple and Beautiful Ways to
          Create a Peaceful Prayer Space
        </h1>
        <p className="text-black/80 mt-5 text-left">
          The pooja room is the most peaceful corner of every Indian home. It
          is the place where the family sits together, lights a diya and
          starts the day with positive energy. That is why people today are
          looking for the best <strong>pooja room interior design ideas</strong>{" "}
          that look beautiful, feel calm and also fit their budget and space.
        </p>
        <p className="text-black/80 mt-5 text-left">
          Whether you live in a small flat or a big villa, you can create a
          lovely pooja space. In this blog, we share 6 easy and modern ideas,
          some Vastu tips and a few common mistakes to avoid. Let us begin.
        </p>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pt-5 pb-5">
        <h2 className={headingClass}>
          Why Is a Pooja Room Important in Every Home?
        </h2>
        <p className="text-black/80 mt-3">
          A pooja room is not just a place to keep idols. It gives your mind a
          quiet space to relax, pray and feel connected. A well-designed pooja
          room brings:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">A calm and positive feeling in the house</li>
          <li className="text-black/80">A clean and organised place for all pooja items</li>
          <li className="text-black/80">
            A beautiful look that matches the rest of your home interior
          </li>
        </ul>
        <p className="text-black/80 mt-3">
          With the right pooja room interior design ideas, even a tiny corner
          can feel divine.
        </p>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className={headingClass}>
          Why Hire a Professional Pooja Room Designer?
        </h2>
        <p className="text-black/80 mt-3">
          A pooja room needs more planning than just buying a ready-made
          temple. A good designer looks at your room size, where the idols
          will sit, storage, lighting, air flow and how the pooja area
          connects with the rest of your home. A professional can help you
          to:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            <strong>Use space smartly:</strong> a neat mandir for a small flat
            or a full prayer room for a big home.
          </li>
          <li className="text-black/80">
            <strong>Mix traditional and modern styles:</strong> carved wood,
            marble and jali can be combined with clean modern finishes.
          </li>
          <li className="text-black/80">
            <strong>Plan the lighting properly:</strong> the mandir should
            glow softly, without harsh glare or too much heat.
          </li>
          <li className="text-black/80">
            <strong>Add storage:</strong> a place for incense, lamps, bells,
            holy books and thali.
          </li>
          <li className="text-black/80">
            <strong>Keep cleaning easy:</strong> choose surfaces that are
            simple to wipe and maintain.
          </li>
          <li className="text-black/80">
            <strong>Match the rest of the home:</strong> the pooja area should
            blend with your living room, flooring and furniture.
          </li>
        </ul>
        <p className="text-black/80 mt-3">
          If your family follows Vastu, tell the designer in the very first
          meeting. Vastu should be balanced with your actual floor plan,
          ventilation and safety.
        </p>
      </section>

      {/* design catalogue */}
      <section className="pt-8 pb-12 px-4 text-center sm:px-10 lg:px-20">
        <h2 className="text-primary mt-3 font-extrabold text-[22px] sm:text-[30px] lg:text-[40px] leading-tight">
          6 Best Pooja Room Interior Design Ideas for Indian Homes
        </h2>
        <p className="text-black/80 mt-3">
          Here are six pooja designs from D Furniture. Each one suits a
          different home, style and space, so you can pick the one that feels
          right for your family.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
          {poojaItems.map((item) => (
            <div
              key={item.alt}
              className="border-[1px] border-category rounded-lg p-3 group flex flex-col text-left"
            >
              <div className="h-52 sm:h-56 md:h-60 overflow-hidden rounded-lg">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] mt-2 text-heading font-semibold">
                {item.title}
              </h3>
              <p className="text-black/80 mt-1 flex-1">{item.description}</p>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <button className="bg-category py-2 sm:py-3 w-full text-xs sm:text-sm text-white rounded-full transition-all duration-300 hover:bg-[#BB9A65]">
                  <a href="https://wa.me/919818855471">Book Free Consultation</a>
                </button>
                <button className="border-[1px] border-black py-2 sm:py-3 w-full text-xs sm:text-sm text-black rounded-full transition-all duration-300 hover:bg-heading hover:text-white">
                  <a href="https://wa.me/919818855471">Get Quote</a>
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-black/80 mt-8">
          <strong>Like any of these designs?</strong> You can book a free
          consultation with the D Furniture team and get a pooja unit made to
          suit your home and space.
        </p>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className={headingClass}>Simple Vastu Tips for Pooja Room Design</h2>
        <p className="text-black/80 mt-3">
          Most families like to follow Vastu while planning a pooja room. Here
          are some easy points:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            <strong>Best direction:</strong> North-East (Ishaan corner) is
            considered the best for a pooja room.
          </li>
          <li className="text-black/80">
            <strong>Idol direction:</strong> Place idols so that you face East
            or North while praying.
          </li>
          <li className="text-black/80">
            <strong>Avoid:</strong> Do not build the pooja room near the
            bathroom or under a staircase that has a toilet above or beside
            it.
          </li>
          <li className="text-black/80">
            <strong>Keep it clean:</strong> Always keep the area tidy, bright
            and well-ventilated.
          </li>
          <li className="text-black/80">
            <strong>Colours:</strong> Light colours like white, cream, yellow
            and light orange are the best choice.
          </li>
        </ul>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className={headingClass}>Which Material Is Best for a Pooja Room?</h2>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            <strong>Solid wood or engineered wood:</strong> Strong, classic and
            long-lasting.
          </li>
          <li className="text-black/80">
            <strong>Marble or stone:</strong> Gives a pure, divine look and is
            easy to clean.
          </li>
          <li className="text-black/80">
            <strong>MDF / plywood with laminate or veneer:</strong>{" "}
            Budget-friendly and available in many designs.
          </li>
          <li className="text-black/80">
            <strong>Corian or acrylic:</strong> Gives a modern, smooth finish.
          </li>
          <li className="text-black/80">
            <strong>Brass and metal accents:</strong> Add a traditional and
            royal touch.
          </li>
        </ul>
        <p className="text-black/80 mt-3">
          Choose a material according to your budget, your home style and how
          much maintenance you can manage.
        </p>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className={headingClass}>
          Lighting Ideas That Make a Pooja Room Look Divine
        </h2>
        <p className="text-black/80 mt-3">
          Lighting is one of the most important pooja room interior design
          ideas, because it changes the whole feel of the room. Use:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">Warm LED strip lights behind the mandir</li>
          <li className="text-black/80">Small spotlights on the idols</li>
          <li className="text-black/80">Hanging brass lamps or lanterns</li>
          <li className="text-black/80">Natural light from a window if possible</li>
        </ul>
        <p className="text-black/80 mt-3">
          Avoid very bright or colourful lights. Soft and warm lighting is
          always best.
        </p>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className={headingClass}>
          Common Mistakes to Avoid While Designing a Pooja Room
        </h2>
        <ol className="mt-3 list-decimal pl-5 space-y-1">
          <li className="text-black/80">
            Keeping too many idols and decoration items in a small space
          </li>
          <li className="text-black/80">
            Ignoring storage, which makes the area look messy
          </li>
          <li className="text-black/80">
            Using dark and heavy colours that make the room feel closed
          </li>
          <li className="text-black/80">
            Placing the pooja room in the wrong direction without planning
          </li>
          <li className="text-black/80">
            Choosing low-quality material that gets damaged by smoke, oil or
            moisture
          </li>
        </ol>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className={headingClass}>
          Safety and Maintenance Tips for Your Pooja Room
        </h2>
        <p className="text-black/80 mt-3">
          A beautiful mandir should also be safe and easy to keep clean.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            Keep diyas and incense away from wood, curtains and other things
            that can catch fire.
          </li>
          <li className="text-black/80">
            Make sure the room has fresh air or a window so smoke does not
            collect.
          </li>
          <li className="text-black/80">
            Before fixing a heavy wall-mounted unit, check that the wall can
            hold the weight.
          </li>
          <li className="text-black/80">
            Do not cut or change a structural wall to make a niche without
            expert advice.
          </li>
          <li className="text-black/80">
            Dust carved panels and jali regularly, and clean oil or incense
            marks quickly.
          </li>
          <li className="text-black/80">
            Ask how marble should be sealed and cleaned, because natural stone
            can stain.
          </li>
        </ul>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className={headingClass}>How to Choose the Right Pooja Room Designer</h2>
        <p className="text-black/80 mt-3">
          Before you finalise anyone, check these points:
        </p>
        <ol className="mt-3 list-decimal pl-5 space-y-1">
          <li className="text-black/80">
            <strong>See past work:</strong> ask for photos of similar mandir
            projects.
          </li>
          <li className="text-black/80">
            <strong>Share your needs:</strong> tell them your style, idol size,
            pooja items and Vastu wishes.
          </li>
          <li className="text-black/80">
            <strong>Check the material:</strong> confirm if it is solid wood,
            engineered wood, laminate or marble.
          </li>
          <li className="text-black/80">
            <strong>Look at the drawing:</strong> check sizes, shelf height,
            storage and light positions.
          </li>
          <li className="text-black/80">
            <strong>Ask about safety:</strong> discuss heat from lamps, wiring
            and smoke.
          </li>
          <li className="text-black/80">
            <strong>Get an itemised quote:</strong> carpentry, stone, lighting,
            hardware and installation should be listed separately.
          </li>
          <li className="text-black/80">
            <strong>Fix time and warranty:</strong> agree on the work schedule,
            payment steps and warranty in writing.
          </li>
        </ol>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className={headingClass}>
          Looking for a Pooja Room Interior Designing Company in Delhi NCR?
        </h2>
        <p className="text-black/80 mt-3">
          Planning and building a pooja room can feel confusing. You need the
          right design, the right size, good material and neat finishing. This
          is where a professional{" "}
          <strong>pooja room interior designing company in Delhi NCR</strong>{" "}
          can help you.
        </p>
        <p className="text-black/80 mt-3">
          At <strong>D Furniture</strong>, we understand that your pooja room
          is a very personal and special space. Our team helps you with:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            Custom pooja room designs for small, medium and large homes
          </li>
          <li className="text-black/80">Vastu-friendly planning</li>
          <li className="text-black/80">Good quality material and neat finishing</li>
          <li className="text-black/80">
            Designs that match your home interior and budget
          </li>
          <li className="text-black/80">Timely work and easy communication</li>
        </ul>
        <p className="text-black/80 mt-3">
          We work with homes across Delhi, Noida, Gurgaon, Ghaziabad and
          Faridabad, and we bring your ideas to life with care.
        </p>
        <p className="text-black/80 mt-3">
          <strong>Want a beautiful pooja room for your home?</strong> Visit{" "}
          <a href="https://www.dfurniture.in/" className="text-primary underline">
            www.dfurniture.in
          </a>{" "}
          or contact the D Furniture team today to discuss your idea and get a
          design that suits your space.
        </p>
      </section>

      <ProductFAQ faqs={poojaFaqs} />

      <section className="px-4 sm:px-10 lg:px-20 pb-5 mb-5">
        <h2 className={headingClass}>Final Words</h2>
        <p className="text-black/80 mt-3">
          A pooja room does not have to be big to be beautiful. With the right{" "}
          <strong>pooja room interior design ideas</strong>, good lighting,
          simple Vastu planning and quality material, you can make a peaceful
          space that the whole family loves. If you want expert help, connect
          with a trusted{" "}
          <strong>pooja room interior designing company in Delhi NCR</strong>{" "}
          and turn your dream mandir into reality.
        </p>
      </section>
    </>
  );
};

export default PoojaRoom;

const galleryData = {
  bridal: {
    title: "Bridal Mehndi Designs",
    description:
      "Luxurious bridal mehndi with intricate details and 100% organic henna — perfect for Punjabi weddings and royal bridal looks.",
    blog: `
      <p><strong>Bridal Mehndi</strong> at <strong>Chintu | The Henna Vibe</strong> is crafted to make your big day unforgettable. Our designs blend <em>traditional Indian motifs</em> with <em>modern bridal trends</em>, reflecting love, prosperity, and elegance.</p>
      <p>We use <strong>100% natural and chemical-free henna</strong> to give a deep, long-lasting stain while keeping your skin safe. From full-hand intricate patterns to minimal bridal elegance, our expert artists ensure perfection in every stroke.</p>
      <p>Whether you're planning a grand Punjabi wedding or an intimate ceremony, our <strong>bridal mehndi designs in Phagwara</strong> are customized to your outfit, style, and story.</p>
    `,
  },

  arabic: {
    title: "Arabic Mehndi Designs",
    description:
      "Bold, flowing Arabic mehndi with floral and leafy patterns — perfect for festivals, parties, and quick elegant looks.",
    blog: `
      <p><strong>Arabic Mehndi</strong> is known for its bold outlines, flowing vines, and floral charm. At <strong>Chintu | The Henna Vibe</strong>, our Arabic designs combine <em>traditional Gulf-inspired artistry</em> with <em>modern aesthetics</em> for a stunning look.</p>
      <p>Perfect for <strong>Karwa Chauth, Eid, Diwali, and wedding guests</strong>, these designs are lightweight yet impactful. Our natural henna ensures a rich stain that enhances every celebration.</p>
      <p>Get the most trending <strong>Arabic mehndi in Punjab</strong> and elevate your festive style effortlessly.</p>
    `,
  },

  engagement: {
    title: "Engagement Mehndi Designs",
    description:
      "Elegant engagement mehndi symbolizing love and togetherness — ideal for pre-wedding celebrations.",
    blog: `
      <p>Your engagement day marks the beginning of a beautiful journey — and <strong>Chintu | The Henna Vibe</strong> makes it even more special with graceful <strong>engagement mehndi designs</strong>.</p>
      <p>We blend romantic motifs like hearts, rings, and initials with floral patterns to capture your love story. Each design is elegant, balanced, and perfect for photographs.</p>
      <p>Our artists in <strong>Phagwara</strong> bring creativity and precision to ensure your mehndi complements your engagement outfit and theme beautifully.</p>
    `,
  },

  babyshower: {
    title: "Baby Shower Mehndi Designs",
    description:
      "Adorable mehndi art for moms-to-be — crafted with care using 100% organic henna for safe, joyful celebrations.",
    blog: `
      <p>Celebrate motherhood with <strong>Baby Shower Mehndi</strong> by <strong>Chintu | The Henna Vibe</strong>. Our artists create cute and symbolic designs like <em>baby footprints, cradles, and flowers</em> to mark this special milestone.</p>
      <p>We use <strong>chemical-free organic mehndi</strong> safe for expecting mothers. The soothing aroma and rich stain add warmth to the celebration.</p>
      <p>Whether it’s a cozy family event or a grand function, our <strong>baby shower mehndi in Phagwara</strong> adds love and positivity to your special day.</p>
    `,
  },

  karwachauth: {
    title: "Karwa Chauth Mehndi Designs",
    description:
      "Traditional Karwa Chauth mehndi with moon, sieve, and couple motifs — symbolizing love and devotion.",
    blog: `
      <p><strong>Karwa Chauth Mehndi</strong> is all about tradition, love, and devotion. At <strong>Chintu | The Henna Vibe</strong>, we design stunning henna patterns featuring <em>moon motifs, couples, and intricate vines</em> that capture the spirit of the festival.</p>
      <p>Our expert artists specialize in <strong>Karwa Chauth mehndi in Punjab</strong> that lasts long and looks breathtaking under the moonlight.</p>
      <p>Celebrate this festival of love with mehndi that speaks your emotions through elegant artistry.</p>
    `,
  },

  flower: {
    title: "Floral Mehndi Designs",
    description:
      "Elegant floral and mandala-inspired mehndi — simple, stylish, and perfect for any occasion.",
    blog: `
      <p><strong>Floral Mehndi</strong> designs are timeless and versatile. At <strong>Chintu | The Henna Vibe</strong>, we craft beautiful <em>flower and mandala-inspired mehndi</em> that radiates grace and positivity.</p>
      <p>These designs are ideal for <strong>parties, casual events, or pre-wedding ceremonies</strong>. The patterns are light, feminine, and beautifully flow with your hands’ natural curves.</p>
      <p>Get your <strong>floral mehndi design in Phagwara</strong> with rich organic color and modern artistic touches.</p>
    `,
  },

  indian: {
    title: "Indian Mehndi Designs",
    description:
      "Traditional Indian mehndi rich with peacocks, paisleys, and cultural motifs — perfect for weddings and festivals.",
    blog: `
      <p><strong>Indian Mehndi</strong> is known for its intricate details and cultural symbolism. At <strong>Chintu | The Henna Vibe</strong>, we bring the essence of Indian traditions to life through beautifully detailed designs featuring <em>bride-groom motifs, paisleys, mandalas, and peacocks</em>.</p>
      <p>Our team has over <strong>12 years of experience</strong> in creating authentic <strong>Indian mehndi designs in Punjab</strong> using 100% natural henna for a rich, dark finish.</p>
      <p>Perfect for weddings, religious functions, or festive celebrations — our Indian mehndi connects heritage with modern elegance.</p>
    `,
  },

  mandala: {
    title: "Mandala Mehndi Designs",
    description:
      "Circular, symmetrical mandala mehndi symbolizing beauty, balance, and spirituality — ideal for all occasions.",
    blog: `
      <p><strong>Mandala Mehndi</strong> is the heart of spiritual henna art. At <strong>Chintu | The Henna Vibe</strong>, our mandala patterns symbolize <em>wholeness, eternity, and harmony</em>.</p>
      <p>From simple circular mandalas to complex layered masterpieces, our designs are perfect for <strong>Karwa Chauth, Diwali, engagements, or meditation ceremonies</strong>.</p>
      <p>Experience the <strong>best mandala mehndi in Phagwara</strong>, handcrafted with precision and passion for timeless elegance.</p>
    `,
  },
};

console.log("Gallery page loaded");

const params = new URLSearchParams(window.location.search);
let type = params.get("type")  ?? "bridal";

if (type && galleryData[type]) {
  document.getElementById("dynamic-gallery-info").style.display = "block";
  document.getElementById("gallery-title").textContent =
    galleryData[type].title;
  document.getElementById("gallery-description").textContent =
    galleryData[type].description;
  document.getElementById("gallery-blog").innerHTML = galleryData[type].blog;
}

const gallerySection = document.querySelector(".photo-gallery");
gallerySection.innerHTML = ""; // Clear old images
type = type === "flower" ? "mandala" :  type; // map flower to mandala4
const index = type === "karwachauth" || type === "arabic" ? 4 : 6; // karwachauth has 5 images, others have 6
for (let i = 1; i <= index; i++) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const p = document.createElement("p");

  // handle different file types if needed
  const imageExtensions = [".png", ".PNG", ".jpg", ".jpeg", ".webp"];
  let found = false;

  console.log("Loading images for type:", type);
  for (const ext of imageExtensions) {
    const imagePath = `../../images/${type === "engagement" ? "engegment" : type}/${type}-${i}.PNG`;
    img.src = imagePath;
    img.alt = `${galleryData[type].title} - Design ${i}`;
    found = true;
    break;
  }

  p.textContent = i.toString().padStart(2, "0");

  div.appendChild(img);
  div.appendChild(p);
  gallerySection.appendChild(div);
}

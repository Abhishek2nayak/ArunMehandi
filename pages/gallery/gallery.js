const galleryData = {
  bridal: {
    title: "Bridal Mehndi Designs",
    description:
      "Exquisite bridal Mehndi combining traditional motifs with modern patterns for an unforgettable wedding look.",
    blog: `
        <p>Bridal Mehndi is more than just an art form—it’s a tradition woven deeply into the cultural fabric of weddings. Every swirl, flower, and pattern carries a touch of heritage that makes the bride’s look complete.</p>
        <p>At Arun Mehandi Art, we specialize in creating personalized designs that match each bride’s unique style. Whether you prefer detailed traditional motifs or a fusion of modern trends, our artists ensure that your Mehndi is a reflection of your personality.</p>
        <p>We use only natural, high-quality henna for a rich, long-lasting stain that’s gentle on the skin. The application process is not just about the design—it’s an experience filled with joy, laughter, and anticipation for the big day.</p>
        <p>From the first stroke to the final reveal, our goal is to make your Mehndi ceremony a memorable chapter in your wedding story.</p>
      `,
  },
  arabic: {
    title: "Arabic Mehndi Designs",
    description:
      "Flowing, bold patterns with floral elegance, perfect for festive and casual celebrations.",
    blog: `
        <p>Arabic Mehndi is known for its bold floral patterns, flowing lines, and elegant curves that create a sophisticated look. Unlike traditional dense designs, Arabic styles leave spaces between elements, adding a sense of lightness and charm.</p>
        <p>These designs are ideal for festivals, casual gatherings, or when you want something beautiful yet less time-consuming. Our Arabic Mehndi work combines traditional artistry with modern flair, ensuring each design feels fresh and unique.</p>
        <p>The application is quicker than bridal Mehndi but equally impactful, making it a favorite for Eid, Diwali, or even engagement functions. We use high-quality henna that stains beautifully and lasts for days.</p>
        <p>Perfect for those who want elegance without overwhelming detail, Arabic Mehndi is timeless in its appeal.</p>
      `,
  },
  portrait: {
    title: "Portrait Mehndi Designs",
    description:
      "Custom portrait Mehndi capturing faces, figures, and moments in intricate henna detail.",
    blog: `
        <p>Portrait Mehndi is a modern and highly artistic take on traditional henna, featuring realistic depictions of faces, couples, or special moments. This style transforms your Mehndi into a truly personal and unique masterpiece.</p>
        <p>At Arun Mehandi Art, we specialize in crafting portraits that resemble loved ones or symbolize meaningful moments in your life. From a bride and groom illustration to iconic cultural figures, the possibilities are endless.</p>
        <p>Creating a portrait in Mehndi requires exceptional precision and patience, and our artists excel in both. The result is not just decoration—it’s wearable art that tells a story.</p>
        <p>Perfect for weddings, anniversaries, or special gifts, portrait Mehndi adds a one-of-a-kind touch to your celebration.</p>
      `,
  },
  babyshower: {
    title: "Baby Shower Mehndi Designs",
    description:
      "Celebratory Mehndi for moms-to-be, filled with joy, blessings, and symbolic designs.",
    blog: `
        <p>Baby shower Mehndi celebrates the joy of motherhood with designs that symbolize love, protection, and blessings for the baby. These designs often feature motifs like baby cradles, tiny footprints, and floral patterns representing new life.</p>
        <p>Our team ensures the designs are gentle, safe, and meaningful, using natural henna that’s safe for expecting mothers. The application is relaxing and can be a beautiful bonding moment with family and friends.</p>
        <p>Whether it’s a small gathering or a grand celebration, baby shower Mehndi adds warmth and elegance to the occasion, making it even more memorable.</p>
        <p>We tailor each design to reflect the mom-to-be’s journey, ensuring it’s as special as the moment itself.</p>
      `,
  },
  figure: {
    title: "Figure Mehndi Designs",
    description:
      "Artistic Mehndi featuring human and animal figures for storytelling and cultural depth.",
    blog: `
        <p>Figure Mehndi incorporates artistic depictions of people, animals, and cultural icons, turning henna into a storytelling medium. Each figure holds meaning, whether it’s a traditional bride, a peacock symbolizing beauty, or a deity representing blessings.</p>
        <p>Our figure designs are drawn with intricate detail, ensuring every feature is expressive and captivating. This style is perfect for cultural events, theme parties, or anyone wanting something bold and symbolic.</p>
        <p>We blend traditional figure motifs with modern creativity, ensuring your Mehndi is as unique as your story.</p>
        <p>Every line, curve, and figure is placed with intention, creating a design that’s not just beautiful but deeply meaningful.</p>
      `,
  },
  mandala: {
    title: "Mandala Mehndi Designs",
    description:
      "Geometric and symmetrical designs symbolizing unity, eternity, and spiritual connection.",
    blog: `
        <p>Mandala Mehndi is rooted in spirituality, featuring circular patterns that represent wholeness, unity, and eternity. These designs are perfect for meditation, festivals, or anyone who appreciates balanced, symmetrical art.</p>
        <p>Our mandala work ranges from minimal single-circle designs to complex layered patterns covering the hands and arms. The symmetry and precision create a calming, mesmerizing effect.</p>
        <p>Mandala Mehndi can be adapted for both casual wear and grand events, making it versatile and timeless. It pairs beautifully with other styles, including floral and geometric elements.</p>
        <p>Whether for beauty, symbolism, or both, mandala designs carry an energy that’s truly special.</p>
      `,
  },
};

const params = new URLSearchParams(window.location.search);
const type = params.get("type");

if (type && galleryData[type]) {
  document.getElementById("dynamic-gallery-info").style.display = "block";
  document.getElementById("gallery-title").textContent =
    galleryData[type].title;
  document.getElementById("gallery-description").textContent =
    galleryData[type].description;
  document.getElementById("gallery-blog").innerHTML = galleryData[type].blog;
}

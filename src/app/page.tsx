"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers."},
  {"id":"contact-image","url":"https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A group of diverse friends laughing and enjoying pizza together indoors."}
];

export default function Home() {
  return (
    <ThemeProvider 
      defaultButtonVariant="text-stagger" 
      defaultTextAnimation="entrance-slide" 
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal 
          logoSrc="/assets/pizzeria-logo.svg" 
          logoAlt="Pizzeria Logo" 
          brandName="Pizzeria" 
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <HeroBillboard 
            title="Welcome to Our Pizzeria!" 
            description="Taste the best pizza in town with fresh ingredients and unique recipes." 
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url} 
            buttons={[{ text: "Explore Menu", href: "menu" }, { text: "Contact Us", href: "contact" }]} 
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <TextSplitAbout 
            title="Our Story" 
            description={[
              "We've been serving the community with authentic pizza since 1985.",
              "Our mission is to provide a delightful dining experience with every slice."
            ]} 
            buttons={[{ text: "Learn More", href: "about" }]} 
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <ContactCenter 
            tag="Stay Connected" 
            title="Join our Newsletter" 
            description="Receive exclusive offers and updates directly to your inbox." 
            inputPlaceholder="Your email address" 
            buttonText="Subscribe" 
            termsText="We respect your privacy. Unsubscribe anytime." 
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <FooterBase 
            columns={[
              { title: "Our Pizza", items: [{ label: "Menu", href: "menu" }, { label: "About", href: "about" }] },
              { title: "Support", items: [{ label: "Contact", href: "contact" }, { label: "Terms", href: "terms" }] }
            ]} 
            logoSrc="/assets/pizzeria-logo.svg" 
            copyrightText="© 2025 | Pizzeria" 
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

import { useState } from "react";
import {
  Heart,
  Home,
  Search,
  User,
  ArrowLeft,
  Eye,
  EyeOff,
  Star,
  ShoppingBag,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  colors: string[];
  sizes?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Air Nova X1",
    category: "Sneakers",
    price: 189,
    rating: 4.8,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&auto=format",
    description: "A revolutionary silhouette for those who move between worlds. Lightweight foam midsole with reactive cushioning and engineered mesh upper.",
    colors: ["#0a0a1a", "#ffffff", "#e63946"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: 2,
    name: "Stealth Watch Pro",
    category: "Wearables",
    price: 349,
    rating: 4.9,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&auto=format",
    description: "Precision-engineered timepiece with sapphire crystal glass, titanium case, and 72-hour power reserve. Water resistant to 300m.",
    colors: ["#2d2d2d", "#c0c0c0", "#1a3a5c"],
  },
  {
    id: 3,
    name: "Studio Pods Max",
    category: "Audio",
    price: 279,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&auto=format",
    description: "40mm custom drivers with adaptive noise cancellation. 30-hour battery, spatial audio, and memory foam ear cushions.",
    colors: ["#1a1a1a", "#f5f5f5", "#7c3aed"],
  },
  {
    id: 4,
    name: "Phantom Cam R5",
    category: "Cameras",
    price: 899,
    rating: 4.9,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop&auto=format",
    description: "45MP full-frame sensor with in-body stabilization and 8K RAW video.",
    colors: ["#1a1a1a", "#2d2d2d"],
  },
  {
    id: 5,
    name: "Drift Runner 2",
    category: "Sneakers",
    price: 145,
    rating: 4.6,
    reviews: 421,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop&auto=format",
    description: "Built for distance but styled for the moment. Carbon fibre plate and engineered mesh upper.",
    colors: ["#0a0a12", "#7c3aed", "#f0f0ff"],
    sizes: ["6", "7", "8", "9", "10", "11"],
  },
  {
    id: 6,
    name: "Vertex Pack 26L",
    category: "Bags",
    price: 195,
    rating: 4.8,
    reviews: 213,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&auto=format",
    description: "26L weatherproof daypack with laptop sleeve, hidden pockets, and AeroMesh back panel.",
    colors: ["#1a1a2e", "#2d4a1e", "#3d1a2e"],
  },
];

const PHONE_W = 320;
const PHONE_H = 680;

const ff = "'Outfit', sans-serif";

const fieldStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(26,26,46,0.8)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "14px",
  padding: "11px 14px",
  color: "#eeeeff",
  fontSize: "12px",
  fontFamily: "'Inter', sans-serif",
  outline: "none",
  boxSizing: "border-box",
};

function PhoneShell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: PHONE_W,
          height: PHONE_H,
          borderRadius: 36,
          background: "#0b0b16",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.7), 0 0 80px rgba(124,58,237,0.1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          fontFamily: ff,
          flexShrink: 0,
          position: "relative",
        }}
      >
        {/* Status bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 18px 4px", flexShrink: 0 }}>
          <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(238,238,255,0.4)", fontFamily: "'Inter',sans-serif" }}>9:41</span>
          <div style={{ width: 80, height: 10, background: "#0b0b16", borderRadius: 100 }} />
          <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
            <div style={{ width: 12, height: 6, border: "1px solid rgba(255,255,255,0.25)", borderRadius: 2, position: "relative" }}>
              <div style={{ width: 7, height: 4, background: "rgba(255,255,255,0.5)", borderRadius: 1, position: "absolute", top: 0, left: 0 }} />
            </div>
          </div>
        </div>
        {children}
      </div>
      <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(167,139,250,0.7)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}

/* ── Login ── */
function LoginScreen() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 160, flexShrink: 0, background: "linear-gradient(135deg, rgba(124,58,237,0.35) 0%, rgba(99,44,200,0.1) 60%, transparent 100%)", position: "relative", display: "flex", alignItems: "flex-end", padding: "0 22px 18px" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 90% 10%, rgba(167,139,250,0.18) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#7c3aed,#a78bfa)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ShoppingBag size={13} color="#fff" />
            </div>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#eeeeff", letterSpacing: "-0.3px" }}>Vault</span>
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: "#eeeeff", lineHeight: 1.15, letterSpacing: "-0.8px", margin: 0 }}>Welcome<br />back.</h1>
        </div>
      </div>
      <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 14, overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <label style={{ fontSize: 10, fontWeight: 600, color: "rgba(136,136,170,0.9)", letterSpacing: "1.2px", textTransform: "uppercase" }}>Email</label>
          <input type="email" defaultValue="alex@studio.io" style={fieldStyle} readOnly />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <label style={{ fontSize: 10, fontWeight: 600, color: "rgba(136,136,170,0.9)", letterSpacing: "1.2px", textTransform: "uppercase" }}>Password</label>
          <div style={{ position: "relative" }}>
            <input type={show ? "text" : "password"} defaultValue="password123" style={{ ...fieldStyle, paddingRight: 40 }} readOnly />
            <button onClick={() => setShow(!show)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(136,136,170,0.8)", display: "flex" }}>
              {show ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span style={{ fontSize: 11, color: "#a78bfa", cursor: "pointer" }}>Forgot password?</span>
        </div>
        <button style={{ padding: "13px 0", background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontWeight: 700, fontSize: 13, border: "none", borderRadius: 14, cursor: "pointer", boxShadow: "0 8px 24px rgba(124,58,237,0.35)", fontFamily: ff }}>
          Log In
        </button>
        <p style={{ textAlign: "center", fontSize: 12, color: "rgba(136,136,170,0.8)", margin: 0 }}>
          New to Vault? <span style={{ color: "#a78bfa", fontWeight: 700, cursor: "pointer" }}>Create account</span>
        </p>
      </div>
    </div>
  );
}

/* ── Register ── */
function RegisterScreen() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 140, flexShrink: 0, background: "linear-gradient(135deg, rgba(99,44,200,0.30) 0%, rgba(124,58,237,0.08) 60%, transparent 100%)", position: "relative", display: "flex", alignItems: "flex-end", padding: "0 22px 18px" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 10% 10%, rgba(167,139,250,0.16) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: 7, background: "linear-gradient(135deg,#7c3aed,#a78bfa)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ShoppingBag size={12} color="#fff" />
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#eeeeff", letterSpacing: "-0.3px" }}>Vault</span>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#eeeeff", lineHeight: 1.15, letterSpacing: "-0.8px", margin: 0 }}>Join<br />Vault.</h1>
        </div>
      </div>
      <div style={{ flex: 1, padding: "16px 22px", display: "flex", flexDirection: "column", gap: 12, overflow: "hidden" }}>
        {[["Username", "text", "@yourname"], ["Email", "email", "you@example.com"]].map(([lbl, type, ph]) => (
          <div key={lbl} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <label style={{ fontSize: 10, fontWeight: 600, color: "rgba(136,136,170,0.9)", letterSpacing: "1.2px", textTransform: "uppercase" }}>{lbl}</label>
            <input type={type} placeholder={ph} style={fieldStyle} />
          </div>
        ))}
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <label style={{ fontSize: 10, fontWeight: 600, color: "rgba(136,136,170,0.9)", letterSpacing: "1.2px", textTransform: "uppercase" }}>Password</label>
          <div style={{ position: "relative" }}>
            <input type={show ? "text" : "password"} placeholder="Min. 8 characters" style={{ ...fieldStyle, paddingRight: 40 }} />
            <button onClick={() => setShow(!show)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(136,136,170,0.8)", display: "flex" }}>
              {show ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          </div>
        </div>
        <p style={{ fontSize: 10, color: "rgba(136,136,170,0.6)", lineHeight: 1.6, margin: 0 }}>
          By creating an account you agree to our <span style={{ color: "#a78bfa" }}>Terms</span> and <span style={{ color: "#a78bfa" }}>Privacy Policy</span>.
        </p>
        <button style={{ padding: "13px 0", background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontWeight: 700, fontSize: 13, border: "none", borderRadius: 14, cursor: "pointer", boxShadow: "0 8px 24px rgba(124,58,237,0.35)", fontFamily: ff }}>
          Create Account
        </button>
        <p style={{ textAlign: "center", fontSize: 12, color: "rgba(136,136,170,0.8)", margin: 0 }}>
          Have an account? <span style={{ color: "#a78bfa", fontWeight: 700, cursor: "pointer" }}>Log in</span>
        </p>
      </div>
    </div>
  );
}

/* ── Home ── */
function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([1, 3]);
  const categories = ["All", "Sneakers", "Audio", "Wearables"];
  const displayProducts = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);
  const toggle = (id: number) => setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 8 }}>
        {/* Header */}
        <div style={{ padding: "14px 18px 12px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <div>
              <p style={{ fontSize: 10, color: "rgba(136,136,170,0.8)", margin: 0, marginBottom: 2 }}>Good evening,</p>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "#eeeeff", letterSpacing: "-0.3px", margin: 0 }}>Alex Studio</h2>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#7c3aed,#a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#fff" }}>A</div>
          </div>
          <div style={{ position: "relative" }}>
            <Search size={13} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "rgba(136,136,170,0.7)" }} />
            <input type="text" placeholder="Search products..." style={{ ...fieldStyle, paddingLeft: 34, paddingTop: 10, paddingBottom: 10 }} />
          </div>
        </div>
        {/* Categories */}
        <div style={{ paddingLeft: 18, marginBottom: 14 }}>
          <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingRight: 18, paddingBottom: 2 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{ flexShrink: 0, padding: "5px 13px", borderRadius: 100, fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: ff, background: activeCategory === cat ? "#7c3aed" : "rgba(26,26,46,0.8)", color: activeCategory === cat ? "#fff" : "rgba(136,136,170,0.9)", border: activeCategory === cat ? "1px solid #7c3aed" : "1px solid rgba(255,255,255,0.07)" }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, padding: "0 18px" }}>
          {displayProducts.slice(0, 6).map(p => (
            <div key={p.id} style={{ background: "#12121f", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, overflow: "hidden", cursor: "pointer" }}>
              <div style={{ position: "relative", height: 110, background: "#1a1a2e" }}>
                <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <button onClick={() => toggle(p.id)} style={{ position: "absolute", top: 7, right: 7, width: 26, height: 26, borderRadius: "50%", background: "rgba(11,11,22,0.72)", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer" }}>
                  <Heart size={11} style={{ color: favorites.includes(p.id) ? "#f87171" : "rgba(136,136,170,0.8)", fill: favorites.includes(p.id) ? "#f87171" : "none" }} />
                </button>
              </div>
              <div style={{ padding: "8px 10px 10px" }}>
                <p style={{ fontSize: 9, color: "rgba(136,136,170,0.7)", margin: "0 0 2px" }}>{p.category}</p>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#eeeeff", margin: "0 0 5px", lineHeight: 1.3 }}>{p.name}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: "#a78bfa" }}>${p.price}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Star size={9} style={{ fill: "#fbbf24", color: "#fbbf24" }} />
                    <span style={{ fontSize: 9, color: "rgba(136,136,170,0.8)" }}>{p.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom nav */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(18,18,31,0.9)", padding: "10px 18px 14px", display: "flex", justifyContent: "space-around", flexShrink: 0 }}>
        {[{ icon: <Home size={17} />, label: "Home", active: true }, { icon: <Search size={17} />, label: "Search", active: false }, { icon: <Heart size={17} />, label: "Saved", active: false }, { icon: <User size={17} />, label: "Profile", active: false }].map(item => (
          <button key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer" }}>
            <span style={{ color: item.active ? "#7c3aed" : "rgba(136,136,170,0.7)" }}>{item.icon}</span>
            <span style={{ fontSize: 9, fontWeight: 600, color: item.active ? "#7c3aed" : "rgba(136,136,170,0.7)", fontFamily: ff }}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Detail ── */
function DetailScreen() {
  const product = products[0];
  const [selectedSize, setSelectedSize] = useState("9");
  const [selectedColor, setSelectedColor] = useState(0);
  const [fav, setFav] = useState(false);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflowY: "auto" }}>
      <div style={{ position: "relative", height: 210, background: "#1a1a2e", flexShrink: 0 }}>
        <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,11,22,0.85) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", top: 12, left: 14, right: 14, display: "flex", justifyContent: "space-between" }}>
          <button style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(11,11,22,0.72)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer" }}>
            <ArrowLeft size={15} style={{ color: "#eeeeff" }} />
          </button>
          <button onClick={() => setFav(!fav)} style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(11,11,22,0.72)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer" }}>
            <Heart size={15} style={{ color: fav ? "#f87171" : "#eeeeff", fill: fav ? "#f87171" : "none" }} />
          </button>
        </div>
        <div style={{ position: "absolute", bottom: 12, right: 14, display: "flex", alignItems: "center", gap: 4, background: "rgba(11,11,22,0.75)", borderRadius: 100, padding: "4px 10px" }}>
          <Star size={10} style={{ fill: "#fbbf24", color: "#fbbf24" }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: "#eeeeff" }}>{product.rating}</span>
          <span style={{ fontSize: 11, color: "rgba(136,136,170,0.8)" }}>({product.reviews})</span>
        </div>
      </div>
      <div style={{ flex: 1, padding: "16px 18px 20px" }}>
        <p style={{ fontSize: 10, color: "#a78bfa", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 4px" }}>{product.category}</p>
        <h1 style={{ fontSize: 20, fontWeight: 800, color: "#eeeeff", letterSpacing: "-0.5px", margin: "0 0 8px", lineHeight: 1.2 }}>{product.name}</h1>
        <p style={{ fontSize: 11, color: "rgba(136,136,170,0.85)", lineHeight: 1.7, margin: "0 0 16px" }}>{product.description}</p>
        {/* Colors */}
        <div style={{ marginBottom: 14 }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: "rgba(136,136,170,0.8)", letterSpacing: "1.2px", textTransform: "uppercase", margin: "0 0 8px" }}>Color</p>
          <div style={{ display: "flex", gap: 8 }}>
            {product.colors.map((c, i) => (
              <button key={i} onClick={() => setSelectedColor(i)} style={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: c, border: selectedColor === i ? "2px solid #a78bfa" : "2px solid transparent", outline: selectedColor === i ? "2px solid rgba(167,139,250,0.3)" : "none", cursor: "pointer", transform: selectedColor === i ? "scale(1.15)" : "scale(1)", transition: "all 0.2s" }} />
            ))}
          </div>
        </div>
        {/* Sizes */}
        <div style={{ marginBottom: 18 }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: "rgba(136,136,170,0.8)", letterSpacing: "1.2px", textTransform: "uppercase", margin: "0 0 8px" }}>Size</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {product.sizes!.map(s => (
              <button key={s} onClick={() => setSelectedSize(s)} style={{ width: 36, height: 36, borderRadius: 10, fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: ff, background: selectedSize === s ? "#7c3aed" : "rgba(26,26,46,0.8)", color: selectedSize === s ? "#fff" : "rgba(136,136,170,0.9)", border: selectedSize === s ? "1px solid #7c3aed" : "1px solid rgba(255,255,255,0.07)", transition: "all 0.2s" }}>
                {s}
              </button>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div>
            <p style={{ fontSize: 10, color: "rgba(136,136,170,0.7)", margin: "0 0 2px" }}>Price</p>
            <p style={{ fontSize: 22, fontWeight: 800, color: "#eeeeff", letterSpacing: "-0.5px", margin: 0 }}>${product.price}</p>
          </div>
          <button style={{ flex: 1, padding: "13px 0", background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontWeight: 700, fontSize: 12, border: "none", borderRadius: 14, cursor: "pointer", boxShadow: "0 8px 24px rgba(124,58,237,0.35)", fontFamily: ff }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Favorites ── */
function FavoritesScreen() {
  const favProducts = products.filter(p => [1, 3, 5].includes(p.id));
  const [favs, setFavs] = useState<number[]>([1, 3, 5]);
  const toggle = (id: number) => setFavs(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ padding: "16px 18px 12px" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#eeeeff", letterSpacing: "-0.5px", margin: "0 0 3px" }}>Saved Items</h2>
          <p style={{ fontSize: 11, color: "rgba(136,136,170,0.7)", margin: "0 0 16px" }}>{favs.length} items saved</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {favProducts.filter(p => favs.includes(p.id)).map(p => (
              <div key={p.id} style={{ background: "#12121f", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden", display: "flex", cursor: "pointer" }}>
                <div style={{ width: 76, height: 76, background: "#1a1a2e", flexShrink: 0 }}>
                  <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1, padding: "10px 12px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontSize: 9, color: "rgba(136,136,170,0.7)", margin: 0 }}>{p.category}</p>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#eeeeff", margin: "1px 0 3px" }}>{p.name}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                      <Star size={9} style={{ fill: "#fbbf24", color: "#fbbf24" }} />
                      <span style={{ fontSize: 9, color: "rgba(136,136,170,0.7)" }}>{p.rating} ({p.reviews})</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "#a78bfa" }}>${p.price}</span>
                    <button onClick={() => toggle(p.id)} style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(248,113,113,0.12)", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer" }}>
                      <Heart size={11} style={{ fill: "#f87171", color: "#f87171" }} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {favs.length === 0 && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 60, gap: 10 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Heart size={20} style={{ color: "rgba(136,136,170,0.6)" }} />
                </div>
                <p style={{ fontSize: 13, color: "rgba(136,136,170,0.7)", margin: 0 }}>Nothing saved yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(18,18,31,0.9)", padding: "10px 18px 14px", display: "flex", justifyContent: "space-around", flexShrink: 0 }}>
        {[{ icon: <Home size={17} />, label: "Home", active: false }, { icon: <Search size={17} />, label: "Search", active: false }, { icon: <Heart size={17} />, label: "Saved", active: true }, { icon: <User size={17} />, label: "Profile", active: false }].map(item => (
          <button key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer" }}>
            <span style={{ color: item.active ? "#7c3aed" : "rgba(136,136,170,0.7)" }}>{item.icon}</span>
            <span style={{ fontSize: 9, fontWeight: 600, color: item.active ? "#7c3aed" : "rgba(136,136,170,0.7)", fontFamily: ff }}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Root ── */
export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #060610 0%, #0d0820 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 32px",
        gap: 40,
        fontFamily: ff,
      }}
    >
      {/* Title */}
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg,#7c3aed,#a78bfa)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ShoppingBag size={16} color="#fff" />
          </div>
          <span style={{ fontSize: 22, fontWeight: 800, color: "#eeeeff", letterSpacing: "-0.5px" }}>Vault</span>
        </div>
        <p style={{ fontSize: 13, color: "rgba(136,136,170,0.6)", margin: 0, letterSpacing: "0.5px" }}>All screens — mobile app overview</p>
      </div>

      {/* Screens row */}
      <div
        style={{
          display: "flex",
          gap: 24,
          alignItems: "flex-start",
          overflowX: "auto",
          paddingBottom: 8,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <PhoneShell label="01 · Login">
          <LoginScreen />
        </PhoneShell>
        <PhoneShell label="02 · Register">
          <RegisterScreen />
        </PhoneShell>
        <PhoneShell label="03 · Home">
          <HomeScreen />
        </PhoneShell>
        <PhoneShell label="04 · Detail">
          <DetailScreen />
        </PhoneShell>
        <PhoneShell label="05 · Favorites">
          <FavoritesScreen />
        </PhoneShell>
      </div>
    </div>
  );
}

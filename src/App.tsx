import "./index.css";
import "./app.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Specialists from "./components/Specialists";
import Testimonials from "./components/Testimonials";
import Treatment from "./components/Treatment";

export default function App() {
	const revealEls = document.querySelectorAll(
		".reveal,.reveal-l,.reveal-r,.reveal-s",
	);
	const ro = new IntersectionObserver(
		(entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("show");
					ro.unobserve(e.target);
				}
			});
		},
		{ threshold: 0.12 },
	);
	revealEls.forEach((el) => ro.observe(el));

	document.querySelectorAll('a[href^="#"]').forEach((a) => {
		a.addEventListener("click", (e) => {
			const id = a.getAttribute("href").slice(1);
			if (!id) return;
			const el = document.getElementById(id);
			if (el) {
				e.preventDefault();
				el.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		});
	});

	document.querySelectorAll(".srv-card").forEach((card) => {
		card.addEventListener("mousemove", (e) => {
			const r = card.getBoundingClientRect();
			const x = (e.clientX - r.left) / r.width - 0.5;
			const y = (e.clientY - r.top) / r.height - 0.5;
			card.style.transform = `translateY(-14px) scale(1.02) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
		});
		card.addEventListener("mouseleave", () => (card.style.transform = ""));
	});

	return (
		<div className="app">
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Treatment />
				<Specialists />
				<Testimonials />
				<FAQ />
				<Contacts />
			</main>
			<Footer />
		</div>
	);
}

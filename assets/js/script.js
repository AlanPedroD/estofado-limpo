// Mobile menu
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMenu(open) {
  hamburger.classList.toggle('active', open);
  overlay.classList.toggle('active', open);
  mobileMenu.classList.toggle('active', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', () => toggleMenu(!mobileMenu.classList.contains('active')));
overlay.addEventListener('click', () => toggleMenu(false));
document.getElementById('mobileClose').addEventListener('click', () => toggleMenu(false));
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// WhatsApp form submit
function enviarWhatsapp() {
  const nome = document.querySelector('.contact-form input[type=text]').value;
  const tel = document.querySelector('.contact-form input[type=tel]').value;
  const servico = document.querySelector('.contact-form select').value;
  const msg = document.querySelector('.contact-form textarea').value;
  const texto = `Olá! Gostaria de solicitar um orçamento.\n\n👤 Nome: ${nome || 'Não informado'}\n📞 Telefone: ${tel || 'Não informado'}\n🛋️ Serviço: ${servico || 'Não selecionado'}\n💬 Mensagem: ${msg || 'Sem mensagem'}`;
  window.open(`https://wa.me/5582987460358?text=${encodeURIComponent(texto)}`, '_blank');
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

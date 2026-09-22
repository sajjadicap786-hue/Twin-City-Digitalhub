const WHATSAPP_NUMBER='923335232992';
const WHATSAPP_DISPLAY='0333 5232992';
function addWhatsAppButton(){if(document.querySelector('.floating-whatsapp'))return;
const a=document.createElement('a');a.className='floating-whatsapp';a.href='https://wa.me/'+WHATSAPP_NUMBER+'?text=Hello%20Twincity%20Digital%20Hub%2C%20I%20would%20like%20more%20information%20about%20your%20services.';a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','Chat with Twincity Digital Hub on WhatsApp');a.innerHTML='💬 WhatsApp';document.body.appendChild(a)}addWhatsAppButton();
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');if(menuBtn&&nav){menuBtn.addEventListener('click',()=>nav.classList.toggle('active'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('active')))}document.querySelectorAll('.faq button').forEach(btn=>btn.addEventListener('click',()=>{btn.parentElement.classList.toggle('open');btn.setAttribute('aria-expanded',btn.parentElement.classList.contains('open')?'true':'false')}));
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
const form=document.querySelector('#contactForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();
const msg=document.querySelector('#formMessage');if(msg){const data=new FormData(form);
const text=['Hello Twincity Digital Hub, I would like information about your services.','Name: '+(data.get('name')||''),'Email: '+(data.get('email')||''),'Business / Website: '+(data.get('business')||''),'City / Target Market: '+(data.get('location')||''),'Service: '+(data.get('service')||''),'Message: '+(data.get('message')||'')].join('\n');window.open('https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent(text),'_blank','noopener');if(msg){msg.textContent='WhatsApp has been opened with your enquiry. Press Send in WhatsApp to contact 0333 5232992.';msg.style.display='block'}msg.style.display='block'}form.reset()})}
const auditForm=document.querySelector('#auditForm');if(auditForm){auditForm.addEventListener('submit',e=>{e.preventDefault();
const msg=document.querySelector('#auditMessage');if(msg){msg.textContent='Thanks. Your audit request form is ready for connection to your form service or backend. No information has been transmitted from this demo form.';msg.style.display='block'}auditForm.reset()})}

/* Add relevant, accessible imagery to every hero without duplicating page markup. */
const HERO_IMAGES={
  'about.html':['https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=82','A collaborative digital marketing team in a bright office'],
  'services.html':['https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=82','Team planning a digital marketing strategy'],
  'seo.html':['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=82','Analytics dashboard showing digital growth'],
  'local-seo.html':['https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1100&q=82','Map used for local business search strategy'],
  'website-creation.html':['https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1100&q=82','Designer building a modern business website'],
  'social-media-marketing.html':['https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1100&q=82','Social media apps on a smartphone'],
  'content-marketing.html':['https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1100&q=82','Content planning and creative writing workspace'],
  'google-ads.html':['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=82','Performance marketing analytics dashboard'],
  'email-marketing.html':['https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1100&q=82','Email marketing campaign on a laptop'],
  'graphic-design.html':['https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1100&q=82','Graphic designer creating brand visuals'],
  'youtube-marketing.html':['https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1100&q=82','Video production setup for audience growth'],
  'ai-digital-marketing.html':['https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1100&q=82','Artificial intelligence visualization for modern marketing'],
  'portfolio.html':['https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1100&q=82','Creative digital project portfolio on a desk'],
  'blog.html':['https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1100&q=82','Digital marketing research and writing workspace'],
  'contact.html':['https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1100&q=82','Professional responding to a business enquiry'],
  'faq.html':['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=82','Team discussing questions and practical solutions'],
  'seo-audit.html':['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=82','Website data being reviewed during an SEO audit'],
  'pricing.html':['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1100&q=82','Planning a transparent marketing budget'],
  'privacy-policy.html':['https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1100&q=82','Secure digital privacy and data protection'],
  'terms.html':['https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1100&q=82','Business terms and documents on a desk']
};
function enhancePageHero(){const hero=document.querySelector('.page-hero');if(!hero)return;const key=location.pathname.split('/').pop()||'index.html';const details=HERO_IMAGES[key]||HERO_IMAGES['services.html'];const container=hero.querySelector('.container');if(!container||container.querySelector('.page-hero-visual'))return;const copy=document.createElement('div');copy.className='page-hero-copy';while(container.firstChild)copy.appendChild(container.firstChild);const visual=document.createElement('div');visual.className='page-hero-visual';const img=document.createElement('img');img.src=details[0];img.alt=details[1];img.width=1100;img.height=720;img.loading='eager';img.decoding='async';visual.appendChild(img);container.append(copy,visual)}
function enhanceHomeHero(){const card=document.querySelector('.hero-card');if(!card||card.querySelector('.hero-image'))return;const img=document.createElement('img');img.className='hero-image';img.src='https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=82';img.alt='Digital marketing professionals planning business growth';img.width=1000;img.height=620;img.loading='eager';img.decoding='async';card.prepend(img);card.classList.add('has-image')}
enhancePageHero();enhanceHomeHero();

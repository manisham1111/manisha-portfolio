
const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link").forEach(link=>{
  if(link.dataset.page===path || (path==="" && link.dataset.page==="index.html")) link.classList.add("active");
});
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
if(menuToggle) menuToggle.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>navLinks?.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in-view");observer.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const back=document.getElementById("backTop");
window.addEventListener("scroll",()=>back?.classList.toggle("visible",scrollY>500));
back?.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

const form=document.getElementById("contactForm");
form?.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(form);
  const name=data.get("name"), email=data.get("email"), subject=data.get("subject"), message=data.get("message");
  const body=`Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  window.location.href=`mailto:manisham11112006@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  const status=document.getElementById("formStatus");
  if(status) status.textContent="Opening your email app...";
});

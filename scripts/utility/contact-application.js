document.addEventListener("DOMContentLoaded",function(){const e=document.forms["contact-application-form"],t=document.getElementById("contact-form-btn"),n=document.getElementById("contact-form-please-wait"),s=document.getElementById("contact-form-success"),d=document.getElementById("contact-form-submit-error"),o=document.getElementById("form-date-time"),c=e=>new Promise(t=>setTimeout(t,e));e.addEventListener("submit",async function(a){a.preventDefault(),t.classList.add("hidden"),n.classList.remove("hidden");const i=(new Date).toLocaleString();o.value=i;const m=new FormData(e);try{const o=await fetch("https://script.google.com/macros/s/AKfycbz_rfMbuuO8p6lHX-AhtctINTjurIl6AwPhKgRiBe74ip1DckVbvzjZpXUQpi2n_U4u2A/exec",{method:"POST",body:m});await o.json();n.classList.add("hidden"),s.classList.remove("hidden"),await c(1e4),s.classList.add("hidden"),t.classList.remove("hidden"),e.reset()}catch(s){n.classList.add("hidden"),d.classList.remove("hidden"),await c(5e3),d.classList.add("hidden"),t.classList.remove("hidden"),e.reset()}}),window.history.replaceState&&window.history.replaceState(null,null,window.location.href)});
const _=document.querySelector(".js__form"),g=document.querySelector(".js__preview_name"),h=document.querySelector(".js__preview_job"),v=document.querySelector(".js__preview_phone"),y=document.querySelector(".js__preview_email"),L=document.querySelector(".js__preview_linkedn"),b=document.querySelector(".js__preview_github"),r=document.querySelector(".js__preview"),i=document.querySelector(".js-msg-phone"),a=document.querySelector(".js-msg-email"),u=document.querySelector(".js-msg-linkedin"),d=document.querySelector(".js-msg-git"),q=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,m=/^[A-Za-z]+[A-Za-z0-9]*(?:[-][A-Za-z0-9]+)*$/,k=/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,w=document.querySelector(".js-btn-reset"),T=document.querySelector(".js-onecol"),H=document.querySelector(".js-input-name"),E=document.querySelector(".js-input-job"),P=document.querySelector(".js-input-phone"),M=document.querySelector(".js-input-email"),I=document.querySelector(".js-input-linkedin"),C=document.querySelector(".js-input-github");localStorage.getItem("newCard");const p=document.querySelector(".js-cardLink"),f=document.querySelector(".js-create-error"),o={palette:"1",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function A(e){const t=e.target.name,n=e.target.value;t==="palette"&&(r.classList.remove("color-2","color-3"),o.palette=n,n==="2"?r.classList.add("color-2"):n==="3"&&r.classList.add("color-3"))}function x(e){const t=e.target.id,n=e.target.value;t!==""&&(o[t]=n,t==="name"?g.innerHTML=n:t==="job"?h.innerHTML=n:t==="email"?q.test(n)===!0?(y.href="mailto:"+n,a.innerHTML=""):a.innerHTML="La dirección de correo introducida no es válida.":t==="phone"?k.test(n)===!0?(v.href=n,i.innerHTML=""):i.innerHTML="El número de teléfono introducido no es válido.":t==="linkedin"?m.test(n)===!0?(L.href="http://linkedin.com/in/"+n,u.innerHTML=""):u.innerHTML="El nombre de usuario no es válido.":t==="github"&&(m.test(n)===!0?(b.href="http://github.com/"+n,d.innerHTML=""):d.innerHTML="El nombre de usuario no es válido."))}const N=e=>{A(e),x(e),console.log(o)};_.addEventListener("input",N);function O(){T.checked=!0,r.classList.remove("color-2"),r.classList.remove("color-3")}function R(e){e.palette="",e.name="",e.job="",e.phone="",e.email="",e.linkedin="",e.github="",e.photo="",console.log(e)}function F(){H.value="",E.value="",P.value="",M.value="",I.value="",C.value="",j.style.backgroundImage=""}function J(){g.innerHTML="Nombre Apellido",h.innerHTML="Front-end developer",v.href="",y.href="",L.href="",b.href="",S.style.backgroundImage="url(https://ih0.redbubble.net/image.1615061405.6202/raf,360x360,075,t,fafafa:ca443f4786.jpg)"}function U(e){R(o),F(),J(),O()}w.addEventListener("click",U);const c=new FileReader,$=document.querySelector(".js__profile-upload-btn"),j=document.querySelector(".js__profile-image"),S=document.querySelector(".js__profile-preview");function z(e){const t=e.currentTarget.files[0];c.addEventListener("load",G),c.readAsDataURL(t)}function G(){j.style.backgroundImage=`url(${c.result})`,S.style.backgroundImage=`url(${c.result})`,o.photo=c.result,localStorage.setItem("formData",JSON.stringify(o))}$.addEventListener("change",z);const Z=document.querySelectorAll(".js_collapsable-header"),B=document.querySelectorAll(".js_fieldset"),K=e=>{e.preventDefault();const n=e.currentTarget.parentNode;console.log(e.currentTarget),console.log(n.parentNode);for(const l of B)l===n?l.classList.remove("collapsable--close"):l.classList.add("collapsable--close")};for(const e of Z)e.addEventListener("click",K);const s=document.querySelector(".js_btnCreate"),D=document.querySelector(".js-section-created");function Q(e){e.preventDefault(),fetch("https://dev.adalab.es/api/card/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(o)}).then(t=>t.json()).then(t=>{console.log(t),t.success?(s.classList.remove("btn-create"),s.classList.add("btn-create_grey"),D.classList.remove("collapsed"),localStorage.setItem("newCard",JSON.stringify(o)),p.innerHTML=t.cardURL,p.href=t.cardURL):t.error.toLowerCase().includes("mandatory field")?f.innerHTML="Es necesario rellenar todos los campos.":t.error.includes("ER_DATA_TOO_LONG")&&(f.innerHTML="El peso de la imagen no puede ser superior a 19KB.")})}s.addEventListener("click",Q);
//# sourceMappingURL=main.js.map

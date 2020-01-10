function openNav() {
    document.getElementById("myTopnav").style.right = "0"
}

function closeNav() {
    document.getElementById("myTopnav").style.right = "-250px"
}
for (var btns = document.getElementsByClassName("dropbtn"), i = 0; i < btns.length; i++) btns[i].addEventListener("click", function() {
    var t = document.getElementsByClassName("active");
    0 < t.length && (t[0].className = t[0].className.replace(" active", "")), this.className += " active"
});

function menuoverlayOn() {
    document.getElementById("menuoverlay").style.display = "block"
}

function menuoverlayOff() {
    document.getElementById("menuoverlay").style.display = "none"
}

function addClassBody() {
    var t, e;
    e = "flow", -1 == (t = document.body).className.split(" ").indexOf(e) && (t.className += " " + e)
}

function removeClassBody() {
    var t = document.body;
    t.className = t.className.replace(/\bflow\b/g, "")
}
var lazyaddthis = !(window.onclick = function(t) {
    if (!t.target.matches(".dropbtn")) {
        var e, a = document.getElementsByClassName("dropbtn");
        for (e = 0; e < a.length; e++) {
            var l = a[e];
            l.classList.contains("active") && l.classList.remove("active")
        }
    }
});

function jump(t) {
    var e = document.getElementById(t).offsetTop;
    window.scrollTo(0, e)
}

function scrollFunction() {
    200 < document.body.scrollTop || 200 < document.documentElement.scrollTop ? document.getElementById("backToTop").style.display = "block" : document.getElementById("backToTop").style.display = "none"
}

function topFunction() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}
window.addEventListener("scroll", function() {
    var t, e;
    (0 != document.documentElement.scrollTop && !1 === lazyaddthis || 0 != document.body.scrollTop && !1 === lazyaddthis) && (t = document, (e = t.createElement("script")).src = "//" + shortname + ".disqus.com/embed.js", e.setAttribute("data-timestamp", +new Date), (t.head || t.body).appendChild(e), lazyaddthis = !0)
}, !0), window.onscroll = function() {
    scrollFunction()
};

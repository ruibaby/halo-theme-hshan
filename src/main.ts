import "./styles/main.less"
import "nprogress/nprogress.css"
import NProgress from "nprogress"
import '@purge-icons/generated'

NProgress.start();
document.addEventListener("DOMContentLoaded", function () {
    NProgress.done()
});